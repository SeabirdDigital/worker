/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'kr-primary': 'var(--kr-primary)',
				'kr-secondary': 'var(--kr-secondary)',
				'kr-dark': 'var(--kr-dark)'
			},
			container: {
				center: true,
				padding: '2rem'
			},
			fontFamily: {
				heading: "'Readex Pro', sans-serif",
				text: "'Inter', sans-serif"
			},
			boxShadow: {
				hard: '4px 4px 0px black'
			}
		}
	},
	plugins: []
};
