import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: process.cwd(),
})

export default [
  {
    ignores: ['.next/*', 'node_modules/*', 'dist/*', 'build/*'],
  },
  ...compat.config({
    extends: [
      'next/core-web-vitals',  // This includes the Next.js recommended rules
    ],
  }),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off', 
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-wrapper-object-types': 'off',
      '@typescript-eslint/no-this-alias': 'off',
      'react/no-unescaped-entities': 'off',
    },
  },
] 