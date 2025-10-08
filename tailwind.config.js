/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Đảm bảo Tailwind quét cả thư mục src
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'pulse-slow': { // Định nghĩa keyframe cho hiệu ứng pulse-slow
          '0%, 100%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1.25)' },
        }
      },
      animation: {
        'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Áp dụng keyframe
      },
    },
  },
  plugins: [],
};