import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    button: "src/components/button.tsx",
    input: "src/components/input.tsx",
    card: "src/components/card.tsx",
  },
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  minify: true,
  clean: true,
  external: ["react", "react-dom"],
  banner: {
    js: '"use client"',
  },
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
});
