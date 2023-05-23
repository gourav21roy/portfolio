/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // bgc: "#025464",
        c1: "#E57C23",
        // c2: "#E8AA42",
        // c3: "#F8F1F1",
        bgc: "#27374D",
        c4: "#526D82",
        c2: "#9DB2BF",
        c3: "#DDE6ED",
      },
    },
    fontFamily: {
      sans: ["sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
