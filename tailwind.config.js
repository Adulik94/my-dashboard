// tailwind.config.js

module.exports = {
  // ... other configs (content, plugins)
  theme: {
    extend: {
      colors: {
        // Define 'lexa' as a new color family
        // This makes 'bg-lexa-50', 'text-lexa-900', etc., available
        lexa: {
          50: "#f5f0fa",
          100: "#e6dff5",
          200: "#d1bdf0",
          300: "#b998eb",
          400: "#a176e6",
          500: "#874fe0", // Primary/Mid purple
          600: "#6c39b3",
          700: "#502885",
          800: "#7a6fbe",
          900: "#2d3447", // Very dark purple
          950: "#2a3142",
        },
      },
    },
  },
};
