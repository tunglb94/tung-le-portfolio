// src/components/sections/ExperienceSection.tsx
'use client';
import { motion } from 'framer-motion';

const experienceData = [
  { date: '04/2025 - Hiện tại', company: 'BJF Group', title: 'Marketing Manager' },
  { date: '09/2022 - 03/2025', company: 'USAC Group', title: 'Marketing Manager' },
  { date: '08/2021 - 08/2022', company: 'J&T Express Vietnam', title: 'Senior Digital Marketing Specialist' },
  { date: '01/2019 - 04/2021', company: 'Vỹ Nam Group', title: 'Digital Marketing Leader' },
  { date: '01/2018 - 12/2018', company: 'DI Marketing', title: 'Product Development Specialist' },
  { date: '12/2016 - 05/2017', company: 'PanPages TRINITY - Vietnam', title: 'Account Executive' },
];

const BriefcaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;

const TimelineItem = ({ data, index }: { data: typeof experienceData[0], index: number }) => {
  const isOdd = index % 2 !== 0;
  const itemVariants = {
    hidden: { opacity: 0, x: isOdd ? 50 : -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };
  return (
    <motion.div
      className={`mb-8 flex justify-between items-center w-full ${isOdd ? 'md:flex-row-reverse' : 'md:flex-row'}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      variants={itemVariants}
    >
      <div className="order-1 md:w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-zinc-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">{experienceData.length - index}</h1>
      </div>
      <div className={`order-1 ${isOdd ? 'md:text-right' : 'md:text-left'} bg-zinc-800/50 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4`}>
        <p className="text-cyan-400 text-sm">{data.date}</p>
        <h3 className="mb-2 font-bold text-white text-xl">{data.company}</h3>
        <p className="text-md leading-snug tracking-wide text-gray-300">{data.title}</p>
      </div>
    </motion.div>
  );
};

export default function ExperienceSection() {
  return (
    <section id="process" className="bg-zinc-950 py-20 text-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold hero-text-gradient">
            <BriefcaseIcon />
            Quá Trình Làm Việc
          </h2>
        </motion.div>
        <div className="relative wrap overflow-hidden p-2 md:p-10 h-full">
          <motion.div 
            className="absolute border-2-2 border-cyan-500/30 h-full border"
            style={{ left: '50%' }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          ></motion.div>
          {experienceData.map((item, index) => (
            <TimelineItem key={index} data={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}