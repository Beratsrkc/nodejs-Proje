// eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";

export default [
  // ESLint’in hazır recommended ayarları
  js.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node,
    },
    rules: {
      // Burada kendi kurallarını ezebilirsin
      "no-unused-vars": "off",     // kullanılmayan değişkenlere izin ver
      "no-console": "warn",        // console.log için uyarı ver ama hata yapma
    },
  },
];
