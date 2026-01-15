import nextPlugin from "@next/eslint-plugin-next";

export default [
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**"],
  },
  nextPlugin.configs["core-web-vitals"],
  {
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
];
