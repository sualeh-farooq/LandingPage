import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next'], // Extending Next.js's default ESLint config
    rules: {
      'react/no-unescaped-entities': 'off', // Disabling unescaped entities rule
      '@next/next/no-page-custom-font': 'off', // Disabling custom font warning rule
    },
  }),
];

export default eslintConfig;
