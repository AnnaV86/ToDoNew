module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true
	},
	extends: [
		'plugin:react/recommended',
		'standard-with-typescript',
		'plugin:react-hooks/recommended',
		'plugin:import/recommended',
		'prettier',
		'plugin:jest/recommended'
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react', 'jest'],
	rules: {}
};
