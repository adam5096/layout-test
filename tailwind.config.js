/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./pages/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        NotoSansTCRegular: ["NotoSansTC-Regular", "sans-serif"], // 自訂字體名稱與備用字體
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
