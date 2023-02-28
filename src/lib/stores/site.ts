import { writable } from 'svelte/store';

export type PagesDefault = {
	[pageId: string]: {
		images?: {
			[imageId: string]: string;
		};
		[objectId: string]: string | DefaultMap | undefined;
	};
};

export type DefaultMap = {
	[id: string]: string;
};

export type Site<
	Pages = PagesDefault,
	GlobalImages = DefaultMap,
	Links = DefaultMap,
	Colors = DefaultMap,
	Data = unknown
> = {
	id: string;
	siteData: SiteData;
	pages: Pages;
	data?: {
		images?: GlobalImages;
		links?: Links;
		colors?: Colors;
	} & Data;
};

export type SiteData = {
	siteName: string;
	tagline: string;
	hosts: string[];
	theme: string;
	ico: string;
	users: {
		[uuid: string]: number;
	};
};

const site = writable<Site>();

export default site;
