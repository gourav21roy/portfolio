/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        c1: "#E57C23",
        bgc: "#27374D",
        c4: "#526D82",
        c2: "#9DB2BF",
        c3: "#DDE6ED",
        grad1: "#0D324D",
        grad2: "#7F5A83",
      },
    },
    fontFamily: {
      sans: ["sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
