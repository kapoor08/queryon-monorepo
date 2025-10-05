/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}", // UI package components
    "./src/components/ui/**/*.{ts,tsx}",
    "../../apps/widget/src/**/*.{ts,tsx}", // Widget app
    "../../apps/admin/src/**/*.{ts,tsx}", // Admin app
  ],
  theme: {
    extend: {
      colors: require("@queryon/theme").colors,
      fontFamily: {
        custom: [require("@queryon/theme").typography.fontFamily],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Required for Shadcn UI form components
    require("@tailwindcss/typography"), // Optional for typography components
  ],
};
