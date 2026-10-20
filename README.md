# MONKY FARM — BRAND IDENTITY SYSTEM PORTFOLIO (2026)
> **Đồ án Tốt nghiệp Ngành Truyền thông Đa phương tiện — Trường Đại học Lạc Hồng (LHU)**  
> **Đơn vị thực hiện & Thiết kế:** Đội ngũ Sáng lập Monky Farm (Nguyễn Văn Đạt · Vũ Minh Huyên)  
> **Sinh viên thực hiện:** Nguyễn Văn Đạt (MSSV: 725000767) · Vũ Minh Huyên (MSSV: 725000643) — Lớp 24AG712  
> **Giảng viên hướng dẫn:** ThS. Huỳnh Phan Như Ngọc  
> **Thời gian:** Tháng 10 / 2026  

---

## 🌿 1. TỔNG QUAN ĐỀ TÀI & TRIẾT LÝ SÁNG TẠO
- **Tên đề tài:** Thiết kế hệ thống nhận diện thương hiệu Công ty TNHH Rau củ sạch Monky Farm *(Brand Identity System Design for Monky Farm Clean Vegetables Co., Ltd.)*.
- **Triết lý:** *"Từ nông trại xanh đến bàn ăn sạch"* — **Fresh · Healthy · Trustworthy**.
- **Slogan & Key Visual:** *"Rau củ xanh, sống khỏe nhanh"*.
- **Ý tưởng chủ đạo (Big Idea):** **"TRONG NGOÀI NHƯ MỘT"**  
  Xuất phát từ cuộc khủng hoảng niềm tin an toàn thực phẩm năm 2025, đồ án đề xuất giải pháp nhận diện minh bạch: Trái cà chua trong logo là ẩn dụ cho sự chân thật (bên ngoài và bên trong đều là cà chua), bao bì giấy kraft tích hợp cửa sổ màng sinh học PLA trong suốt cùng mã QR truy xuất nguồn gốc nông trại.

---

## 🎨 2. HỆ THỐNG QUY CHUẨN THIẾT KẾ (BRAND GUIDELINES)
- **Biểu tượng (Icon Concept):** Tạo hình kép kết hợp quả cà chua với khuôn mặt chú khỉ Monky bằng kỹ thuật không gian âm (negative space), đồng thời cách điệu thành chữ "M".
- **Bảng màu nhận diện:**
  - 🟢 **Fresh Green:** `#73AB43` (RGB: 115, 171, 67 · CMYK: 61, 12, 100, 1) — Màu chủ đạo rau non, sinh thái.
  - 🟡 **Golden Honey:** `#FCBB46` (RGB: 252, 187, 70 · CMYK: 1, 29, 83, 0) — Màu cà chua chín, ánh nắng và sự năng động.
  - ⚪ **Pure White:** `#FFFFFF` — Nền tảng minh bạch và thanh khiết.
  - 🟤 **Earth Brown:** `#665333` (RGB: 102, 83, 51) — Đất mùn hữu cơ, màu chữ văn bản.
  - 🌲 **Forest Green:** `#037D3F` (RGB: 3, 125, 63) — Bảo chứng chất lượng và chiều sâu tương phản.
- **Hệ thống Typography:**
  - **Display / Wordmark:** *Bark for Life* (tùy biến nét vẽ tay mộc mạc, tinh nghịch).
  - **Heading / Tagline:** *Montserrat Alternates ExtraBold*.
  - **Body / Content:** *Plus Jakarta Sans* & *Roboto*.

---

## 💻 3. KIẾN TRÚC MÃ NGUỒN FRONT-END
Dự án được xây dựng theo tiêu chuẩn **Pure Vanilla Web Technologies (HTML5 + CSS3 + Vanilla JavaScript)**, tải trang tức thì, chuẩn SEO Semantic và tương thích responsive 100% trên mọi kích thước màn hình:

```text
MONKY_FARM/
├── index.html                     # Giao diện Portfolio chính (Semantic HTML5, SEO & Schema.org)
├── css/
│   ├── style.css                  # Toàn bộ Design System, Token CSS, Grid/Flexbox & Responsive
│   └── animations.css             # Keyframes, Scroll Reveal (IntersectionObserver), Motion
├── js/
│   ├── portfolio-data.js          # Dữ liệu có cấu trúc 17+ hạng mục, mã màu, font & phản biện
│   └── main.js                    # Controller: Tab lọc, Lightbox Modal, Copy màu, Video player, Form
├── assets/
│   ├── images/
│   │   ├── web/                   # 55 tệp hình ảnh web chuẩn hóa (SVG, Mockup, POSM, Logo)
│   │   ├── logo/                  # Vector gốc SVG và 10 bản quy cách logo
│   │   ├── design/                # Key visual billboard, poster, standee
│   │   └── mockup/                # Các bản phối cảnh bao bì, tạp chí
│   ├── videos/
│   │   └── showreel.mp4           # Video Showreel giới thiệu nông trại 50 giây (Full HD)
│   └── docs/                      # Báo cáo DATN (Docx/PDF) & Slide thuyết trình
├── serve.ps1                      # Server HTTP siêu nhẹ chạy trực tiếp trên Windows PowerShell
└── README.md                      # Tài liệu hướng dẫn bàn giao
```

---

## 🚀 4. HƯỚNG DẪN KHỞI CHẠY (LOCAL DEVELOPMENT)

### Cách 1: Khởi chạy qua Local Server PowerShell (Khuyến nghị)
1. Mở PowerShell trong thư mục dự án:
   ```powershell
   powershell -ExecutionPolicy Bypass -File serve.ps1 -Port 8080
   ```
2. Mở trình duyệt web bất kỳ (Chrome / Edge / Firefox) và truy cập:
   ```text
   http://localhost:8080/
   ```

### Cách 2: Mở trực tiếp tập tin HTML
- Do mã nguồn hoàn toàn là HTML/CSS/JS thuần và toàn bộ đường dẫn ảnh/video đều là đường dẫn tương đối chuẩn (`assets/...`), bạn có thể nhấp đúp trực tiếp vào tệp `index.html` để mở ngay trên trình duyệt mà không cần cài thêm bất kỳ phần mềm nào.

---

## 🌐 5. ĐỊA CHỈ TRỰC TUYẾN & TRIỂN KHAI (LIVE HOSTING)

### 🌟 Trang web đã được xuất bản chính thức trực tuyến:
- **🌐 Website Live (GitHub Pages):** [https://nguyendatdes24-ai.github.io/monky-farm/](https://nguyendatdes24-ai.github.io/monky-farm/)
- **📦 GitHub Repository:** [https://github.com/nguyendatdes24-ai/monky-farm](https://github.com/nguyendatdes24-ai/monky-farm)

### 🔄 Cách cập nhật mã nguồn lên web sau này:
Mỗi khi bạn có chỉnh sửa hình ảnh hoặc nội dung, chỉ cần mở PowerShell trong thư mục này và chạy:
```bash
git add .
git commit -m "Cập nhật nội dung mới"
git push
```
GitHub Pages sẽ tự động cập nhật phiên bản mới sau khoảng 30 - 60 giây!

### ⚡ Tùy chọn Hosting mở rộng (Vercel / Netlify):
Nếu muốn gắn tên miền riêng (ví dụ: `monkyfarm.vn` hoặc `monkyfarm.design`):
1. Đăng nhập [Vercel](https://vercel.com) hoặc [Netlify](https://netlify.com) bằng tài khoản GitHub `nguyendatdes24-ai`.
2. Chọn "Import Git Repository" > Chọn `monky-farm`.
3. Bấm **Deploy**. Vercel/Netlify sẽ cấp chứng chỉ SSL miễn phí và hỗ trợ gắn tên miền riêng trong 1 cú nhấp chuột.
