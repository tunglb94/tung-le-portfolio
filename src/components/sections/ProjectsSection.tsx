// src/components/sections/ProjectsSection.tsx
'use client';
import { motion } from 'framer-motion';
import { 
  Layers, Github, ExternalLink, HeartPulse, MapPin, Building, Bot, Wrench 
} from 'lucide-react';
import Image from 'next/image'; // Thêm import Image

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-zinc-950 py-20 text-white">
      <div className="container mx-auto px-6">
        {/* Tiêu đề section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold hero-text-gradient">
            Các Dự Án Đã Triển Khai
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
            Từ ý tưởng, chiến lược đến triển khai thực tế và đo lường hiệu quả.
          </p>
        </motion.div>

        {/* --- Dự án BJF Jewelry Store --- */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Cột trái: Mô tả BJF */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-cyan-400 mb-4">
                Hệ thống Website Vàng Bạc Đá Quý BJF
              </h3>
              <p className="text-lg text-gray-300 mb-4">
                Xây dựng và phát triển một hệ thống <strong className="highlight">full-stack</strong> toàn diện, bao gồm cả frontend và backend cho thương hiệu trang sức BJF. 
                Hệ thống backend được thiết kế riêng, cung cấp một giao diện quản trị mạnh mẽ cho phép <strong className="text-white">quản lý toàn bộ sản phẩm, đơn hàng, nhân viên, và dữ liệu khách hàng</strong> một cách chi tiết và bảo mật.
              </p>

              {/* Thông tin chi tiết về BJF */}
              <div className="text-gray-400 text-base mb-6 space-y-2">
                <p><strong>Công ty:</strong> BJF Group</p>
                <p className="flex items-center"><MapPin size={16} className="mr-2 text-cyan-400"/> Địa chỉ: 77 Đ. Nguyễn Duy Dương, Phường 9, Quận 5, Hồ Chí Minh</p>
                <p><strong>Website chính thức:</strong> <a href="https://bjf.com.vn/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">bjf.com.vn</a></p>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <a href="https://tunglb941.pythonanywhere.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  <ExternalLink size={20} />
                  Xem Live
                </a>
                <a href="https://github.com/tunglb94/bjf-jewelry-store" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  <Github size={20} />
                  Mã Nguồn
                </a>
              </div>
              <Image // ĐÃ SỬA: Thay <img> bằng <Image>
                src="/projects/bjf-backend.png"
                alt="BJF Backend System"
                width={1200}
                height={800}
                className="rounded-lg shadow-2xl border border-white/10 w-full h-auto"
              />
            </motion.div>

            {/* Cột phải: Ảnh Frontend BJF */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[600px] w-full bg-zinc-800 rounded-xl p-2 border border-white/10 shadow-2xl group"
            >
              <div className="h-6 bg-zinc-900 rounded-t-lg flex items-center px-2">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              
              <a href="https://tunglb941.pythonanywhere.com/" target="_blank" rel="noopener noreferrer" className="relative block h-full w-full">
                 <Image // ĐÃ SỬA: Thay <img> bằng <Image>
                    src="/projects/bjf-frontend.png"
                    alt="BJF Frontend Screenshot"
                    fill={true} // Sử dụng fill cho Image bên trong thẻ <a> để lấy kích thước từ parent
                    style={{ objectFit: 'cover' }}
                    className="rounded-b-lg"
                 />
                 <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white">
                       <ExternalLink size={40} />
                       <p className="mt-2 text-xl font-bold">Click để xem trang live</p>
                    </div>
                 </div>
              </a>
            </motion.div>
          </div>
        </div>

        {/* --- Dự án Doctor AI --- */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Cột trái: Collage ảnh ứng dụng */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <Image src="/projects/doctor-ai-1.jpg" alt="Doctor AI Screen 1" width={200} height={400} className="rounded-xl shadow-lg transform rotate-3 border-2 border-white/10 mx-auto w-full h-auto" /> {/* ĐÃ SỬA */}
              <Image src="/projects/doctor-ai-2.jpg" alt="Doctor AI Screen 2" width={200} height={400} className="rounded-xl shadow-lg transform -rotate-3 mt-8 border-2 border-white/10 mx-auto w-full h-auto" /> {/* ĐÃ SỬA */}
              <Image src="/projects/doctor-ai-3.jpg" alt="Doctor AI Screen 3" width={200} height={400} className="rounded-xl shadow-lg transform -rotate-2 border-2 border-white/10 mx-auto w-full h-auto" /> {/* ĐÃ SỬA */}
              <Image src="/projects/doctor-ai-4.jpg" alt="Doctor AI Screen 4" width={200} height={400} className="rounded-xl shadow-lg transform rotate-2 mt-8 border-2 border-white/10 mx-auto w-full h-auto" /> {/* ĐÃ SỬA */}
            </motion.div>
            
            {/* Cột phải: Mô tả Doctor AI */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="lg:pl-12"
            >
              <HeartPulse size={40} className="text-cyan-400 mb-4" />
              <h3 className="text-3xl font-bold text-cyan-400 mb-4">
                Ứng dụng Tư vấn Sức khỏe AI - Doctor AI
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Một dự án <strong className="highlight">vì cộng đồng</strong>, sử dụng sức mạnh của Trí tuệ nhân tạo để mang lại sự hỗ trợ y tế ban đầu cho mọi người. Ứng dụng giúp:
              </p>
              <ul className="space-y-4 text-lg text-gray-300 list-disc list-inside">
                <li><strong className="text-white">Phân tích triệu chứng:</strong> Người dùng có thể mô tả tình trạng để AI đưa ra những chẩn đoán và lời khuyên sơ bộ.</li>
                <li><strong className="text-white">Giải quyết vấn đề thầm kín:</strong> Cung cấp một không gian an toàn để hỏi về các bệnh lý nhạy cảm, khó chia sẻ trực tiếp.</li>
                <li><strong className="text-white">Đọc kết quả y tế:</strong> Hỗ trợ đọc và giải thích các kết quả xét nghiệm phức tạp như X-quang, MRI bằng công nghệ AI tiên tiến.</li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* --- Dự án Nanky Beauty --- */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Cột trái: Mô tả Nanky Beauty */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <Building size={40} className="text-cyan-400 mb-4" />
              <h3 className="text-3xl font-bold text-cyan-400 mb-4">
                Founder Thương Hiệu Nanky Beauty
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Với vai trò là <strong className="highlight">Founder</strong>, đã xây dựng Nanky Beauty từ những viên gạch đầu tiên, định vị trở thành một trong những <strong className="text-white">hệ thống nối mi chuyên nghiệp và uy tín hàng đầu tại TP.HCM</strong>. Tập trung vào chất lượng dịch vụ cao cấp, đào tạo đội ngũ kỹ thuật viên bài bản và xây dựng một cộng đồng khách hàng trung thành thông qua các chiến lược branding và social media hiệu quả.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://www.instagram.com/nanky.beauty" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white font-semibold py-2 px-4 rounded-lg transition-opacity">
                  Instagram
                </a>
                <a href="https://www.facebook.com/nanky.beaute" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  Facebook
                </a>
              </div>
            </motion.div>

            {/* Cột phải: Ảnh Nanky Beauty */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image // ĐÃ SỬA: Thay <img> bằng <Image>
                src="/projects/nanky-beauty.jpg"
                alt="Nanky Beauty Storefront"
                width={800}
                height={1000}
                className="rounded-lg shadow-2xl border border-white/10 w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* --- Các Tool & Hệ thống Tự Phát Triển --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tool giá đất */}
          <motion.div
            className="bg-zinc-800/50 p-6 rounded-lg border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Bot size={28} className="text-cyan-400 mb-3" />
            <h4 className="text-xl font-bold text-white mb-2">Tool Thu Thập Giá Đất</h4>
            <p className="text-gray-300 mb-4">Hệ thống tự động quét và thu thập dữ liệu giá đất tại TP.HCM theo thời gian thực, phục vụ cho việc phân tích và đầu tư.</p>
            <div className="flex items-center gap-4">
                <a href="https://bjf-group-app.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
                  <ExternalLink size={16} /> Xem Live
                </a>
                <a href="https://github.com/tunglb94/bjf" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
                  <Github size={16} /> Mã Nguồn
                </a>
              </div>
          </motion.div>
          
          {/* CRM Nanky Beauty */}
          <motion.div
            className="bg-zinc-800/50 p-6 rounded-lg border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Wrench size={28} className="text-cyan-400 mb-3" />
            <h4 className="text-xl font-bold text-white mb-2">Hệ Thống CRM Nanky Beauty</h4>
            <p className="text-gray-300">Phần mềm CRM được thiết kế riêng để quản lý lịch hẹn, thông tin khách hàng, và các chiến dịch marketing cho hệ thống spa.</p>
          </motion.div>

          {/* Các tool khác */}
          <motion.div
            className="bg-zinc-800/50 p-6 rounded-lg border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Layers size={28} className="text-cyan-400 mb-3" />
            <h4 className="text-xl font-bold text-white mb-2">...Và Nhiều Hệ Thống Khác</h4>
            <p className="text-gray-300">Bao gồm CRM cho DNA và các phần mềm, tool tự phát triển khác nhằm tối ưu hóa quy trình làm việc và quản lý nguồn lực hiệu quả.</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}