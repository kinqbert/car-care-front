import eslintRecommended from "@eslint/js";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";

export default [
  // Base ESLint recommended rules
  eslintRecommended.configs.recommended,

  // TypeScript configuration
  {
    plugins: {
      "@typescript-eslint": typescriptPlugin,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true, // Enable JSX parsing
        },
      },
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
    },
  },

  // React-specific configuration
  {
    plugins: {
      react: reactPlugin,
    },
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
    rules: {
      "react/jsx-uses-react": "off", // Not needed in React 17+ (automatic import)
      "react/react-in-jsx-scope": "off", // Not needed in React 17+ (automatic import)
    },
  },

  // Ignore Vite build directory
  {
    ignores: ["dist"],
  },
];
