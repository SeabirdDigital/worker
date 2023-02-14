<script lang="ts">
	import { page } from '$app/stores';
	import { auth } from '$lib/firebase';
	import pageIdStore from '$lib/stores/pageId';
	import signedIn from '$lib/stores/signedIn';
	import site, { type Site } from '$lib/stores/site';
	import theme from '$lib/stores/theme';
	import themes from '$lib/themes';
	import { onAuthStateChanged } from 'firebase/auth';
	import { onMount } from 'svelte';

	export let data;
	const pageId: string = data.pageId;
	const currentSite: Site = data.currentSite;

	site.set(currentSite);
	theme.set(
		themes[
			$page.url.searchParams.get('theme') ??
				import.meta.env.VITE_THEME ??
				currentSite.siteData.theme
		]
	);

	pageIdStore.set(pageId);

	onAuthStateChanged(auth, (user) => {
		signedIn.set(user != null);
	});
</script>

<slot />
