
import { Project, Skill, Experience } from './types';

export const DEV_NAME = "Tấn Pháp";
export const DEV_ROLE = "AI Engineering Student & Web Developer";
export const DEV_BIO = "Sinh viên năm 3 chuyên ngành Trí tuệ nhân tạo tại Đại học FPT. Đam mê giải quyết vấn đề bằng Python, SQL và xây dựng các hệ thống Web/API hiện đại. Cựu cầu thủ năng động của CLB Bóng đá FPTU.";

// Bạn hãy thay các link dưới đây bằng link thật của bạn
export const GITHUB_URL = "https://github.com/phap-bot"; // Ví dụ: https://github.com/tanphap-dev
export const LINKEDIN_URL = "https://www.linkedin.com/in/tanphap1201vn/";
export const FACEBOOK_URL = "https://www.facebook.com/tanphap01";

export const PROJECTS: Project[] = [
  {
    title: "AI Image Processor",
    description: "Ứng dụng xử lý hình ảnh sử dụng Python và các thư viện học máy, tích hợp API để tự động hóa quy trình phân loại.",
    tags: ["Python", "OpenCV", "API", "FastAPI"],
    link: "#",
    github: "https://github.com/tanphap/ai-image-processor", // Link github dự án
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "E-Commerce Management System",
    description: "Hệ thống quản lý bán hàng với backend SQL tối ưu, hỗ trợ quản lý kho và báo cáo doanh thu thời gian thực.",
    tags: ["SQL", "Web Dev", "Node.js", "React"],
    link: "#",
    github: "https://github.com/phap-bot/Smartlearning", // Link github dự án
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "FPTU Hackathon Project",
    description: "Dự án đạt giải Khuyến khích Hackathon - Giải pháp công nghệ hỗ trợ sinh viên trong quá trình học tập tại campus.",
    tags: ["Hackathon", "Product Design", "Python", "Web"],
    link: "#",
    github: "https://github.com/tanphap/hackathon-fptu", // Link github dự án
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800"
  }
];

export const SKILLS: Skill[] = [
  { name: "Python", level: 90, category: "AI" },
  { name: "SQL & Database", level: 85, category: "Backend" },
  { name: "Web Development", level: 88, category: "Frontend" },
  { name: "API Development", level: 82, category: "Backend" },
  { name: "React.js", level: 80, category: "Frontend" },
  { name: "AI/ML Basics", level: 75, category: "AI" },
  { name: "Data Analysis", level: 80, category: "AI" },
  { name: "Git / Docker", level: 70, category: "Tools" }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Đại học FPT",
    role: "Sinh viên năm 3 chuyên ngành AI",
    period: "2022 - Hiện tại",
    description: [
      "Tập trung nghiên cứu về các thuật toán học máy và xử lý dữ liệu lớn.",
      "Thành viên tích cực trong các đồ án công nghệ tại trường.",
      "Duy trì GPA ấn tượng trong các môn chuyên ngành kỹ thuật."
    ]
  },
  {
    company: "FPTU Hackathon",
    role: "Giải Khuyến khích (2 Mùa liên tiếp)",
    period: "2023 - 2024",
    description: [
      "Xây dựng prototype ứng dụng trong vòng 48 giờ dưới áp lực cao.",
      "Phối hợp nhóm để đưa ra giải pháp AI tối ưu cho vấn đề thực tế.",
      "Được đánh giá cao về khả năng trình bày và tư duy logic."
    ]
  },
  {
    company: "CLB Bóng đá FPTU",
    role: "Thành viên chính thức",
    period: "2022 - Hiện tại",
    description: [
      "Rèn luyện tinh thần đồng đội và khả năng chịu áp lực thông qua các giải đấu nội bộ.",
      "Tham gia các hoạt động ngoại khóa giúp cân bằng giữa học tập và rèn luyện thể chất."
    ]
  }
];

export const SYSTEM_PROMPT = `
Bạn là phiên bản AI của Tấn Pháp. Tấn Pháp là sinh viên năm 3 chuyên ngành AI tại Đại học FPT.
Hãy trả lời các câu hỏi về kỹ năng, kinh nghiệm và dự án của Pháp một cách chuyên nghiệp nhưng thân thiện.

Thông tin quan trọng:
- Trường: Đại học FPT.
- Chuyên ngành: Trí tuệ nhân tạo (AI).
- Kỹ năng chính: Python, SQL, Web Development, API.
- Thành tích: Giải Khuyến khích Hackathon 2 mùa, thành viên CLB Bóng đá FPTU.
- Tính cách: Năng động, thích thử thách, đam mê công nghệ.

Lưu ý:
- Trả lời bằng tiếng Việt. 
- Giữ phong thái của một sinh viên công nghệ tài năng và cầu tiến.
- Nếu được hỏi về bóng đá, hãy chia sẻ rằng đó là niềm đam mê giúp Pháp rèn luyện sức khỏe và tinh thần teamwork.
`;
