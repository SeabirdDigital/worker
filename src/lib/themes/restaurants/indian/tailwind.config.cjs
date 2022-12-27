/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'rh-red': '#B30C47',
				'rh-dark': '#1E1323'
			},
			container: {
				center: true,
				padding: '2rem'
			},
			fontFamily: {
				aladin: ['Aladin', 'cursive'],
				readex: ['Readex Pro', 'sans-serif']
			},
			boxShadow: {
				hard: '4px 4px 0px black'
			}
		}
	},
	plugins: []
};
