/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      mulish: '"Mulish"',
      lato: '"Lato',
    },
    fontSize: {
      xsm: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      basePlus: ["18px", "26px"],
      md: ["20px", "28px"],
      lg: ["24px", "32px"],
      llg: ["28px", "36px"],
      xl: ["32px", "40px"],
    },
    extend: {
      colors: {
        "light-black": "#373F41",
      },
    },
  },
  plugins: [],
};
