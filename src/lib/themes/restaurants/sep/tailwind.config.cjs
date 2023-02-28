/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'puffin-primary': 'var(--puffin-primary)',
				'puffin-dark': 'var(--puffin-dark)'
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
