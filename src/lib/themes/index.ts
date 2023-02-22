import type { DefaultMap, PagesDefault } from '$lib/stores/site';
import { IndianRestaurant } from './restaurants/indian';
import { ItalianRestaurant } from './restaurants/italian';
import { JapaneseRestaurant } from './restaurants/japanese';

export type Theme<
	Pages = PagesDefault,
	GlobalImages = DefaultMap,
	Links = DefaultMap,
	Colors = DefaultMap
> = {
	Layout: ConstructorOfATypedSvelteComponent;
	pages: {
		home: ConstructorOfATypedSvelteComponent;
		[id: string]: ConstructorOfATypedSvelteComponent;
	};
	defaults: {
		pages: Pages;
		globalImages: GlobalImages;
		links: Links;
		colors: Colors;
	};
};

const themes: { [id: string]: Theme } = {
	IndianRestaurant,
	ItalianRestaurant,
	JapaneseRestaurant
};

export default themes;
