/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'sb-blue': '#3A405A',
				'sb-light': '#F9EFE1',
				'sb-highlight': '#99B2DD'
			}
		}
	},
	plugins: []
};
