import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettierConfig from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  // Add Prettier config (must come after other style configs)
  prettierConfig,
  // Add Prettier plugin
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      // Prettier rules
      "prettier/prettier": "error",
    },
  },
]);

export default eslintConfig;
