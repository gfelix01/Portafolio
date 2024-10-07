/** @type {import('eslint').Linter.Config} */
module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'next/core-web-vitals', // Esta línea es importante para Next.js
    ],
    rules: {
      // Aquí puedes personalizar las reglas
      '@typescript-eslint/no-explicit-any': 'warn', // Cambia a 'error' si quieres que falle
      '@typescript-eslint/ban-ts-comment': 'error', // Cambia a 'warn' si quieres advertencias
    },
    settings: {
      react: {
        version: 'detect', // Detecta la versión de React
      },
    },
  };
  