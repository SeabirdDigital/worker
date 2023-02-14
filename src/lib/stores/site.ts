import { writable } from 'svelte/store';

type PagesDefault = {
	[pageId: string]: {
		images?: {
			[imageId: string]: string;
		};
		[objectId: string]: string | DefaultMap | undefined;
	};
};

type DefaultMap = {
	[id: string]: string;
};

export type FireStoreSite<
	Pages = PagesDefault,
	GlobalImages = DefaultMap,
	Links = DefaultMap,
	Colors = DefaultMap
> = {
	siteData: SiteData;
	pages: Pages;
	data?: {
		images?: GlobalImages;
		contact?: {
			address?: string;
			phone?: string;
			email?: string;
		};
		links?: Links;
		colors?: Colors;
		openingHours?: {
			weekday: string;
			time: string;
		}[];
		reviews?: {
			author: string;
			message: string;
		}[];
	};
};

export type Site<
	Pages = PagesDefault,
	GlobalImages = DefaultMap,
	Links = DefaultMap,
	Colors = DefaultMap
> = FireStoreSite<
	Pages,
	GlobalImages,
	Links,
	Colors
> & { id: string }

export type SiteData = {
	siteName: string;
	tagline: string;
	hosts: string[];
	theme: string;
	ico: string;
};

const site = writable<Site>();

export default site;
