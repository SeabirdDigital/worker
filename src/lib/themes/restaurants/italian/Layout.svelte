<script lang="ts">
	import siteStore from '$lib/stores/site';
	import { ItalianRestaurant } from '.';
	import { RestaurantDefaults, type RestaurantSite } from '..';
	import './ItalianRestaurant.css';

	const site = $siteStore as RestaurantSite;
	let colors = site.data?.colors;
	siteStore.subscribe((newSite) => {
		colors = (newSite as RestaurantSite).data?.colors;
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=Lora:wght@400;600&family=Nunito+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main
	class="font-nunito"
	style="--puffin-primary: {colors?.primary ??
		RestaurantDefaults.colors.primary}; --puffin-dark: {colors?.dark ??
		RestaurantDefaults.colors.dark};"
>
	<slot />
</main>
