import { RestaurantDefaults, type RestaurantTheme } from '..';
import Layout from './Layout.svelte';
import Home from './pages/home.svelte';

export const ItalianRestaurant: RestaurantTheme = {
	Layout,
	pages: {
		home: Home
	},
	defaults: RestaurantDefaults
};
