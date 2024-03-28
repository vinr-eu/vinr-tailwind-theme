/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./layouts/**/*.html"],
  safelist: generateSafelist(["bg", "ring", "ring-offset"]),
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

function generateSafelist() {
  const colors = ["indigo", "purple", "red", "sky", "amber"];

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
