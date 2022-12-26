import { ModernRestaurant } from './restaurants/modern';

export type Theme = {
	Layout: ConstructorOfATypedSvelteComponent;
	pages: {
		home: ConstructorOfATypedSvelteComponent;
		[id: string]: ConstructorOfATypedSvelteComponent;
	};
};

const themes: { [id: string]: Theme } = {
	ModernRestaurant
};

export default themes;
