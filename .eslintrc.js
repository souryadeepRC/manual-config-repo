module.exports = {
  parser: "@typescript-eslint/parser", // Specify the ESLint parser for TypeScript
  extends: [
    "eslint:recommended", // Use recommended rules
    "plugin:react/recommended", // Use recommended rules for React
    "plugin:@typescript-eslint/recommended", // TypeScript-specific recommended rules
    "plugin:react-hooks/recommended", // Enforce best practices for React hooks
    'prettier', // Disable ESLint rules that conflict with Prettier
    'plugin:prettier/recommended', // Enable Prettier rules as ESLint rules
  ],
  parserOptions: {
    ecmaVersion: 2020, // Allow modern ECMAScript features
    sourceType: "module", // Allow imports
    ecmaFeatures: {
      jsx: true, // Enable JSX parsing
    },
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the React version
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off", // Disable explicit return type for functions
    "react/prop-types": "off", // Disable prop-types validation (optional if using TypeScript)
  },
  env: {
    browser: true, // Specify browser environment
    node: true, // Specify node environment
    es2020: true, // Enable modern JavaScript features
  },
};
