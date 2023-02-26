<script>
	import site from '$lib/stores/site';
	import theme from '$lib/stores/theme';

	const Home = $theme.pages.home;

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
	<Home editMode={false} />
</Layout>
