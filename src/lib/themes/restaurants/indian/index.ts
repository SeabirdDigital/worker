import type { Site } from '$lib/stores/site';
import type { Theme } from '$lib/themes';
import Layout from './Layout.svelte';
import Home from './pages/home.svelte';

export type IndianSite = Site<
	typeof DefaultIndianPages,
	typeof DefaultIndianGlobalImages,
	typeof DefaultIndianLinks,
	typeof DefaultIndianColors
>;

export const DefaultIndianPages = {
	home: {
		images: {
			hero: 'hero.jpg',
			about: 'about.jpg',
			order: 'order.jpg'
		},

		heroHeading: 'Den bästa<br/>indiska maten',
		heroText:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit libero modi tempore magnam sit perferendis veniam doloremque ea sequi ipsum impedit voluptatibus, inventore repudiandae vero, dicta nam laudantium quae distinctio.',

		aboutHeading: 'Indiskt, från<br/>jord till bord',
		aboutText:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit libero modi tempore magnam sit perferendis veniam doloremque ea sequi ipsum impedit voluptatibus, inventore repudiandae vero, dicta nam laudantium quae distinctio.',
		orderHeading: 'Har du bråttom?',
		orderText: 'Beställ online eller via telefon!'
	}
};

export const DefaultIndianGlobalImages = {
	logo: 'logo.png'
};

export const DefaultIndianLinks = {
	map: 'https://maps.google.com',
	menu: 'https://tabsquare.ai',
	foodora: 'https://foodora.se'
};

export const DefaultIndianColors = {
	primary: '#B30C47',
	dark: '#1E1323'
};

export const IndianRestaurant: Theme = {
	Layout,
	pages: {
		home: Home
	},
	defaults: {
		pages: DefaultIndianPages,
		globalImages: DefaultIndianGlobalImages,
		links: DefaultIndianLinks,
		colors: DefaultIndianColors
	}
};
