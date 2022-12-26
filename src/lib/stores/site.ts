import { writable } from 'svelte/store';

export type Site = {
	siteData: SiteData;
	pages: {
		[pageId: string]: { [objectId: string]: string };
	};
};

export type SiteData = {
	siteName: string;
	tagline: string;
	hosts: string[];
	theme: string;
};

const site = writable<Site>();

export default site;
