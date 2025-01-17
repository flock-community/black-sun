import globals from "globals";
import js from "@eslint/js";

/** @type {import('eslint').Linter.Config} */
export default {
	...js.configs.recommended,
	languageOptions: {
		globals: { ...globals.node, ...globals.mocha },
	},
	rules: {
		"no-unused-vars": [
			"error",
			{
				varsIgnorePattern: "^_",
				argsIgnorePattern: "^_",
			},
		],
	},
};
