import axios from "axios";

export async function logoutUser() {
  try {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/logout`, {}, { withCredentials: true });
  } catch (error) {
    console.error(error);
  }
}