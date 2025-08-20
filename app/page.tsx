"use client";

import Link from "next/link";
import Image from "next/image";

const books = [
  { id: 1, title: "Usachan Story", author: "ผู้แต่ง A", img: "/Usachan.jpg" },
  { id: 2, title: "Tama Adventure", author: "ผู้แต่ง B", img: "/Tama.jpg" },
  { id: 3, title: "Ahko Tales", author: "ผู้แต่ง C", img: "/Ahko.jpg" },
  { id: 4, title: "Nemu Chronicles", author: "ผู้แต่ง D", img: "/Nemu.jpg" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-purple-900 text-white py-20 text-center shadow-md">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          📚 SAU Book Hub
        </h1>
        <p className="text-lg mb-6 opacity-90">
          ชุมชนคนรักการอ่าน แชร์ แนะนำ และพูดคุยเรื่องหนังสือ
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/auth/register"
            className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-bold shadow hover:bg-yellow-400"
          >
            สมัครสมาชิก
          </Link>
          <Link
            href="/books"
            className="bg-white text-purple-900 border border-purple-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100"
          >
            สำรวจหนังสือ
          </Link>
        </div>
      </section>

      {/* Recommended Books */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-purple-200 pb-2">
          📖 หนังสือแนะนำ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <Link key={book.id} href={`/books/${book.id}`} className="group">
              <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
                <div className="h-40 w-full relative mb-3">
                  <Image
                    src={book.img}
                    alt={book.title}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <h3 className="font-semibold text-gray-800 group-hover:text-purple-700 transition">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-600">{book.author}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-right mt-4">
          <Link href="/books" className="text-purple-700 hover:underline">
            ดูทั้งหมด →
          </Link>
        </div>
      </section>
    </div>
  );
}
