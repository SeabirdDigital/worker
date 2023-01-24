import { IndianRestaurant } from './restaurants/indian';
import { ItalianRestaurant } from './restaurants/italian';
import { JapaneseRestaurant } from './restaurants/japanese';

export type Theme = {
	Layout: ConstructorOfATypedSvelteComponent;
	pages: {
		home: ConstructorOfATypedSvelteComponent;
		[id: string]: ConstructorOfATypedSvelteComponent;
	};
};

const themes: { [id: string]: Theme } = {
	IndianRestaurant,
	ItalianRestaurant,
	JapaneseRestaurant
};

export default themes;
