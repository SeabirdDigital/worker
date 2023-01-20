import { writable } from 'svelte/store';

export type Site = {
	siteData: SiteData;
	pages: {
		[pageId: string]: { [objectId: string]: string };
	};
	data: {
		openingHours: {
			weekday: string;
			time: string;
		}[];
		reviews: {
			author: string;
			message: string;
		}[];
	};
};

export type SiteData = {
	siteName: string;
	tagline: string;
	hosts: string[];
	theme: string;
	contact: {
		address: string;
		phone: string;
		email: string;
	};
};

const site = writable<Site>();

export default site;
