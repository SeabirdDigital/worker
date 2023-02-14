<script lang="ts">
	import { page } from '$app/stores';
	import pageIdStore from '$lib/stores/pageId';
	import site, { type Site } from '$lib/stores/site';
	import theme from '$lib/stores/theme';
	import themes from '$lib/themes';
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

	const Layout = $theme.Layout;
</script>

<slot />
