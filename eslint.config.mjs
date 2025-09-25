import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // extend config bawaan next
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // tambahkan custom config
  {
    rules: {
      // 🚫 matikan aturan yang blok <a> dan <img>
      "@next/next/no-img-element": "off",
      "@next/next/no-html-link-for-pages": "off",

      // opsional: kalau masih sering pakai `any`
      "@typescript-eslint/no-explicit-any": "off",
    },
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
