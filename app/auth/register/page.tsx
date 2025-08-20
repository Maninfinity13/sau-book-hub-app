"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("รหัสผ่านกับยืนยันรหัสผ่านไม่ตรงกัน!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const exists = users.some((u: any) => u.email === email);
    if (exists) {
      alert("อีเมลนี้ถูกใช้สมัครแล้ว!");
      return;
    }

    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("สมัครสมาชิกสำเร็จ!");
    router.push("/auth/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-yellow-50">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md border border-purple-200">
        <h1 className="text-3xl font-extrabold text-purple-900 text-center mb-4">
          สมัครสมาชิก
        </h1>
        <p className="text-center text-gray-700 mb-6">
          เข้าร่วมชุมชนคนรักการอ่าน 📚
        </p>

        <form className="space-y-5" onSubmit={handleRegister}>
          <div>
            <label className="block text-gray-800 font-semibold mb-1">ชื่อผู้ใช้</label>
            <input
              type="text"
              placeholder="เช่น booklover99"
              className="w-full border border-gray-300 px-4 py-2 rounded-xl 
                         focus:outline-none focus:ring-2 focus:ring-purple-400 
                         text-gray-900 placeholder-gray-400 font-medium"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 font-semibold mb-1">อีเมล</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full border border-gray-300 px-4 py-2 rounded-xl 
                         focus:outline-none focus:ring-2 focus:ring-purple-400 
                         text-gray-900 placeholder-gray-400 font-medium"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 font-semibold mb-1">รหัสผ่าน</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 px-4 py-2 rounded-xl 
                         focus:outline-none focus:ring-2 focus:ring-purple-400 
                         text-gray-900 placeholder-gray-400 font-medium"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 font-semibold mb-1">ยืนยันรหัสผ่าน</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 px-4 py-2 rounded-xl 
                         focus:outline-none focus:ring-2 focus:ring-purple-400 
                         text-gray-900 placeholder-gray-400 font-medium"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-3 rounded-xl font-bold 
                       hover:bg-purple-800 transition shadow-lg"
          >
            สมัครสมาชิก
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          มีบัญชีแล้ว?{" "}
          <a href="/auth/login" className="text-purple-700 font-semibold hover:underline">
            เข้าสู่ระบบ
          </a>
        </p>
      </div>
    </div>
  );
}
