"use client";

import Link from "next/link";
import CommuNavbar from "@/components/CommuNavbar"; // import navbar ของคุณ

export default function CommunityPage() {
  const categories = [
    { name: "นิยาย", emoji: "📖" },
    { name: "ธุรกิจ", emoji: "💼" },
    { name: "วิชาการ", emoji: "🎓" },
    { name: "การ์ตูน", emoji: "🖌️" },
    { name: "ไลฟ์สไตล์", emoji: "🌿" },
    { name: "แฟนตาซี", emoji: "🧚" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* CommuNavbar */}
      

      <div className="py-12 px-6 max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-purple-900 mb-4 text-center">
          💬 ห้องพูดคุย
        </h1>
        <p className="text-center text-gray-700 mb-12 text-lg">
          เลือกหมวดหมู่ที่คุณสนใจแล้วเข้าร่วมพูดคุยกับสมาชิกคนอื่น ๆ
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/community/${cat.name}`}
              className="bg-gradient-to-br from-purple-100 via-purple-50 to-purple-200
                         p-6 rounded-2xl text-center font-semibold text-purple-900
                         shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl mb-2">{cat.emoji}</div>
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
