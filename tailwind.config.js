/** @type {import("tailwindcss").Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./layouts/**/*.html"],
  safelist: generateSafelist(["bg", "ring", "ring-offset"]),
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      slate: colors.slate,
      green: colors.green,
      indigo: colors.indigo,
      purple: colors.purple,
      red: colors.red,
      sky: colors.sky,
      amber: colors.amber,
      vinr: {
        50: "#e4dbf9",
        500: "#663bb5",
        600: "#52318a",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

function generateSafelist() {
  const colors = ["indigo", "purple", "red", "sky", "amber", "vinr"];

  const templates = [
    { utility: "bg", shade: "500" },
    { utility: "bg", shade: "600" },
    { utility: "hover:bg", shade: "500" },
    { utility: "text", shade: "500" },
    { utility: "text", shade: "600" },
    { utility: "focus:ring", shade: "500" },
    { utility: "focus:ring", shade: "600" },
    { utility: "focus:ring-offset", shade: "50" },
    { utility: "focus-visible:outline", shade: "600" },
  ];

  let safelist = [];

  colors.forEach((color) => {
    templates.forEach(({ utility, shade }) => {
      safelist.push(`${utility}-${color}-${shade}`);
    });
  });

  return safelist;
}
