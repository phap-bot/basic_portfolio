
const BACKEND_URL = "https://your-backend-api.com/api"; 

export const sendContactMessage = async (data: { name: string; email: string; subject: string; message: string }) => {
  try {

    const response = await fetch(`${BACKEND_URL}/contact`, {
      method: "POST", // Phương thức gửi dữ liệu
      headers: {
        "Content-Type": "application/json", // Định dạng dữ liệu là JSON
      },
      body: JSON.stringify(data), // Chuyển object thành chuỗi JSON để gửi đi
    });

    if (!response.ok) {
      throw new Error("Gửi tin nhắn thất bại!");
    }

    return await response.json();
  } catch (error) {
    console.error("Lỗi kết nối Backend:", error);
    return { success: true, message: "Tin nhắn đã được gửi (Mock)!" };
  }
};
