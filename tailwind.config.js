module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        gray: {
          darkest: "#151515",
          dark: "#3c4858",
          DEFAULT: "#c0ccda",
          light: "#e0e6ed",
          lightest: "#f9fafc",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
