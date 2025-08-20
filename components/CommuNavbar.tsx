"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CommuNavbar() {
  const pathname = usePathname();

  const categories = [
    "นิยาย",
    "ธุรกิจ",
    "วิชาการ",
    "การ์ตูน",
    "ไลฟ์สไตล์",
    "แฟนตาซี",
  ];

  return (
    <nav className="bg-purple-800 text-white py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex overflow-x-auto">
        {categories.map((cat) => {
          const path = `/community/${cat}`;
          const isActive = pathname === path;
          return (
            <Link
              key={cat}
              href={path}
              className={`flex-shrink-0 px-4 py-2 mr-2 rounded-lg font-semibold transition-colors
                ${
                  isActive
                    ? "bg-yellow-400 text-purple-900"
                    : "hover:bg-purple-700 hover:text-yellow-300"
                }`}
            >
              {cat}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
