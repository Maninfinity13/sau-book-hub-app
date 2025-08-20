import { useParams } from "next/navigation";
import Link from "next/link";

export default function CategoryPage() {
  const params = useParams();
  const category = params.category;

  // ตัวอย่างโพสต์ในหมวดนี้
  const posts = [
    { id: 1, title: `โพสต์ตัวอย่าง 1 ในหมวด ${category}`, content: "นี่คือเนื้อหาโพสต์สั้น ๆ..." },
    { id: 2, title: `โพสต์ตัวอย่าง 2 ในหมวด ${category}`, content: "สมาชิกแชร์ประสบการณ์และคำแนะนำ..." },
    { id: 3, title: `โพสต์ตัวอย่าง 3 ในหมวด ${category}`, content: "ตัวอย่างโพสต์เพิ่มเติมสำหรับหมวดนี้..." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-purple-900 mb-4">
          💬 ห้อง: {category}
        </h1>
        <p className="text-gray-700 mb-8">
          ดูโพสต์ล่าสุดในหมวด {category} และเข้าร่วมพูดคุยกับสมาชิกคนอื่น ๆ
        </p>

        {/* List of posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h2 className="font-semibold text-gray-800 text-lg mb-2 hover:text-purple-700 transition">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm">{post.content}</p>
              <div className="text-right mt-2">
                <Link href="#" className="text-purple-700 hover:underline text-sm">
                  อ่านต่อ →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Link กลับหน้า Community */}
        <div className="mt-12 text-center">
          <Link
            href="/community"
            className="text-purple-900 font-semibold hover:underline"
          >
            ← กลับไปหน้าหมวดทั้งหมด
          </Link>
        </div>
      </div>
    </div>
  );
}
