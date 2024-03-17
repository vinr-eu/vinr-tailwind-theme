/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html"],
  safelist: generateSafelist(["bg", "ring", "ring-offset"]),
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};

function generateSafelist() {
  const colors = ["indigo", "purple", "red", "sky"];

  const templates = [
    { utility: "bg", shade: "500" },
    { utility: "hover:bg", shade: "400" },
    { utility: "focus:ring", shade: "400" },
    { utility: "focus:ring-offset", shade: "50" },
  ];

  let safelist = [];

  colors.forEach((color) => {
    templates.forEach(({ utility, shade }) => {
      safelist.push(`${utility}-${color}-${shade}`);
    });
  });

  return safelist;
}
