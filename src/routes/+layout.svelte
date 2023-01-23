<script lang="ts">
	import { page } from '$app/stores';
	import pageId from '$lib/stores/pageId';
	import site, { type Site } from '$lib/stores/site';
	import theme from '$lib/stores/theme';
	import themes from '$lib/themes';
	import { onMount } from 'svelte';

	export let data;
	const currentSite: Site = data.currentSite;

	site.set(currentSite);
	theme.set(themes[import.meta.env.VITE_THEME ?? currentSite.siteData.theme]);

	const pathname = $page.url.pathname;
	pageId.set(pathname == '/' ? 'home' : pathname.substring(1));

	const Layout = $theme.Layout;

	onMount(() => {
		window.addEventListener('message', (e) => {
			if (e.data == 'editable') {
				console.log('Is now editable');
				const editables = document.querySelectorAll('div');
				editables.forEach((element) => {
					element.contentEditable = 'true';
				});
			}
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={$site.siteData.ico} />

	<title>
		{$site.siteData.siteName}
		{$site.siteData.tagline ? ` | ${$site.siteData.tagline}` : ''}
	</title>
</svelte:head>

<Layout>
	<slot />
</Layout>
