'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function TechBackground() {
  const [mounted, setMounted] = useState(false);

  // 1. Khởi tạo các giá trị theo dõi chuột
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Thêm hiệu ứng lò xo (spring) để chuyển động mượt mà
  const springConfig = { damping: 30, stiffness: 100, mass: 2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3. Khai báo TẤT CẢ các hiệu ứng Transform ở đây (Đảm bảo đúng chuẩn React Hook)
  const rotateX = useTransform(smoothY, [-1, 1], [5, -5]); 
  const rotateY = useTransform(smoothX, [-1, 1], [-5, 5]); 
  
  const moveX = useTransform(smoothX, [-1, 1], [-30, 30]); 
  const moveY = useTransform(smoothY, [-1, 1], [-30, 30]); 

  const glowMoveX = useTransform(smoothX, [-1, 1], [-80, 80]); 
  const glowMoveXReverse = useTransform(smoothX, [-1, 1], [80, -80]); // Di chuyển ngược lại

  // 4. Theo dõi sự kiện chuột
  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // LUÔN ĐẶT LỆNH NÀY DƯỚI CÙNG (Sau khi đã gọi hết các Hook)
  if (!mounted) return <div className="fixed inset-0 bg-zinc-950 -z-50" />;

  return (
    <div className="fixed inset-0 w-full h-full bg-zinc-950 overflow-hidden pointer-events-none -z-50" style={{ perspective: '1000px' }}>
      
      {/* Khung chứa 3D */}
      <motion.div 
        className="w-full h-full relative"
        style={{ 
          rotateX, 
          rotateY, 
          x: moveX, 
          y: moveY 
        }}
      >
        {/* 1. Ánh sáng mờ (Glow Ambient) */}
        <motion.div 
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-cyan-600/20 rounded-full blur-[120px]" 
          style={{ x: glowMoveX }}
        />
        <motion.div 
          className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-600/20 rounded-full blur-[120px]" 
          style={{ x: glowMoveXReverse }} 
        />

        {/* 2. Lưới điện tử (Tech Grid) */}
        <div className="absolute inset-[-150px]">
            <div className="absolute inset-0 tech-grid opacity-30" />
        </div>

        {/* 3. Các hạt Dữ liệu (Data Nodes) */}
        {Array.from({ length: 40 }).map((_, i) => {
          const randomX = Math.random() * 120 - 10;
          const randomY = Math.random() * 120 - 10;
          const randomDuration = Math.random() * 15 + 15;
          const randomDelay = Math.random() * -20; 
          
          return (
            <motion.div
              key={i}
              className="absolute w-[3px] h-[3px] bg-cyan-400 rounded-full shadow-[0_0_12px_4px_rgba(34,211,238,0.8)]"
              initial={{ 
                x: `${randomX}vw`, 
                y: `${randomY}vh`, 
                opacity: Math.random() * 0.5 + 0.1 
              }}
              animate={{
                y: [`${randomY}vh`, `${randomY - 20}vh`, `${randomY}vh`],
                x: [`${randomX}vw`, `${randomX + 8}vw`, `${randomX}vw`],
                opacity: [0.1, 1, 0.1],
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
                ease: "linear"
              }}
            />
          );
        })}
      </motion.div>

      {/* CSS cho Grid */}
      <style>{`
        .tech-grid {
          background-size: 60px 60px;
          background-image: 
            linear-gradient(to right, rgba(34, 211, 238, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 211, 238, 0.15) 1px, transparent 1px);
          -webkit-mask-image: radial-gradient(circle at center, black 20%, transparent 80%);
          mask-image: radial-gradient(circle at center, black 20%, transparent 80%);
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% { transform: translateY(-60px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}