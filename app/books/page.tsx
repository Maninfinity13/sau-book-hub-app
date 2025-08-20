"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function BooksPage() {
  const [books, setBooks] = useState([
    { id: 1, title: "Usachan Story", author: "ผู้แต่ง A", img: "/Usachan.jpg" },
    { id: 2, title: "Tama Adventure", author: "ผู้แต่ง B", img: "/Tama.jpg" },
    { id: 3, title: "Ahko Tales", author: "ผู้แต่ง C", img: "/Ahko.jpg" },
    { id: 4, title: "Momiji lands", author: "ผู้แต่ง D", img: "/Momiji.jpg" },
    { id: 5, title: "Yaku medicine", author: "ผู้แต่ง E", img: "/Yaku.jpg" },
    { id: 6, title: "Meme missdirection", author: "ผู้แต่ง F", img: "/Meme.jpg" },
    { id: 7, title: "Eru twin", author: "ผู้แต่ง G", img: "/Eru.jpg" },
    { id: 8, title: "Nemu Chronicles", author: "ผู้แต่ง H", img: "/Nemu.jpg" },
  ]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    imgFile: null as File | null,
    imgPreview: "" as string,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = JSON.parse(localStorage.getItem("userData") || "null");
      setIsLoggedIn(!!userData);
    }
  }, []);

  const handleAddBook = () => {
    if (!isLoggedIn) {
      alert("กรุณา login ก่อนเพิ่มหนังสือ!");
      return;
    }
    setShowModal(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setNewBook({
        ...newBook,
        imgFile: file,
        imgPreview: URL.createObjectURL(file),
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextId = books.length + 1;
    const newEntry = {
      id: nextId,
      title: newBook.title,
      author: newBook.author,
      img: newBook.imgPreview || "/placeholder.jpg",
    };
    setBooks([...books, newEntry]);
    setNewBook({ title: "", author: "", imgFile: null, imgPreview: "" });
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-900 mb-6 text-center">
          หนังสือแนะนำ
        </h1>

        <div className="flex justify-end mb-6">
          <button
            onClick={handleAddBook}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            ➕ เพิ่มหนังสือ
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="h-40 w-full relative mb-3">
                <Image
                  src={book.img}
                  alt={book.title}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <h2 className="font-semibold text-gray-800">{book.title}</h2>
              <p className="text-gray-600 text-sm mt-1">ผู้แต่ง: {book.author}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 text-lg font-bold"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold mb-4 text-purple-900 text-center">
              เพิ่มหนังสือใหม่
            </h2>

            <form onSubmit={handleFormSubmit} className="space-y-4 text-gray-800">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ชื่อหนังสือ
                </label>
                <input
                  type="text"
                  required
                  value={newBook.title}
                  onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                  className="w-full border border-gray-300 px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ผู้แต่ง
                </label>
                <input
                  type="text"
                  required
                  value={newBook.author}
                  onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                  className="w-full border border-gray-300 px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  เลือกรูปจากอุปกรณ์
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full"
                />
                {newBook.imgPreview && (
                  <img
                    src={newBook.imgPreview}
                    alt="preview"
                    className="mt-2 w-full h-40 object-cover rounded border"
                  />
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800 transition"
              >
                เพิ่มหนังสือ
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
