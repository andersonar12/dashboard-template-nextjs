"use client";
import Navbar from "@/components/Navbar";
import { useStore } from "@/store";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Navbar />
      <hr />

      {children}
    </section>
  );
}
