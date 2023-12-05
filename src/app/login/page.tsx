"use client";

import { useStore } from "@/store";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useStore();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Aquí debes enviar los datos del formulario a tu API
    // y obtener el token. Este es solo un ejemplo.
    // const response = await fetch('/api/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ username, password }),
    // })

    // const data = await response.json()

    // Guarda el token en la tienda Zustand
    localStorage.setItem("token", "TOKEN-123");
    setToken("TOKEN-123");
    router.push("/dashboard/home");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div>
        <h1>Login</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label className="mt-4">
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label className="mt-4">
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
