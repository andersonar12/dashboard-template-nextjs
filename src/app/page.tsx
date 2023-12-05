"use client";
import { redirect } from "next/navigation";

export default function Root() {
  // Si no hay token, redirige al inicio de sesión
  redirect("/login");

  return <></>;
}
