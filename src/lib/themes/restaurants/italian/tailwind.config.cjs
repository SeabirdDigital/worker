/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
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
