/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      // Disable eslint checks during production builds
      ignoreDuringBuilds: true,
  
      // Custom ESLint rule configurations
      rules: {
        'react/no-unescaped-entities': 'off', // Disable unescaped entities rule
        '@next/next/no-page-custom-font': 'off', // Disable custom font warning
      },
    },
  };
  
  module.exports = nextConfig;
  