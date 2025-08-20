"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // อ่านข้อมูลผู้ใช้จาก localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // ตรวจสอบว่า email + password ตรงกับผู้ใช้ไหนหรือไม่
    const user = users.find(
      (u: any) => u.email === email && u.password === password
    );

    if (user) {
      // บันทึกข้อมูลผู้ใช้ลง localStorage สำหรับ session
      localStorage.setItem(
        "userData",
        JSON.stringify({ email: user.email, username: user.username })
      );

      // นำทางไปหน้าแรก
      router.push("/");
    } else {
      alert("ไม่พบผู้ใช้งาน หรือรหัสผ่านไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-yellow-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-purple-900 text-center mb-2">
          เข้าสู่ระบบ
        </h1>
        <p className="text-center text-gray-600 mb-6">
          ยินดีต้อนรับกลับ! 🖐️
        </p>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              อีเมล
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg 
                        focus:ring-2 focus:ring-purple-500 focus:outline-none
                        text-gray-900 font-medium placeholder-gray-400 tracking-wide"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              รหัสผ่าน
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg 
                        focus:ring-2 focus:ring-purple-500 focus:outline-none
                        text-gray-900 font-medium placeholder-gray-400 tracking-wide"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-2 rounded-lg font-semibold hover:bg-purple-800 transition"
          >
            เข้าสู่ระบบ
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          ยังไม่มีบัญชี?{" "}
          <a href="/auth/register" className="text-purple-700 hover:underline">
            สมัครสมาชิก
          </a>
        </p>
      </div>
    </div>
  );
}
