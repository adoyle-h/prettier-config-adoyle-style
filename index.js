'use strict';

/**
 * User should set "max_line_length" and "indent_size" in .editorconfig file
 *
 * Prettier options refer to https://prettier.io/docs/en/options.html
 */
module.exports = {
	printWidth: 100,
	semi: true,
	singleQuote: true,
	jsxSingleQuote: true,
	bracketSpacing: false,
	embeddedLanguageFormatting: 'off',
	arrowParens: 'always',
	trailingComma: 'all',
};
