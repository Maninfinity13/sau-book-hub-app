"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EditProfilePage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  // โหลดข้อมูลผู้ใช้เมื่อ component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = JSON.parse(localStorage.getItem("userData") || "null");
      if (!data) {
        router.push("/auth/login"); // ถ้ายังไม่ login
      } else {
        setUsername(data.username);
        setEmail(data.email);
      }
    }
  }, [router]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    // อัปเดต localStorage
    const updatedData = { username, email };
    localStorage.setItem("userData", JSON.stringify(updatedData));

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const index = users.findIndex((u: any) => u.email === email);
    if (index !== -1) {
      users[index] = updatedData;
      localStorage.setItem("users", JSON.stringify(users));
    }

    alert("แก้ไขโปรไฟล์สำเร็จ!");
    router.push("/"); // กลับไปหน้า Home
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-purple-50 to-yellow-100">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-lg border border-purple-200">
        <h1 className="text-4xl font-extrabold text-purple-900 text-center mb-8">
          ✏️ แก้ไขโปรไฟล์
        </h1>

        <form className="space-y-6" onSubmit={handleSave}>
          <div>
            <label className="block text-md font-semibold text-gray-800 mb-2">ชื่อผู้ใช้</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-purple-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-purple-400 focus:outline-none text-gray-900 font-medium placeholder-gray-400"
              placeholder="เช่น booklover99"
              required
            />
          </div>

          <div>
            <label className="block text-md font-semibold text-gray-800 mb-2">อีเมล</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-purple-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-purple-400 focus:outline-none text-gray-900 font-medium placeholder-gray-400"
              placeholder="your@email.com"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-3 rounded-xl font-bold hover:bg-purple-800 transition shadow-lg"
          >
            💾 บันทึกการแก้ไข
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          กลับไปหน้าแรก?{" "}
          <a href="/" className="text-purple-700 font-semibold hover:underline">
            คลิกที่นี่
          </a>
        </p>
      </div>
    </div>
  );
}
