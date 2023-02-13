<script>
	import pageId from '$lib/stores/pageId';
	import site from '$lib/stores/site';
	import theme from '$lib/stores/theme';

	const Page = $theme.pages[$pageId];

	const Layout = $theme.Layout;
</script>

<svelte:head>
	<link rel="icon" href={$site.siteData.ico} />

	<title>
		{$site.siteData.siteName}
		{$site.siteData.tagline ? ` | ${$site.siteData.tagline}` : ''}
	</title>
</svelte:head>

<Layout>
	<Page editMode={false} />
</Layout>
