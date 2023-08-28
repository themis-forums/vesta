module.exports = {
	content: [
		"./src/**/*.purs"
	],
	darkMode: 'media',
	theme: {
		extend: {
		}
	},
	variants: {},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
	]
}
