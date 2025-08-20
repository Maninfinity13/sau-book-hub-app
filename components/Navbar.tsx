"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = JSON.parse(localStorage.getItem("userData") || "null");
      setIsLoggedIn(!!userData);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userData"); // ลบข้อมูล login
    setIsLoggedIn(false);
    router.push("/"); // กลับไปหน้าแรก
  };

  const menu = [
    { name: "หน้าแรก", path: "/" },
    { name: "หนังสือ", path: "/books" },
    { name: "ชุมชน", path: "/community" },
    { name: "เกี่ยวกับเรา", path: "/about" },
  ];

  return (
    <nav className="bg-purple-800 text-white px-6 py-4 flex justify-between items-center">
      <div className="font-bold text-xl">📚 SAU Book Hub</div>
      <div className="flex gap-6">
        {menu.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`hover:text-yellow-300 ${
              pathname === item.path ? "underline" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex gap-3">
        {isLoggedIn ? (
          <>
            <Link
              href="/profile/"
              className="bg-yellow-400 text-black px-3 py-1 rounded-md hover:bg-yellow-300"
            >
              แก้ไขโปรไฟล์
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-400"
            >
              ออกจากระบบ
            </button>
          </>
        ) : (
          <Link
            href="/auth/login"
            className="bg-yellow-400 text-black px-3 py-1 rounded-md hover:bg-yellow-300"
          >
            เข้าสู่ระบบ
          </Link>
        )}
      </div>
    </nav>
  );
}
