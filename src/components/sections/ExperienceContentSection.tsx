// src/components/sections/ExperienceContentSection.tsx
'use client';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import { BarChart, BrainCircuit, Users, Brush, Code, Bot, Clapperboard, ShieldCheck } from 'lucide-react';

// --- CÁC COMPONENT KHÁC GIỮ NGUYÊN ---
const SvgLogo = ({ path, className = 'h-5 w-5', viewBox = '0 0 24 24' }: { path: string, className?: string, viewBox?: string }) => (
  <svg className={className} role="img" viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
    <path d={path} fill="currentColor" />
  </svg>
);
const ToolTag = ({ name, logo }: { name: string, logo?: React.ReactNode }) => (
  <div className="flex items-center bg-zinc-700 text-gray-200 text-sm font-medium px-3 py-2 rounded-full">
    {logo && <div className="mr-2">{logo}</div>}
    {name}
  </div>
);

// --- COMPONENT NỀN ĐỘNG ---
const AnimatedBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      animate(mouseX, e.clientX);
      animate(mouseY, e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // --- DÒNG CODE ĐÃ ĐƯỢC SỬA LẠI ---
  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(400px at ${x}px ${y}px, rgba(45, 212, 191, 0.1), transparent 80%)`
  );

  return <motion.div style={{ background }} className="absolute inset-0 -z-10" />;
};


const SkillCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <motion.div
      className="bg-zinc-800/50 p-6 rounded-lg border border-white/10 h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      <div className="flex items-center text-cyan-400 mb-4">
        {icon}
        <h3 className="text-xl font-bold ml-3 text-white">{title}</h3>
      </div>
      <div className="text-gray-300 text-lg leading-relaxed">{children}</div>
    </motion.div>
  );

export default function ExperienceContentSection() {
  return (
    <section id="experience" className="bg-zinc-900 py-20 text-white relative overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold hero-text-gradient">Kinh Nghiệm & Năng Lực Chuyên Môn</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
            Kết hợp tư duy chiến lược, kỹ năng phân tích dữ liệu chuyên sâu và năng lực quản trị để tối đa hóa hiệu quả marketing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <SkillCard icon={<BarChart size={28} />} title="Phân Tích Dữ Liệu & Tư Vấn Chiến Lược">
            <ul className="space-y-4 list-none">
              <li>
                Sở hữu kỹ năng <strong className="highlight text-xl">phân tích số liệu</strong> ở cấp độ chuyên gia, kết hợp với hệ thống <strong className="highlight text-xl">CRM tự phát triển</strong> để <strong className="text-white font-semibold">tracking và đo lường dữ liệu chuyên sâu</strong>.
              </li>
              <li>
                Năng lực "giải mã" hành vi khách hàng, đưa ra các chỉ số chính xác nhằm <strong className="text-white font-semibold">tối ưu hiệu suất quảng cáo</strong> đến mức độ cao nhất.
              </li>
              <li>
                Cung cấp những <strong className="highlight text-xl">insight đắt giá</strong>, giúp <strong className="text-white font-semibold">BOD (Ban Giám Đốc)</strong> đưa ra các quyết định chiến lược đúng đắn, đảm bảo <strong className="text-white font-semibold">hiệu quả vượt trội</strong> và <strong className="highlight text-xl">tiết kiệm tối đa ngân sách</strong>.
              </li>
            </ul>
          </SkillCard>
          
          <SkillCard icon={<Users size={28} />} title="Quản Trị Đội Ngũ & Hiệu Suất">
             <ul className="space-y-4 list-none">
                <li>
                    Xây dựng và quản lý đội ngũ marketing theo <strong className="highlight text-xl">hệ thống cấp bậc</strong> rõ ràng và hiệu quả.
                </li>
                <li>
                    Áp dụng cơ chế <strong className="text-white font-semibold">theo dõi và báo cáo KPI</strong> minh bạch, giúp đánh giá chính xác kết quả và tạo động lực, thúc đẩy năng suất làm việc của từng cá nhân để đạt được mục tiêu chung của tổ chức.
                </li>
             </ul>
          </SkillCard>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard icon={<ShieldCheck size={28} />} title="Tối Ưu Website & SEO">
              <ul className="space-y-4 list-none text-base">
                  <li>
                      Thực hiện <strong className="text-white font-semibold">bảo trì, sao lưu dữ liệu</strong> và xây dựng hệ thống <strong className="highlight">an ninh mạng</strong>, chủ động chống lại các cuộc tấn công <strong className="text-white font-semibold">DDoS</strong>.
                  </li>
                  <li>
                      Triển khai toàn diện chiến lược <strong className="highlight">SEO on-page và off-page</strong> để tối ưu hóa thứ hạng và tăng trưởng traffic bền vững.
                  </li>
              </ul>
            </SkillCard>

            <SkillCard icon={<Brush size={28} />} title="Công Cụ Sáng Tạo">
              <div className="flex flex-wrap gap-3 mt-2">
                <ToolTag name="Adobe Photoshop" logo={<SvgLogo path="M12.28 2.05h9.39v9.39h-9.39zM2.33 12.56h9.39v9.39H2.33zm12.9-.1h6.26v6.26h-6.26z" className="h-4 w-4 text-[#31A8FF]" />} />
                <ToolTag name="Adobe Premiere" logo={<SvgLogo path="M12.28 2.05h9.39v9.39h-9.39zM2.33 12.56h9.39v9.39H2.33zm14.16-1.36h5v5h-5z" className="h-4 w-4 text-[#9999FF]" />} />
                <ToolTag name="Canva" logo={<SvgLogo path="M14.36 21.64c.2-1.07.3-2.17.3-3.29 0-3.3-1.44-6.3-3.8-8.22-1.12-.9-2.43-1.57-3.87-2-1.2-.36-2.45-.5-3.7-.4C.1 8.24-.04 10.1.01 12c.04 1.5.1 3 .2 4.5.3 4.14 4.3 7.24 8.44 6.94 1.9-.15 3.7-.8 5.2-1.9.15-.1.3-.2.5-.4zM9.54 2.36c.96-1.06 2.7-1.37 4.1-1.17 3.32.48 5.8 3.22 5.95 6.55.13 2.7-1.14 5.2-3.1 6.7-1.4 1.08-3.07 1.7-4.8 1.7-2.9 0-5.5-1.7-6.7-4.3C3.5 8.73 4.8 5.35 7.63 3.65c.6-.37 1.25-.6 1.9-.9z" className="h-4 w-4 text-[#00C4CC]" />} />
                <ToolTag name="Capcut Pro" />
              </div>
            </SkillCard>
            
            <SkillCard icon={<Code size={28} />} title="Công Nghệ & Lập Trình">
              <div className="flex flex-wrap gap-3 mt-2">
                <ToolTag name="Python" logo={<SvgLogo path="M12 24c-3.23 0-6.3-1.32-8.5-3.5S0 15.23 0 12c0-3.31 1.34-6.41 3.5-8.5C5.7 1.32 8.8.01 12 .01c3.1 0 6.1 1.2 8.5 3.5 2.3 2.3 3.5 5.3 3.5 8.5s-1.2 6.2-3.5 8.5S15.1 24 12 24zm-1-16H9v3h2v10H9v3h5c3.31 0 5-1.69 5-5s-1.69-5-5-5h-2V8z" className="h-4 w-4 text-[#3776AB]" />} />
                <ToolTag name="HTML" logo={<SvgLogo path="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.623L17.531 6l-.233 2.622-8.532 1.128zm.232 5.25l-.232-2.622 4.488.563.142-1.58-4.9-1.042-.344-3.832h10.42l-.344 3.832h-4.9l.142 1.58 4.488-.563-.344 3.832-4.488 1.128-4.488-1.128z" className="h-4 w-4 text-[#E34F26]" />} />
                <ToolTag name="CSS" logo={<SvgLogo path="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.531 6l-.232 2.622-8.532-1.128.232-2.623 8.532 1.128zM9 12.25l.232 2.622 2.743.765 2.744-.765.232-2.622H9zm-.232 5.25l-.232-2.622-4.488-1.128.344-3.832h4.608l.232 2.622 4.488 1.128 4.488-1.128.232-2.622h4.608l-.344 3.832-4.488 1.128z" className="h-4 w-4 text-[#1572B6]" />} />
                <ToolTag name="SQL" logo={<SvgLogo path="M0 0v24h24V0H0zm18.532 18.532A6.533 6.533 0 0112 20.264a6.533 6.533 0 01-6.532-1.732A6.533 6.533 0 013.736 12a6.533 6.533 0 011.732-6.532A6.533 6.533 0 0112 3.736a6.533 6.533 0 016.532 1.732A6.533 6.533 0 0120.264 12a6.533 6.533 0 01-1.732 6.532z" className="h-4 w-4 text-[#F29111]" />} />
                <ToolTag name="Visual Studio Code" />
              </div>
            </SkillCard>

            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <SkillCard icon={<BrainCircuit size={28} />} title="Quản Lý & Vận Hành Marketing">
                  <div className="flex flex-wrap gap-3 mt-2">
                    <ToolTag name="Google Firebase" logo={<SvgLogo path="m3.63 20.53 14.07-14.07-2.13-2.12L1.5 18.41z" className="h-4 w-4 text-[#FFCA28]" />} />
                    <ToolTag name="Google Analytics 4" logo={<SvgLogo path="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zM9 12h2v6H9zm4 0h2v6h-2z" className="h-4 w-4 text-[#F9AB00]" />} />
                    <ToolTag name="Google My Business" />
                    <ToolTag name="Pancake" />
                    <ToolTag name="Omicall" />
                  </div>
                </SkillCard>
                
                <SkillCard icon={<Bot size={28} />} title="Công Cụ AI (General)">
                  <div className="flex flex-wrap gap-3 mt-2">
                    <ToolTag name="ChatGPT" logo={<SvgLogo path="M21.285 18.497c-2.152 2.15-5.21 3.503-8.818 3.503-2.69 0-5.152-.77-7.22-2.126L3.92 20.12c.704.49 1.49.894 2.33.119L11.232 12 6.25 6.91l.244-4.83C7.2 2.05 8 2 8.7 2c3.608 0 6.666 1.353 8.818 3.503S21 11.21 21 14s-1.355 5.15-3.505 6.647z" className="h-4 w-4 text-[#75A99F]" />} />
                    <ToolTag name="Gemini" logo={<SvgLogo path="M12 24a1.85 1.85 0 0 1-1.3-.55l-9.15-9.14a1.85 1.85 0 0 1 0-2.6l9.14-9.15a1.85 1.85 0 0 1 2.6 0l9.15 9.14a1.85 1.85 0 0 1 0 2.6l-9.14 9.15a1.85 1.85 0 0 1-1.3.55zm-7.84-10.45l7.84 7.84 7.84-7.84-7.84-7.84z" className="h-4 w-4 text-[#8E77D8]" />} />
                    <ToolTag name="Deepseek" />
                    <ToolTag name="Grok" />
                  </div>
                </SkillCard>

                <SkillCard icon={<Clapperboard size={28} />} title="Công Cụ AI (Image/Video)">
                  <div className="flex flex-wrap gap-3 mt-2">
                    <ToolTag name="Veo" />
                    <ToolTag name="Nano Banana" />
                    <ToolTag name="Kling" />
                    <ToolTag name="Midjourney AI" logo={<SvgLogo path="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6S6.698 2.4 12 2.4s9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6z" className="h-4 w-4" />} />
                  </div>
                </SkillCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}