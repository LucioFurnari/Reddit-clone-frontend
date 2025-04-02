import { useAuthStore } from "@/store/authStore";
import { logoutUser } from "@/services/authSerivce";
import { redirect } from "next/navigation";

export default function LogoutButton() {
  const { stateLogout } = useAuthStore();

  function handleLogout() {
    logoutUser();
    stateLogout();
    // Redirect to home page
    redirect("/");
  }

  return (
    <button onClick={() => {
      handleLogout();
    }} className="ml-4 bg-red-500 px-3 py-1 rounded cursor-pointer hover:bg-red-400">
      Logout
    </button>
  )
}