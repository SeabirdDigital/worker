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

<div class="flex">
	<div class="w-[14rem]">
		<div class="flex flex-col fixed w-[14rem] h-screen border-r">
			<div>Logo</div>
			<div class="flex-1 overflow-y-scroll px-2">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit velit fuga eveniet
				voluptatibus maiores corrupti sapiente earum at unde voluptatum amet commodi iure illum
				accusantium molestias distinctio, laborum magnam a? Lorem, ipsum dolor sit amet consectetur
				adipisicing elit. Fugit velit fuga eveniet voluptatibus maiores corrupti sapiente earum at
				unde voluptatum amet commodi iure illum accusantium molestias distinctio, laborum magnam a?
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit velit fuga eveniet
				voluptatibus maiores corrupti sapiente earum at unde voluptatum amet commodi iure illum
				accusantium molestias distinctio, laborum magnam a? Lorem, ipsum dolor sit amet consectetur
				adipisicing elit. Fugit velit fuga eveniet voluptatibus maiores corrupti sapiente earum at
				unde voluptatum amet commodi iure illum accusantium molestias distinctio, laborum magnam a?
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit velit fuga eveniet
				voluptatibus maiores corrupti sapiente earum at unde voluptatum amet commodi iure illum
				accusantium molestias distinctio, laborum magnam a? Lorem, ipsum dolor sit amet consectetur
				adipisicing elit. Fugit velit fuga eveniet voluptatibus maiores corrupti sapiente earum at
				unde voluptatum amet commodi iure illum accusantium molestias distinctio, laborum magnam a?
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit velit fuga eveniet
				voluptatibus maiores corrupti sapiente earum at unde voluptatum amet commodi iure illum
				accusantium molestias distinctio, laborum magnam a? Lorem, ipsum dolor sit amet consectetur
				adipisicing elit. Fugit velit fuga eveniet voluptatibus maiores corrupti sapiente earum at
				unde voluptatum amet commodi iure illum accusantium molestias distinctio, laborum magnam a?
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit velit fuga eveniet
				voluptatibus maiores corrupti sapiente earum at unde voluptatum amet commodi iure illum
				accusantium molestias distinctio, laborum magnam a? Lorem, ipsum dolor sit amet consectetur
				adipisicing elit. Fugit velit fuga eveniet voluptatibus maiores corrupti sapiente earum at
				unde voluptatum amet commodi iure illum accusantium molestias distinctio, laborum magnam a?
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit velit fuga eveniet
				voluptatibus maiores corrupti sapiente earum at unde voluptatum amet commodi iure illum
				accusantium molestias distinctio, laborum magnam a? Lorem, ipsum dolor sit amet consectetur
				adipisicing elit. Fugit velit fuga eveniet voluptatibus maiores corrupti sapiente earum at
				unde voluptatum amet commodi iure illum accusantium molestias distinctio, laborum magnam a?
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit velit fuga eveniet
				voluptatibus maiores corrupti sapiente earum at unde voluptatum amet commodi iure illum
				accusantium molestias distinctio, laborum magnam a? Lorem, ipsum dolor sit amet consectetur
				adipisicing elit. Fugit velit fuga eveniet voluptatibus maiores corrupti sapiente earum at
				unde voluptatum amet commodi iure illum accusantium molestias distinctio, laborum magnam a?
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit velit fuga eveniet
				voluptatibus maiores corrupti sapiente earum at unde voluptatum amet commodi iure illum
				accusantium molestias distinctio, laborum magnam a? Lorem, ipsum dolor sit amet consectetur
				adipisicing elit. Fugit velit fuga eveniet voluptatibus maiores corrupti sapiente earum at
				unde voluptatum amet commodi iure illum accusantium molestias distinctio, laborum magnam a?
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit velit fuga eveniet
				voluptatibus maiores corrupti sapiente earum at unde voluptatum amet commodi iure illum
				accusantium molestias distinctio, laborum magnam a? Lorem, ipsum dolor sit amet consectetur
				adipisicing elit. Fugit velit fuga eveniet voluptatibus maiores corrupti sapiente earum at
				unde voluptatum amet commodi iure illum accusantium molestias distinctio, laborum magnam a?
			</div>
			<div class="w-full flex">
				<button class="flex-1 mx-2 py-4 mb-2 bg-sky-500 rounded-lg">Save</button>
			</div>
		</div>
	</div>

	<div class="flex-1">
		<Layout>
			<Page editMode={true} />
		</Layout>
	</div>
</div>
