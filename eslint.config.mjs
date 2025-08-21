import tseslint from 'typescript-eslint';
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";

export default tseslint.config(
  {
    ignores: [".next/"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "@next/next": nextPlugin,
      "react": reactPlugin,
      "react-hooks": hooksPlugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...hooksPlugin.configs.recommended.rules,

      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
      'react/react-in-jsx-scope': 'off',
      
      "@typescript-eslint/no-unused-vars": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
);