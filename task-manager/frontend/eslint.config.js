// eslint.config.js
import { defineConfig } from "eslint/config";
import html from "@html-eslint/eslint-plugin";

export default defineConfig([
	{
		rules: {
			semi: "error",
			"prefer-const": "error",
		},
	},
    {
        files: ["**/*.html"],
        plugins: {
            html,
        },
        // When using the recommended rules (or "html/all" for all rules)
        extends: ["html/recommended"],
        language: "html/html",
        rules: {
            "html/no-duplicate-class": "error",
        }
    }
]);
