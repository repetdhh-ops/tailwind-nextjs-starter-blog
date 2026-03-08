// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          // 这里统一设置你的浅蓝色
          500: '#3b82f6', // 基础浅蓝色 (用于按钮、链接、标签)
          600: '#2563eb', // 悬停时的深蓝色
          400: '#60a5fa', // 深色模式下的蓝色
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}