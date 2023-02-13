import { IndianRestaurant } from './restaurants/indian';
import { ItalianRestaurant } from './restaurants/italian';
import { JapaneseRestaurant } from './restaurants/japanese';

export type Page = new (args: {
	target: Element | ShadowRoot,
	props?: {
		editMode: boolean
	}
}) => ATypedSvelteComponent

export type Theme = {
	Layout: ConstructorOfATypedSvelteComponent;
	pages: {
		home: Page;
		[id: string]: Page;
	};
};

const themes: { [id: string]: Theme } = {
	IndianRestaurant,
	ItalianRestaurant,
	JapaneseRestaurant
};

export default themes;
