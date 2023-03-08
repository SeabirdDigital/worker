import type { Site } from '$lib/stores/site';
import type { Defaults, Theme } from '..';

type Review = {
	author: string;
	message: string;
};
const DefaultData = {
	reviews: [
		{
			message:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit libero modi tempore magnam sit perferendis veniam doloremque ea sequi ipsum impedit voluptatibus, inventore repudiandae vero, dicta nam laudantium quae distinctio.',
			author: 'Karl-Olof'
		},
		{
			message:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit libero modi tempore magnam sit perferendis veniam doloremque ea sequi ipsum impedit voluptatibus, inventore repudiandae vero, dicta nam laudantium quae distinctio.',
			author: 'Britt-Marie'
		},
		{
			message:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit libero modi tempore magnam sit perferendis veniam doloremque ea sequi ipsum impedit voluptatibus, inventore repudiandae vero, dicta nam laudantium quae distinctio.',
			author: 'Kärstin'
		}
	] as [Review, Review, Review],
	contact: {
		phone: '123-456 78 90',
		address: 'Kungliga slottet,<br/>107 70 Stockholm',
		email: 'hej@seabird.digital'
	},
	openingHours: [
		{
			weekday: 'Mån-Fre:',
			time: '10-22'
		},
		{
			weekday: 'Lördag:',
			time: '11-20'
		},
		{
			weekday: 'Söndag:',
			time: 'Stängt'
		}
	]
};

const DefaultPages = {
	home: {
		images: {
			hero: 'hero.jpg',
			about: 'about.jpg',
			order: 'order.jpg'
		},

		heroHeading: 'Bara den bästa maten,<br>nära till hands',
		heroText:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit libero modi tempore magnam sit perferendis veniam doloremque ea sequi ipsum impedit voluptatibus, inventore repudiandae vero, dicta nam laudantium quae distinctio.',

		aboutHeading: 'Riktigt god mat',
		aboutText:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit libero modi tempore magnam sit perferendis veniam doloremque ea sequi ipsum impedit voluptatibus, inventore repudiandae vero, dicta nam laudantium quae distinctio.',
		reviewsHeading: 'Recensioner',
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

export type RestaurantSite = Site<
	typeof DefaultPages,
	typeof DefaultGlobalImages,
	typeof DefaultLinks,
	typeof DefaultColors,
	RestaurantData
>;

export type RestaurantTheme = Theme;

export const RestaurantDefaults: Defaults<
	typeof DefaultPages,
	typeof DefaultGlobalImages,
	typeof DefaultLinks,
	typeof DefaultColors,
	typeof DefaultData
> = {
	pages: DefaultPages,
	globalImages: DefaultGlobalImages,
	links: DefaultLinks,
	colors: DefaultColors,
	data: DefaultData
};

export type RestaurantData = typeof DefaultData;
