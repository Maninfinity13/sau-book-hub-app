import Image from "next/image";

// จำลองข้อมูลหนังสือ (เหมือนใน BooksPage)
const books = [
  { id: 1, title: "Usachan Story", author: "ผู้แต่ง A", img: "/Usachan.jpg", description: "เรื่องราวสนุกสนานของ Usachan" },
  { id: 2, title: "Tama Adventure", author: "ผู้แต่ง B", img: "/Tama.jpg", description: "การผจญภัยของ Tama ในโลกกว้าง" },
  { id: 3, title: "Ahko Tales", author: "ผู้แต่ง C", img: "/Ahko.jpg", description: "นิทาน Ahko สำหรับทุกวัย" },
  { id: 4, title: "Nemu Chronicles", author: "ผู้แต่ง D", img: "/Nemu.jpg", description: "เรื่องราวลึกลับของ Nemu" },
  { id: 5, title: "Momiji Lands", author: "ผู้แต่ง E", img: "/Momiji.jpg", description: "ดินแดน Momiji กับใบไม้สีแดง" },
  { id: 6, title: "Eru Twin", author: "ผู้แต่ง F", img: "/Eru.jpg", description: "เรื่องราวฝาแฝด Eru สุดน่ารัก" },
  { id: 7, title: "Yaku Medicine", author: "ผู้แต่ง G", img: "/Yaku.jpg", description: "ยาและสมุนไพรใน Yaku" },
  { id: 8, title: "Meme meme", author: "ผู้แต่ง H", img: "/Meme.jpg", description: "หนังสือรวมมุขตลก Meme meme" },
];

interface Props {
  params: { id: string };
}

export default function BookDetailPage({ params }: Props) {
  const id = parseInt(params.id, 10);
  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600 text-lg">ไม่พบหนังสือที่คุณค้นหา 😢</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex flex-col md:flex-row gap-6">
          {/* รูปหนังสือ */}
          <div className="relative w-full md:w-1/3 h-64">
            <Image
              src={book.img}
              alt={book.title}
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          {/* ข้อมูลหนังสือ */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-purple-900 mb-2">{book.title}</h1>
            <p className="text-gray-600 mb-4">ผู้แต่ง: {book.author}</p>
            <p className="text-gray-800">{book.description}</p>

            {/* ปุ่มกลับ */}
            <div className="mt-6">
              <a
                href="/books"
                className="inline-block bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition"
              >
                กลับไปหน้ารายการหนังสือ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
