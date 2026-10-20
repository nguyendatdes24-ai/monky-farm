/**
 * Monky Farm - Brand Identity Portfolio Data
 * Đồ án Tốt nghiệp Thiết kế Đồ họa / Truyền thông Đa phương tiện 2026
 * Đại học Lạc Hồng · Đội ngũ Sáng lập & Thiết kế Monky Farm
 */

const PORTFOLIO_DATA = [
  // --- NHÓM 01: BRAND CORE & LOGO ---
  {
    id: "logo-vector",
    title: "Biểu Tượng Logo & Ý Niệm Tạo Hình",
    category: "logo",
    categoryLabel: "Brand Core & Logo",
    image: "assets/images/web/logo.svg",
    isSvg: true,
    tag: "Vector Master",
    specs: "Tỉ lệ 354 × 268 pt · Vector SVG Chuẩn hóa",
    desc: "Biểu tượng kép độc bản: Ghép trái cà chua hữu cơ với mặt chú khỉ Monky thông qua kỹ thuật không gian âm (negative space), đồng thời cách điệu chữ 'M' tinh tế. Mầm chồi xanh vươn cao đại diện cho sức sống non trẻ và nông nghiệp bền vững.",
    concept: "Ý tưởng: 'Trong ngoài như một' - sự chân thật, minh bạch từ nguồn cội đến từng sản phẩm trao tay người tiêu dùng."
  },
  {
    id: "logo-grid",
    title: "Hệ Lưới Tỷ Lệ & Kết Cấu Hình Học",
    category: "logo",
    categoryLabel: "Brand Core & Logo",
    image: "assets/images/web/logo-spec-01.png",
    tag: "Grid & Geometry",
    specs: "Đơn vị module chuẩn 1x · Tỉ lệ vàng 1.618",
    desc: "Cấu trúc logo được chuẩn hóa trên hệ thống lưới tọa độ module 1x, kiểm soát nghiêm ngặt độ cong của các đường spline, tỉ lệ khoảng hở và độ cân bằng thị giác tuyệt đối trên mọi kích thước hiển thị.",
    concept: "Đảm bảo tính đồng nhất tuyệt đối giữa bản in ấn cơ học và giao diện pixel kỹ thuật số."
  },
  {
    id: "logo-safezone",
    title: "Khoảng Cách An Toàn & Kích Thước Tối Thiểu",
    category: "logo",
    categoryLabel: "Brand Core & Logo",
    image: "assets/images/web/logo-spec-02.png",
    tag: "Guidelines",
    specs: "Safe Zone = 0.5X · Min Size: In ấn 20mm, Kỹ thuật số 48px",
    desc: "Quy chuẩn khoảng cách bảo vệ xung quanh logo nhằm tránh sự can thiệp của các yếu tố đồ họa khác hoặc mép ấn phẩm. Xác định kích thước tối thiểu đảm bảo độ sắc nét của mầm cây và khuôn mặt khỉ.",
    concept: "Giữ vững độ nhận diện thương hiệu mạnh mẽ ngay cả trên nhãn mác thu nhỏ 20mm."
  },
  {
    id: "logo-variations",
    title: "Hệ Thống Biến Thể Màu Chính Thức",
    category: "logo",
    categoryLabel: "Brand Core & Logo",
    image: "assets/images/web/logo-spec-05.png",
    tag: "Color Variants",
    specs: "7 Phương án màu: Chuẩn, Âm bản, Đơn sắc, Nền tối, Nền sáng",
    desc: "Bộ giải pháp biến thể màu toàn diện bao gồm: Bản full-color chuẩn trên nền trắng, bản đảo màu trên nền Forest Green, bản vàng cam đơn sắc, bản đen trắng 1-bit cho chứng từ hành chính và dập chìm.",
    concept: "Thích ứng linh hoạt trên mọi chất liệu từ giấy kraft mộc, túi vải đến màn hình LED ngoài trời."
  },
  {
    id: "logo-backgrounds",
    title: "Quy Chuẩn Hiển Thị Trên Nền Màu & Ảnh",
    category: "logo",
    categoryLabel: "Brand Core & Logo",
    image: "assets/images/web/logo-spec-07.png",
    tag: "Display Rules",
    specs: "Độ tương phản tối thiểu 4.5:1 (WCAG AA Compliance)",
    desc: "Hướng dẫn ứng dụng logo trên nền màu đơn sắc, nền gradient nông trại và nền ảnh chụp thực tế sản phẩm. Quy định sử dụng bản logo trắng đảo ngược khi độ sáng nền dưới 40%.",
    concept: "Tối ưu hóa khả năng nhận biết thị giác tức thì trong mọi điều kiện ánh sáng thực tế."
  },
  {
    id: "logo-pattern",
    title: "Hệ Thống Họa Tiết Nhận Diện Đặc Trưng (Pattern)",
    category: "logo",
    categoryLabel: "Brand Core & Logo",
    image: "assets/images/web/logo-spec-09.png",
    tag: "Brand Pattern",
    specs: "Seamless Vector Tile · Module co giãn tự do",
    desc: "Họa tiết được cách điệu từ các đường nét mặt chú khỉ, giọt sương và lát cắt củ quả tươi. Nhịp điệu chuyển động tự do, tươi vui gợi nhắc không khí nhộn nhịp, tràn đầy sinh khí tại nông trang Monky Farm.",
    concept: "Giúp công chúng nhận ra thương hiệu tức thì ngay cả khi logo không xuất hiện trực tiếp."
  },

  // --- NHÓM 02: BAO BÌ & PACKAGING ---
  {
    id: "packaging-kraft",
    title: "Hộp Quà Rau Củ Giấy Kraft Cửa Sổ Trong Suốt",
    category: "packaging",
    categoryLabel: "Bao bì & Đóng gói",
    image: "assets/images/web/packaging-kraft-box.png",
    tag: "Eco Packaging",
    specs: "Giấy Kraft nâu mộc 100gsm · Cửa sổ kính màng sinh học PLA",
    desc: "Bao bì cấp 1 ứng dụng triệt để Big Idea 'Trong ngoài như một'. Khách hàng có thể quan sát trực tiếp độ tươi non của từng quả cà chua, búp xà lách qua màng sinh học phân hủy tự nhiên mà không cần bóc hộp.",
    concept: "Thiết kế quai xách gấp thông minh không dùng keo dán, tích hợp mã QR truy xuất nguồn gốc nông trại theo chuẩn VietGAP."
  },
  {
    id: "packaging-fruit",
    title: "Hộp Trái Cây Cao Cấp Monky Farm Xanh Tươi",
    category: "packaging",
    categoryLabel: "Bao bì & Đóng gói",
    image: "assets/images/web/packaging-fruit-box.png",
    tag: "Gift Packaging",
    specs: "Carton cán màng mờ sinh thái · Kích thước 320 × 240 × 120 mm",
    desc: "Phiên bản hộp quà tặng nông sản dành cho dịp lễ Tết và tri ân khách hàng. Phối màu xanh tươi mát kết hợp vàng cam ánh nắng, khóa gài chịu lực chắc chắn, rãnh thông khí đối lưu giữ rau củ tươi nguyên.",
    concept: "Nâng tầm nông sản Việt thành món quà sức khỏe sang trọng, thân thiện môi trường."
  },
  {
    id: "packaging-shipping",
    title: "Thùng Carton Sóng Vận Chuyển Vách Ngăn Mô-đun",
    category: "packaging",
    categoryLabel: "Bao bì & Đóng gói",
    image: "assets/images/web/packaging-box-preview.png",
    tag: "Transport Box",
    specs: "Carton sóng 5 lớp chịu nén BC · Vách ngăn chống va đập",
    desc: "Bao bì cấp 2 phục vụ phân phối từ nông trại Đà Lạt / Đồng Nai đến các chuỗi siêu thị. Cấu trúc hộp âm dương nắp gài, rãnh xách tay hai bên hông và icon hướng dẫn bảo quản thực phẩm trực quan.",
    concept: "Giảm thiểu 95% tỷ lệ dập nát nông sản trong quá trình trung chuyển logistics đường dài."
  },
  {
    id: "packaging-dieline",
    title: "Bản Vẽ Kỹ Thuật Trải Phẳng Dieline & Gia Công In",
    category: "packaging",
    categoryLabel: "Bao bì & Đóng gói",
    image: "assets/images/web/mockup-showcase-07.png",
    tag: "Engineering Dieline",
    specs: "Bản vẽ khuôn bế bế gấp (Dieline CAD) chuẩn xác 1:1",
    desc: "Hồ sơ kỹ thuật trải phẳng dieline chi tiết hiển thị các đường cấn, đường cắt, đường răng cưa xé và khu vực dán băng keo sinh học. Đã qua giai đoạn in mẫu thử nghiệm (mockup proofing) thành công.",
    concept: "Cầu nối chính xác giữa ý tưởng sáng tạo của designer và dây chuyền gia công in ấn công nghiệp."
  },

  // --- NHÓM 03: POSM & QUẢNG CÁO NGOÀI TRỜI ---
  {
    id: "posm-billboard",
    title: "Highway Billboard Cao Tốc 12 × 4m 'Rau Củ Xanh, Sống Khỏe Nhanh'",
    category: "posm",
    categoryLabel: "POSM & Quảng cáo",
    image: "assets/images/web/billboard-highway.jpg",
    tag: "OOH Billboard",
    specs: "Pano tấm lớn 12m × 4m · Tuyến cao tốc Liên Khương - Đà Lạt",
    desc: "Key Visual bùng nổ năng lượng xanh: Chú khỉ Monky lướt ván trên thảm rau củ tươi mọng dọc theo đồi cỏ bao la. Bố cục đường cong chữ S dẫn hướng mắt người xem từ logo đến lời hiệu triệu 'Order Now'.",
    concept: "Gây ấn tượng thị giác cho hàng triệu lượt phương tiện lưu thông, khẳng định vị thế nông nghiệp công nghệ cao."
  },
  {
    id: "posm-poster",
    title: "Poster Đô Thị & Nhà Chờ Xe Buýt Khổ Lớn",
    category: "posm",
    categoryLabel: "POSM & Quảng cáo",
    image: "assets/images/web/poster-vertical.jpg",
    tag: "Urban Poster",
    specs: "Khổ chuẩn 4.5 × 3 m · Hệ thống trạm chờ giao thông công cộng",
    desc: "Ứng dụng hình ảnh chụp cận cảnh những giọt sương mai đọng trên trái ớt chuông và bông cải non. Nét chữ Bark for Life phóng khoáng kết hợp lời nhắc nhở nhẹ nhàng về bữa ăn an lành cho tổ ấm.",
    concept: "Đánh trúng insight người nội trợ đô thị: Mong muốn tìm lại sự thanh khiết tự nhiên giữa phố thị khói bụi."
  },
  {
    id: "posm-standee",
    title: "Standee Điểm Bán & Trạm Trải Nghiệm Hội Chợ OCOP",
    category: "posm",
    categoryLabel: "POSM & Quảng cáo",
    image: "assets/images/web/standee.jpg",
    tag: "Retail Standee",
    specs: "Standee chân cuộn nhôm cao cấp 60 × 160 cm",
    desc: "Bố cục thông tin dọc tinh tế, phân tầng rõ ràng từ cam kết 'Không hóa chất độc hại' đến mã QR quét nhận mã ưu đãi trải nghiệm giỏ rau dùng thử đầu tiên tại điểm bán.",
    concept: "Tạo lực kéo chuyển đổi trực tiếp từ người tham quan thành khách hàng mua sắm thân thiết."
  },
  {
    id: "posm-magazine",
    title: "Tạp Chí Chuyên Đề Nông Nghiệp Xanh 'VeganFood'",
    category: "posm",
    categoryLabel: "POSM & Quảng cáo",
    image: "assets/images/web/magazine-veganfood.png",
    tag: "Editorial Magazine",
    specs: "Khổ A4 (210 × 297 mm) · Giấy Ford kem bảo vệ mắt",
    desc: "Ấn phẩm tạp chí biên soạn công phu với bài viết chuyên sâu về phương pháp canh tác sinh thái vi sinh, công thức salad bổ dưỡng cùng bộ ảnh lookbook món ăn phong cách Farm-to-Table.",
    concept: "Cung cấp tri thức ẩm thực hữu ích, xây dựng cộng đồng người tiêu dùng yêu lối sống thuần chay lành mạnh."
  },
  {
    id: "posm-social",
    title: "Bộ Template Quảng Cáo Đa Nền Tảng Facebook & Instagram",
    category: "posm",
    categoryLabel: "POSM & Quảng cáo",
    image: "assets/images/web/social-post.jpg",
    tag: "Social Media Kit",
    specs: "Tỉ lệ vuông 1:1 (2000 × 2000 px) & Story 9:16",
    desc: "Hệ thống khung hình thiết kế đồng nhất cho các chiến dịch ra mắt: Typography nổi bật, sticker chú khỉ Monky biểu cảm sinh động, bố cục chừa khoảng trống an toàn cho văn bản quảng cáo.",
    concept: "Tối ưu hóa chỉ số nhấp chuột (CTR) và tỷ lệ tương tác tự nhiên trên các kênh truyền thông xã hội thế hệ Gen Z & Millennials."
  },

  // --- NHÓM 04: VĂN PHÒNG & STATIONERY ---
  {
    id: "office-stationery",
    title: "Bộ Ấn Phẩm Văn Phòng Cao Cấp (Identity Stationery)",
    category: "office",
    categoryLabel: "Văn phòng & Ấn phẩm",
    image: "assets/images/web/mockup-showcase-01.png",
    tag: "Corporate Stationery",
    specs: "Giấy mỹ thuật Econo 300gsm · Dập nổi logo thương hiệu",
    desc: "Bộ văn phòng trọn gói gồm danh thiếp hai mặt ép kim viền xanh, bao thư lớn A4, bao thư nhỏ nắp cong vàng cam, folder kẹp hồ sơ chứng nhận VietGAP và thẻ nhân viên đeo cổ.",
    concept: "Thể hiện tính chuyên nghiệp, chỉnh chu và uy tín thương hiệu trong các buổi làm việc với đối tác thu mua lớn."
  },
  {
    id: "office-brochure",
    title: "Brochure Gấp Ba Giới Thiệu Quy Trình Canh Tác 6 Bước",
    category: "office",
    categoryLabel: "Văn phòng & Ấn phẩm",
    image: "assets/images/web/mockup-showcase-05.png",
    tag: "Tri-fold Brochure",
    specs: "Kích thước trải phẳng 300 × 210 mm · Gấp 3 zic-zac",
    desc: "Ấn phẩm giới thiệu toàn cảnh nông trại từ khâu chuẩn bị đất mùn hữu cơ, nguồn nước khoáng tự nhiên, kiểm soát sâu bệnh sinh học đến quy trình thu hoạch sương sớm đóng gói khép kín.",
    concept: "Minh bạch hóa 100% quy trình sản xuất, xóa tan mọi hoài nghi về chất lượng nông sản sạch."
  },
  {
    id: "office-envelope",
    title: "Bao Thư Doanh Nghiệp Nắp Cong Vàng Cam Điểm Nhấn",
    category: "office",
    categoryLabel: "Văn phòng & Ấn phẩm",
    image: "assets/images/web/mockup-showcase-03.png",
    tag: "Envelope System",
    specs: "Kích thước 220 × 110 mm · Giấy Offset 140gsm",
    desc: "Thiết kế nắp bo cong mềm mại gợi liên tưởng đến trái cà chua chín mọng. Mặt trong lót họa tiết pattern mặt khỉ chìm tinh tế, tạo cảm giác bất ngờ thú vị cho người mở thư.",
    concept: "Biến hóa vật dụng hành chính khô khan thành điểm chạm cảm xúc ấm áp và tràn đầy năng lượng tích cực."
  },

  // --- NHÓM 05: QUÀ TẶNG & ĐỒNG PHỤC ---
  {
    id: "gift-calendar",
    title: "Bộ Lịch Bàn 12 Tháng Nông Nghiệp 'Bính Ngọ 2026'",
    category: "merch",
    categoryLabel: "Quà tặng & Đồng phục",
    image: "assets/images/web/mockup-showcase-10.png",
    tag: "2026 Calendar",
    specs: "Lịch chữ A 19 × 22 cm · Đế bồi carton bọc vải lanh mộc",
    desc: "Mỗi tờ lịch một tháng tương ứng với một loại nông sản mùa vụ đặc trưng: Tháng giêng cam sành ngọt lành, tháng hai cải thảo giòn ngọt, tháng ba quả bơ sáp béo ngậy... kèm mẹo dinh dưỡng hữu ích.",
    concept: "Món quà văn hóa tri ân gắn bó cùng bàn làm việc của khách hàng suốt 365 ngày trọn vẹn trong năm 2026."
  },
  {
    id: "merch-uniform",
    title: "Đồng Phục Polo Nhân Viên Nông Trại & Đại Sứ Bán Hàng",
    category: "merch",
    categoryLabel: "Quà tặng & Đồng phục",
    image: "assets/images/web/mockup-showcase-09.png",
    tag: "Staff Uniform",
    specs: "Vải sợi tre Bamboo Cotton 100% thoáng khí · Thêu logo nổi",
    desc: "Thiết kế áo polo cổ bẻ thể thao với gam màu trắng chủ đạo phối viền cổ và tay áo xanh lá nông trại. Logo thêu tinh xảo trên ngực trái, slogan in sau lưng tạo sự đồng bộ chuyên nghiệp.",
    concept: "Tạo dựng hình ảnh đội ngũ nhân viên Monky Farm thân thiện, năng động, tận tụy và mến khách."
  },
  {
    id: "merch-lifestyle",
    title: "Bộ Quà Tặng Lối Sống Xanh (Canvas Tote, Tumbler & Sổ Tay)",
    category: "merch",
    categoryLabel: "Quà tặng & Đồng phục",
    image: "assets/images/web/mockup-showcase-12.png",
    tag: "Eco Merchandise",
    specs: "Chất liệu thân thiện môi trường: Vải canvas mộc, Thép không gỉ 304, Giấy tái chế",
    desc: "Hệ quà tặng phong cách sống bao gồm túi tote đi chợ không rác thải nhựa, ly giữ nhiệt có ống hút thủy tinh, mũ tai bèo làm vườn, sổ tay bìa bã mía và bút chì hạt mầm có thể ươm cây.",
    concept: "Lan tỏa thông điệp sống xanh bền vững từ nông trại bước vào thói quen sinh hoạt thường nhật của mỗi người tiêu dùng."
  }
];

// Color Palette Data for Interactive Swatch System
const BRAND_COLORS = [
  {
    name: "Fresh Green",
    vietnamese: "Xanh Lá Tươi",
    hex: "#73AB43",
    rgb: "115, 171, 67",
    cmyk: "61, 12, 100, 1",
    role: "Màu chủ đạo 01",
    desc: "Biểu trưng cho chồi non, rau củ hữu cơ, sinh khí đất trời và nông nghiệp sinh thái bền vững."
  },
  {
    name: "Golden Honey",
    vietnamese: "Vàng Cam Nhạt",
    hex: "#FCBB46",
    rgb: "252, 187, 70",
    cmyk: "1, 29, 83, 0",
    role: "Màu chủ đạo 02",
    desc: "Sắc màu ánh nắng mai ấm áp, màu quả cà chua chín mọng và sự vui tươi, thông minh của chú khỉ Monky."
  },
  {
    name: "Pure White",
    vietnamese: "Trắng Tinh Khiết",
    hex: "#FFFFFF",
    rgb: "255, 255, 255",
    cmyk: "0, 0, 0, 0",
    role: "Màu nền & Khoảng thở",
    desc: "Đại diện cho sự minh bạch 'Trong ngoài như một', độ tinh khiết không hóa chất bảo quản."
  },
  {
    name: "Earth Brown",
    vietnamese: "Nâu Đất Mùn",
    hex: "#665333",
    rgb: "102, 83, 51",
    cmyk: "0, 19, 50, 60",
    role: "Màu chữ & Nhấn phụ",
    desc: "Gợi nhắc phù sa màu mỡ, đất mùn hữu cơ và vẻ đẹp mộc mạc của chất liệu giấy kraft thiên nhiên."
  },
  {
    name: "Forest Green",
    vietnamese: "Xanh Rừng Sâu",
    hex: "#037D3F",
    rgb: "3, 125, 63",
    cmyk: "98, 0, 50, 51",
    role: "Màu nền đậm & Tương phản",
    desc: "Tạo chiều sâu thị giác vững chãi, cam kết chất lượng an toàn và bảo chứng nguồn gốc tin cậy."
  }
];

// Typography Hierarchy
const BRAND_TYPOGRAPHY = [
  {
    role: "Display / Logo Title",
    fontName: "Bark for Life (Custom)",
    weights: "Bold Handcrafted Regular",
    usage: "Logo wordmark 'Monky', tiêu đề lớn billboard và poster ngoài trời",
    sample: "Rau củ xanh, sống khỏe nhanh",
    characteristics: "Nét bo cong vẽ tay mộc mạc, tinh nghịch, gần gũi với trẻ em và gia đình"
  },
  {
    role: "Subheading / Tagline",
    fontName: "Montserrat & Be Vietnam Pro",
    weights: "ExtraBold 800 / SemiBold 600",
    usage: "Tagline 'Từ nông trại xanh đến bàn ăn sạch', tiêu đề phụ ấn phẩm",
    sample: "FRESH · HEALTHY · TRUSTWORTHY",
    characteristics: "Hình học hiện đại, hỗ trợ chuẩn hóa 100% dấu thanh tiếng Việt (Vietnamese diacritics)"
  },
  {
    role: "Body Content & Data",
    fontName: "Be Vietnam Pro & Plus Jakarta Sans",
    weights: "Regular 400 / Medium 500 / Bold 700",
    usage: "Nội dung văn bản, bảng thành phần dinh dưỡng, thông tin liên hệ và website",
    sample: "100% hữu cơ tự nhiên, chuẩn VietGAP, truy xuất nguồn gốc qua mã QR trên từng bao bì.",
    characteristics: "Tối ưu hóa quang học đặc biệt cho tiếng Việt, hiển thị mượt mà trên mọi thiết bị"
  }
];

// Testimonials / Defense Feedback
const TESTIMONIALS_DATA = [
  {
    quote: "Đồ án có sự đào sâu nghiên cứu bài bản, từ khủng hoảng niềm tin thị trường thực phẩm đến giải pháp 'Trong ngoài như một'. Biểu tượng cà chua kết hợp mặt khỉ bằng không gian âm rất đắt giá và dễ nhớ.",
    author: "ThS. Huỳnh Phan Như Ngọc",
    title: "Giảng viên Hướng dẫn Đồ án Tốt nghiệp",
    organization: "Khoa Mỹ thuật Ứng dụng · Trường ĐH Lạc Hồng",
    rating: 5,
    avatarText: "HN"
  },
  {
    quote: "Hệ thống bao bì không dừng lại ở phối cảnh 3D mà nhóm đã tính toán chi tiết dieline trải phẳng và thử nghiệm mẫu in thực tế. Tính khả thi trong sản xuất công nghiệp và yếu tố sinh thái được giải quyết trọn vẹn.",
    author: "Hội đồng Phản biện Đồ án",
    title: "Ban Giám khảo Đánh giá Chuyên môn",
    organization: "Ngành Truyền thông Đa phương tiện LHU",
    rating: 5,
    avatarText: "HĐ"
  },
  {
    quote: "Là người tiêu dùng luôn lo ngại rau ngậm hóa chất, tôi thật sự xúc động trước ý tưởng hộp giấy kraft có cửa sổ và mã QR minh bạch nguồn gốc. Nhận diện vừa đáng yêu với trẻ em vừa tạo được niềm tin vững chắc.",
    author: "Nguyễn Thu Trang",
    title: "Đại diện Nhóm Khảo sát Người tiêu dùng Đô thị",
    organization: "Biên Hòa, Đồng Nai",
    rating: 5,
    avatarText: "TT"
  }
];
