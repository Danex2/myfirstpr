module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
};
