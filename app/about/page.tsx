import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-yellow-50 flex items-center justify-center px-6">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-3xl text-center">
        {/* รูปโปรไฟล์ */}
        <div className="relative w-32 h-32 mx-auto mb-6">
          <Image
            src="/ChibiShiina.png"
            alt="Profile"
            fill
            className="object-cover rounded-full shadow-lg"
          />
        </div>

        {/* ชื่อหัวข้อ */}
        <h1 className="text-4xl font-extrabold text-purple-900 mb-4">
          เกี่ยวกับฉัน
        </h1>

        {/* เนื้อหา */}
        <p className="text-gray-700 mb-4">
          สวัสดีครับ! ผมเป็นคนรักการอ่าน 📚 และอยากสร้างชุมชนสำหรับผู้ที่ชื่นชอบหนังสือ
          ที่นี่คุณสามารถมาแนะนำหนังสือ รีวิว หรือพูดคุยแลกเปลี่ยนประสบการณ์การอ่าน
          กับเพื่อน ๆ ที่มีความสนใจเหมือนกัน
        </p>

        <p className="text-gray-700 mb-4">
          ผมเชื่อว่าหนังสือเป็นแรงบันดาลใจ และการแบ่งปันความรู้จากการอ่านสามารถสร้าง
          ชุมชนที่อบอุ่นและมีประโยชน์สำหรับทุกคน
        </p>

        <p className="text-gray-700 mb-6">
          หากคุณมีคำแนะนำ หรืออยากติดต่อผม สามารถส่งข้อความมาที่อีเมลของผม
          หรือเข้าร่วมชุมชนของเราเพื่อแลกเปลี่ยนความรู้เกี่ยวกับหนังสือได้เลยครับ
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 text-purple-700 text-2xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
