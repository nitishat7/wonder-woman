/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mission-background': "url('/images/mission/img1.jpg')",
        // You can add more custom background images here if needed
        // 'audience-background': "url('/images/mission/img2.jpg')",
        // 'meeting-background': "url('/images/mission/img3.jpg')",
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'], // Assuming Georgia is intended for 'serif' font
      },
    },
  },
  plugins: [],
} 