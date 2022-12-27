<script>
	import './IndianRestaurant.css';

	import { onMount } from 'svelte';

	onMount(() => {
		// @ts-ignore
		AOS.init();
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Aladin&family=Readex+Pro:wght@400;700&display=swap"
		rel="stylesheet"
	/>
	<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
	<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
</svelte:head>

<slot />
