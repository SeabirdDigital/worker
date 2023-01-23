import type { Theme } from '$lib/themes';
import Layout from './Layout.svelte';
import Home from './pages/home.svelte';

export const JapaneseRestaurant: Theme = {
	Layout,
	pages: {
		home: Home
	}
};
