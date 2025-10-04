import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    colors: "src/colors.ts",
    typography: "src/typography.ts",
    themes: "src/themes.ts",
    "tailwind.config": "src/tailwind.config.ts",
  },
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
});
