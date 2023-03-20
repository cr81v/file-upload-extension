/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["popup.tsx", "components/**/*.tsx"],
  theme: {
    extend: {}
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp")
  ]
}
