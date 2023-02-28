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
				lora: ['Lora', 'serif'],
				nunito: ['Nunito Sans', 'sans-serif']
			}
		}
	},
	plugins: []
};
