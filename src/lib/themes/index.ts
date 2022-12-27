import { ModernRestaurant } from './restaurants/modern';
import { IndianRestaurant } from './restaurants/indian';

export type Theme = {
	Layout: ConstructorOfATypedSvelteComponent;
	pages: {
		home: ConstructorOfATypedSvelteComponent;
		[id: string]: ConstructorOfATypedSvelteComponent;
	};
};

const themes: { [id: string]: Theme } = {
	ModernRestaurant,
	IndianRestaurant
};

export default themes;
