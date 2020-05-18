module.exports = {
  purge: ["pages/**/*", "components/**/*"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
};
