<script lang="ts">
	import site, { type Site } from '$lib/stores/site';
	import themes from '$lib/themes';
	import theme from '$lib/stores/theme';
	import pageId from '$lib/stores/pageId';
	import { page } from '$app/stores';

	export let data;
	const currentSite: Site = data.currentSite;

	site.set(currentSite);
	theme.set(themes[currentSite.siteData.theme]);

	const pathname = $page.url.pathname;
	pageId.set(pathname == '/' ? 'home' : pathname.substring(1));

	const Layout = $theme.Layout;
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
