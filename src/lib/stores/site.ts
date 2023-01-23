import { writable } from 'svelte/store';

export type Site = {
	id: string;
	siteData: SiteData;
	pages: {
		[pageId: string]: {
			images?: {
				[imageId: string]: string;
			};
			[objectId: string]:
				| string
				| {
						[imageId: string]: string;
				  }
				| undefined;
		};
	};
	data?: {
		images?: {
			[imageId: string]: string;
		};
		contact?: {
			address?: string;
			phone?: string;
			email?: string;
		};
		links?: {
			[key: string]: string;
		};
		colors?: {
			[key: string]: string;
		};
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

export type SiteData = {
	siteName: string;
	tagline: string;
	hosts: string[];
	theme: string;
	ico: string;
};

const site = writable<Site>();

export default site;
