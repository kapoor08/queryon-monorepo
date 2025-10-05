import { colors } from "./colors";
import { typography } from "./typography";

export const themes = {
  light: {
    colors,
    typography,
    background: colors.background,
    text: colors.text,
  },
  dark: {
    colors: {
      ...colors,
      background: "#1a1a1a",
      text: "#ffffff",
    },
    typography,
  },
};
