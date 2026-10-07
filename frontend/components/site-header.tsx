"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export function SiteHeader() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 32px", borderBottom: "1px solid #eaeaea", background: "#fff" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
        <Link href="/home" style={{ fontSize: "20px", fontWeight: "bold", textDecoration: "none", color: "#000" }}>
          🍑 Peach
        </Link>
        <nav style={{ display: "flex", gap: "16px" }}>
          <Link href="/home" style={{ textDecoration: "none", color: "#333", fontWeight: 500 }}>
            Головна
          </Link>
          <Link href="/items" style={{ textDecoration: "none", color: "#333", fontWeight: 500 }}>
            Дошка (Board)
          </Link>
        </nav>
      </div>

      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <Link href="/login" style={{ padding: "8px 16px", borderRadius: "6px", background: "#0070f3", color: "#fff", textDecoration: "none", fontSize: "14px", fontWeight: 600 }}>
          Увійти
        </Link>
        <button 
          onClick={handleLogout} 
          style={{ padding: "8px 16px", borderRadius: "6px", border: "1px solid #ccc", background: "#fff", cursor: "pointer", fontSize: "14px" }}
        >
          Вийти
        </button>
      </div>
    </header>
  );
}