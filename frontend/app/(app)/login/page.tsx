"use client";

import { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Створюємо тимчасовий токен авторизації
    const mockToken = "mock-user-token-" + Date.now();
    localStorage.setItem("token", mockToken);

    // 2. Перенаправляємо на дошку з повним оновленням сторінки
    window.location.href = "/items";
  };

  return (
    <div style={{ maxWidth: "400px", margin: "80px auto", padding: "24px", border: "1px solid #eaeaea", borderRadius: "12px", fontFamily: "sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>🍑 Peach Authorization</h2>
      
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button
          type="button"
          onClick={() => setIsLogin(true)}
          style={{ flex: 1, padding: "10px", borderRadius: "6px", border: "none", background: isLogin ? "#0070f3" : "#eee", color: isLogin ? "#fff" : "#333", cursor: "pointer" }}
        >
          Увійти
        </button>
        <button
          type="button"
          onClick={() => setIsLogin(false)}
          style={{ flex: 1, padding: "10px", borderRadius: "6px", border: "none", background: !isLogin ? "#0070f3" : "#eee", color: !isLogin ? "#fff" : "#333", cursor: "pointer" }}
        >
          Реєстрація
        </button>
      </div>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <button type="submit" style={{ padding: "12px", borderRadius: "6px", border: "none", background: "#0070f3", color: "#fff", fontWeight: "bold", cursor: "pointer" }}>
          {isLogin ? "Увійти" : "Створити акаунт"}
        </button>
      </form>
    </div>
  );
}