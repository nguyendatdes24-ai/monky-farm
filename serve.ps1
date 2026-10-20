param([int]$Port = 8080)
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
try {
    $listener.Start()
    Write-Output "Monky Farm Local Dev Server running at http://localhost:$Port/"
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $localPath = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrEmpty($localPath)) { $localPath = "index.html" }
        $localPath = [Uri]::UnescapeDataString($localPath)

        $fullPath = Join-Path (Get-Location).Path $localPath

        if (Test-Path $fullPath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($fullPath).ToLower()

            $contentType = switch ($ext) {
                ".html" { "text/html; charset=utf-8" }
                ".css"  { "text/css; charset=utf-8" }
                ".js"   { "application/javascript; charset=utf-8" }
                ".svg"  { "image/svg+xml" }
                ".png"  { "image/png" }
                ".jpg"  { "image/jpeg" }
                ".jpeg" { "image/jpeg" }
                ".mp4"  { "video/mp4" }
                ".pdf"  { "application/pdf" }
                Default { "application/octet-stream" }
            }

            $response.ContentType = $contentType
            $response.Headers.Add("Accept-Ranges", "bytes")

            $fileInfo = New-Object System.IO.FileInfo($fullPath)
            $totalLength = $fileInfo.Length

            $rangeHeader = $request.Headers["Range"]
            if ($rangeHeader -and $rangeHeader.StartsWith("bytes=")) {
                $range = $rangeHeader.Substring(6).Split('-')
                [long]$start = 0
                [long]$end = $totalLength - 1

                if ($range[0].Length -gt 0) { [long]::TryParse($range[0], [ref]$start) | Out-Null }
                if ($range.Length -gt 1 -and $range[1].Length -gt 0) { [long]::TryParse($range[1], [ref]$end) | Out-Null }

                if ($end -ge $totalLength) { $end = $totalLength - 1 }
                $contentLength = $end - $start + 1

                $response.StatusCode = 206
                $response.Headers.Add("Content-Range", "bytes $start-$end/$totalLength")
                $response.ContentLength64 = $contentLength

                $fs = [System.IO.File]::OpenRead($fullPath)
                $fs.Seek($start, [System.IO.SeekOrigin]::Begin) | Out-Null
                
                $buffer = New-Object byte[] 65536
                $remaining = $contentLength
                while ($remaining -gt 0) {
                    $toRead = [int][Math]::Min($buffer.Length, $remaining)
                    $read = $fs.Read($buffer, 0, $toRead)
                    if ($read -le 0) { break }
                    try {
                        $response.OutputStream.Write($buffer, 0, $read)
                    } catch {
                        break
                    }
                    $remaining -= $read
                }
                $fs.Close()
            } else {
                $response.StatusCode = 200
                $response.ContentLength64 = $totalLength
                $fs = [System.IO.File]::OpenRead($fullPath)
                $fs.CopyTo($response.OutputStream)
                $fs.Close()
            }
        } else {
            $response.StatusCode = 404
            $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.OutputStream.Write($msg, 0, $msg.Length)
        }
        try {
            $response.Close()
        } catch {}
    }
} finally {
    $listener.Stop()
}
