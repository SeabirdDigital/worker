import type { Site } from '$lib/stores/site';
import type { Theme } from '$lib/themes';
import Layout from './Layout.svelte';
import Home from './pages/home.svelte';

export type KingSite = Site<
	typeof DefaultPages,
	typeof DefaultGlobalImages,
	typeof DefaultLinks,
	typeof DefaultColors
>;

const DefaultPages = {
	home: {
		images: {
			hero: 'hero.jpg',
			about: 'about.jpg',
			order: 'order.jpg'
		},

		heroText:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit libero modi tempore magnam sit perferendis veniam doloremque ea sequi ipsum impedit voluptatibus, inventore repudiandae vero, dicta nam laudantium quae distinctio.',

		aboutHeading: 'Kunglig kebab',
		aboutText:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit libero modi tempore magnam sit perferendis veniam doloremque ea sequi ipsum impedit voluptatibus, inventore repudiandae vero, dicta nam laudantium quae distinctio.',
		orderHeading: 'Har du bråttom?',
		orderText: 'Beställ online eller via telefon!'
	}
};

const DefaultGlobalImages = {
	logo: 'logo.png'
};

const DefaultLinks = {
	map: 'https://maps.google.com',
	menu: 'https://tabsquare.ai',
	foodora: 'https://foodora.se'
};

const DefaultColors = {
	primary: '#f05b32',
	dark: '#1E1323'
};

export const KingRestaurant: Theme<
	typeof DefaultPages,
	typeof DefaultGlobalImages,
	typeof DefaultLinks,
	typeof DefaultColors
> = {
	Layout,
	pages: {
		home: Home
	},
	defaults: {
		pages: DefaultPages,
		globalImages: DefaultGlobalImages,
		links: DefaultLinks,
		colors: DefaultColors
	}
};
