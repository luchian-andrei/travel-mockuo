/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        madefor: ["Wix Madefor Text"],
      },
      backgroundImage: {
        "rio-football": "url('./images/rio-football.png')",
        "rio-landscape": "url('./images/rio-landscape.png')",
        "rio-landscape-mobile": "url('./images/rio-landscape-mobile.png')",
        "rio-night": "url('./images/rio-night.png')",
        "rio-night-mobile": "url('./images/rio-night-mobile.png')",
      },
    },
  },
  plugins: [],
};
