/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Neutral: "#0a0a0a",
        Rose: '#BE123C',
        floralWhite: '#fffaf0',
        rose:'#BE123CB2',
        flower:"#B91C1C",
        light: "#e0bdc6",
        lightBlack: "#12121280",
        lightRed: "#d7768eb2",
      },
      backgroundImage:{
        'hero-image': "url('./assets/spider.jpeg')"
      },
      fontSize: {
        '1xl': "22px",
        "1.5xl": "28px",
      },
      screens: {
        sm: '200px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      padding: {
        '4.5':'18px'
      },
    },
  },
  plugins: [],
}