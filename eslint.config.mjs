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

  // custom global rules
  {
    rules: {
      // kamu memang mau pakai <img> dan <a>
      "@next/next/no-img-element": "off",
      "@next/next/no-html-link-for-pages": "off",

      // --- perbaikan utama ---
      // Izinkan tanda ' di JSX text biar gak fail waktu build
      "react/no-unescaped-entities": "off",

      // Jadikan unused vars hanya "warn", dan abaikan yg diawali _
      "@typescript-eslint/no-unused-vars": ["warn", {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
      }],

      // Kalau belum mau beresin dependencies useEffect sekarang:
      "react-hooks/exhaustive-deps": "warn",
      // (atau "off" kalau mau benar-benar diabaikan)
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
