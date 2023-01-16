import { IndianRestaurant } from './restaurants/indian';
import { ItalianRestaurant } from './restaurants/italian';
import { ModernRestaurant } from './restaurants/modern';

export type Theme = {
	Layout: ConstructorOfATypedSvelteComponent;
	pages: {
		home: ConstructorOfATypedSvelteComponent;
		[id: string]: ConstructorOfATypedSvelteComponent;
	};
};

const themes: { [id: string]: Theme } = {
	ModernRestaurant,
	IndianRestaurant,
	ItalianRestaurant
};

export default themes;
