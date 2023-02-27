<script>
	import pageId from '$lib/stores/pageId';
	import site from '$lib/stores/site';
	import theme from '$lib/stores/theme';

	const Page = $theme.pages[$pageId];

	const Layout = $theme.Layout;

	let pageName = $pageId;
	pageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
	pageName = pageName.replace(/([a-z])([A-Z])/g, '$1 $2');
</script>

<svelte:head>
	<link rel="icon" href={$site.siteData.ico} />

	<title>
		{$site.siteData.tagline ? `${pageName} | ` : ''}
		{$site.siteData.siteName}
	</title>
</svelte:head>

<Layout>
	<Page />
</Layout>
