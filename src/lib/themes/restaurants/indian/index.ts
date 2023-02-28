import type { RestaurantTheme } from '..';
import Layout from './Layout.svelte';
import Home from './pages/home.svelte';

export const IndianRestaurant: RestaurantTheme = {
	Layout,
	pages: {
		home: Home
	}
};
