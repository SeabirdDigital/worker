import type { DefaultMap, PagesDefault } from '$lib/stores/site';
import { IndianRestaurant } from './restaurants/indian';
import { ItalianRestaurant } from './restaurants/italian';
import { JapaneseRestaurant } from './restaurants/japanese';
import { KingRestaurant } from './restaurants/king';
import { SepRestaurant } from './restaurants/sep';

export type Theme = {
	Layout: ConstructorOfATypedSvelteComponent;
	pages: {
		home: ConstructorOfATypedSvelteComponent;
		[id: string]: ConstructorOfATypedSvelteComponent;
	};
};

export type Defaults<
	Pages = PagesDefault,
	GlobalImages = DefaultMap,
	Links = DefaultMap,
	Colors = DefaultMap,
	Data = unknown
> = {
	pages: Pages;
	globalImages: GlobalImages;
	links: Links;
	colors: Colors;
	data: Data;
};

const themes: { [id: string]: Theme } = {
	IndianRestaurant,
	ItalianRestaurant,
	JapaneseRestaurant,
	SepRestaurant,
	KingRestaurant
};

export default themes;
