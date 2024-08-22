import globals from "globals";
import pluginJs from "@eslint/js";
import jestPlugin from "eslint-plugin-jest";

export default [
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	pluginJs.configs.recommended,
	{
		files: ["**/*.test.js", "**/*.spec.js"],
		plugins: {
			jest: jestPlugin,
		},
		languageOptions: {
			globals: {
				...globals.jest,
			},
		},
		rules: {
			...jestPlugin.configs.recommended.rules,
		},
	},
];
