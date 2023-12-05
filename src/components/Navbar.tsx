"use client";

import { useStore } from "@/store";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const { setToken } = useStore();

  const logout = () => {
    setToken("");
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <nav className="bg-blue-500 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/dashboard/home" className="text-white mr-5 hover:text-blue-300">
            Home
          </Link>
          <Link href="/dashboard/users" className="text-white hover:text-blue-300">
            Users
          </Link>

          <button className="text-white ml-5 hover:text-blue-300" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
