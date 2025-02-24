const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

// ✅ Custom function to flatten Tailwind colors manually
const flattenColors = (colorObject) => {
  const result = {};

  Object.entries(colorObject).forEach(([key, value]) => {
    if (typeof value === "string") {
      result[key] = value;
    } else if (typeof value === "object") {
      Object.entries(value).forEach(([shade, hex]) => {
        result[`${key}-${shade}`] = hex;
      });
    }
  });

  return result;
};

// Plugin: Add Tailwind colors as CSS variables
function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColors(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: colors.blue, // Tailwind blue
        secondary: colors.gray, // Tailwind gray
        accent: colors.violet, // Tailwind violet
      },
      transform: {
        "rotate-y-180": "rotateY(180deg)", // Custom rotation
      },
    },
  },
  plugins: [addVariablesForColors],
};
