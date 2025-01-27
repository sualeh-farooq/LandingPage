import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    files: ["**/*.{js,jsx,ts,tsx}"], // Match JavaScript/TypeScript files
    languageOptions: {
      ecmaVersion: 2021, // Modern JavaScript features
      sourceType: "module", // Enable ES modules
    },
    env: {
      browser: true,  // Enable browser global variables
      commonjs: true, // Enable CommonJS global variables and CommonJS scoping
      es2021: true,   // Enable all ECMAScript 2021 globals
      node: true,     // Enable Node.js global variables and Node.js scoping
    },
    rules: {
      // Add custom rules here
    },
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
  },
];

export default eslintConfig;
