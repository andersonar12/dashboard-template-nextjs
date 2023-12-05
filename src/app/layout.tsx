"use client";
import { useStore } from "@/store";
import "./globals.css";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token && window.location.pathname !== "/login") {
      redirect("/login");
    }
  }, []);

  return (
    <html lang="en">
      <body className={""}>{children}</body>
    </html>
  );
}
