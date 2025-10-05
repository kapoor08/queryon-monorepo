import type { Config } from "tailwindcss";
import { colors } from "./colors";
import { typography } from "./typography";

export const tailwindConfig: Config = {
  content: [
    "../../apps/**/*.{ts,tsx}", // Adjust to include widget/admin app paths
    "../ui/src/**/*.{ts,tsx}", // Include @queryon/ui components
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        custom: [typography.fontFamily],
      },
      fontSize: typography.fontSize,
      lineHeight: typography.lineHeight,
    },
  },
  plugins: [],
};
