<script lang="ts">
	import './IndianRestaurant.css';

	import siteStore from '$lib/stores/site';
	import theme from '$lib/stores/theme';
	import { onMount } from 'svelte';
	import { IndianRestaurant, type IndianSite } from '.';

	onMount(() => {
		// @ts-ignore
		AOS.init();
	});

	const site = $siteStore as IndianSite;
	const colors = site.data?.colors;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Readex+Pro:wght@400;700&display=swap"
		rel="stylesheet"
	/>

	<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
	<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
</svelte:head>

<div
	class="font-text relative"
	style="--rh-primary: {colors?.primary ??
		IndianRestaurant.defaults.colors.primary}; --rh-dark: {colors?.dark ??
		IndianRestaurant.defaults.colors.dark};"
>
	<slot />
</div>
