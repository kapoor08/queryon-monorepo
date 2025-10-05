/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "../../apps/widget/src/**/*.{ts,tsx}", // Adjust for widget app
    "../../apps/admin/src/**/*.{ts,tsx}", // Adjust for admin app
  ],
  theme: {
    extend: {
      colors: require("@queryon/theme").colors,
      fontFamily: {
        custom: [require("@queryon/theme").typography.fontFamily],
      },
    },
  },
  plugins: [],
};
