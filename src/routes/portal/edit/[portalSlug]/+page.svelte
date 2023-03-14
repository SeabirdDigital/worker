<script lang="ts">
	import { page } from '$app/stores';
	import { auth, database } from '$lib/firebase';
	import editMode from '$lib/stores/editMode';
	import pageId from '$lib/stores/pageId';
	import site, { type Site } from '$lib/stores/site';
	import theme from '$lib/stores/theme';
	import { json } from '@sveltejs/kit';
	import { doc, getDoc, updateDoc } from 'firebase/firestore';

	editMode.set(true);

	const onSave = async () => {
		const editables = document.querySelectorAll<HTMLElement>('[data-puffins-editable]');
		let newData: { [key: string]: string } = {};
		editables.forEach((e) => {
			newData[e.dataset.puffinsEditable!] = e.innerHTML;
		});
		const newSite: Site | undefined = (
			await getDoc(doc(database, 'sites', $site.id))
		).data() as Site;
		newSite.pages[$pageId] = {
			...newSite.pages[$page.params.slug],
			...newData,
			images: newSite.pages[$pageId].images
		};
		await updateDoc(doc(database, 'sites', $site.id), newSite);
	};

	const Page = $theme.pages[$pageId];
	const Layout = $theme.Layout;

	let sidebarWrapper: HTMLDivElement;
</script>

<svelte:head>
	<link rel="icon" href={$site.siteData.ico} />

	<title>
		{$site.siteData.siteName}
		{$site.siteData.tagline ? ` | ${$site.siteData.tagline}` : ''}
	</title>
</svelte:head>

<div class="flex">
	<div class="w-[14rem] relative resize-x" bind:this={sidebarWrapper}>
		<div class="flex flex-col w-[inherit] fixed h-[inherit] bottom-0 top-12 border-r">
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
				<button on:click={onSave} class="flex-1 mx-2 py-4 mb-2 bg-sky-500 rounded-lg">Save</button>
			</div>
		</div>
	</div>

	<div class="flex-1">
		<Layout>
			<Page />
		</Layout>
	</div>
</div>
