/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./js/*.js", "main.js"],
  theme: {
    extend: {
      display: ['-webkit-box'],
      colors:{
        no: "red",
        head_bg: "rgba(255, 255, 255, 0.92)",
        mainBlack: "#16191D",
        white: "#fff",
        mainBack: "#F0F3F7",
        primaryText: "#16191D",
        secondaryText: "#8E9297",
        bgHover: "#388FF3"
      },
      boxShadow:{
        '3xl': "0px 12px 36px 0px rgba(14, 17, 22, 0.10)",
        '7xl': "0px 2px 28px 0px rgba(23, 24, 26, 0.20)",
        product: "0px 4px 15px 0px rgba(56, 143, 243, 0.12)",
        card: '0px 4px 20px 0px rgba(0, 0, 0, 0.08)',
        inputCard: '1px solid  #EAEDF0'
      },
      border:{
        input: "1px solid #EAEDF0",
        bold: "1px solid #388FF3"
      }
    },
  },
  plugins: [],
}

