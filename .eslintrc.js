module.exports = {
	extends: ["airbnb", "plugin:react/recommended"],
	rules: {
		quotes: "off",
		indent: "off",
		"no-underscore-dangle": "off",
		"arrow-parens": "off",
		"implicit-arrow-linebreak": "off",
		"operator-linebreak": "off",
		"object-curly-newline": "off",
		"function-paren-newline": "off",
		"no-confusing-arrow": "off",
		"no-continue": "off",
		"no-plusplus": "off",
		"no-tabs": "off",
		"no-mixed-spaces-and-tabs": "off",
		"linebreak-style": "off",
		// These linter rules break with Svelte linting for some reason. Disabling for now.
		"import/no-unresolved": "off",
		"import/no-named-as-default": "off",
		"import/no-named-as-default-member": "off",
		"import/named": "off",
	},
	env: {
		es6: true,
		browser: true,
		jest: true,
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
	},
	overrides: [
		{
			files: ["example/**/*"],
		},
		{
			files: ["**/*.svelte"],
			extends: ["plugin:svelte/recommended"],
			parser: "svelte-eslint-parser",
			rules: {
				"import/first": "off",
				"import/no-duplicates": "off",
				"import/no-mutable-exports": "off",
				"import/extensions": "off",
				"import/no-unresolved": "off",
				"import/prefer-default-export": "off",
				"no-multiple-empty-lines": "off",
				"no-undef": "off",
				"no-shadow": "off",
				"prefer-const": "off",
				"import/no-extraneous-dependencies": "off",
			},
		},
		{
			files: ["cypress/**/*"],
			plugins: ["cypress"],
			extends: ["plugin:cypress/recommended"],
			env: {
				"cypress/globals": true,
			},
			rules: {
				"spaced-comment": "off",
				"import/no-extraneous-dependencies": "off",
			},
		},
		{
			files: ["**/*.ts"],
			plugins: ["@typescript-eslint/eslint-plugin"],
			extends: ["plugin:@typescript-eslint/recommended"],
			parser: "@typescript-eslint/parser",
			rules: {
				"import/extensions": "off",
				"import/no-unresolved": "off",
				"@typescript-eslint/indent": "off",
				"@typescript-eslint/explicit-function-return-type": "off",
				"@typescript-eslint/explicit-member-accessibility": "off",
			},
		},
	],
	settings: {
		react: {
			version: "16.13",
		},
	},
};
