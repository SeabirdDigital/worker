<script lang="ts">
	import '../app.css';

	import site, { type Site } from '$lib/stores/site';
	import themes from '$lib/themes';
	import theme from '$lib/stores/theme';
	import pageId from '$lib/stores/pageId';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	export let data;
	const currentSite: Site = data.currentSite;

	site.set(currentSite);
	theme.set(themes[currentSite.siteData.theme]);

	const pathname = $page.url.pathname;
	pageId.set(pathname == '/' ? 'home' : pathname.substring(1));

	const Layout = $theme.Layout;

	onMount(() => {
		window.addEventListener('message', (e) => {
			if (e.data.cmd == 'editable') {
				const editables = document.querySelectorAll('div');
				editables.forEach((element) => {
					element.contentEditable = 'true';
				});
			}
		});
	});
</script>

<svelte:head>
	<title>
		{$site.siteData.siteName}
		{$site.siteData.tagline ? ` | ${$site.siteData.tagline}` : ''}
	</title>
</svelte:head>

<Layout>
	<slot />
</Layout>
