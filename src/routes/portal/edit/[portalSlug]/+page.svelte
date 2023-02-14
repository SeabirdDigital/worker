<script lang="ts">
	import { page } from '$app/stores';
	import firebase, { database } from '$lib/firebase';
	import pageId from '$lib/stores/pageId';
	import site, { type FireStoreSite } from '$lib/stores/site';
	import theme from '$lib/stores/theme';
	import firestore, { doc, getDoc, updateDoc } from 'firebase/firestore';

	const Page = $theme.pages[$pageId];

	const Layout = $theme.Layout;

	const onSave = async () => {
		const editables = document.querySelectorAll<HTMLElement>('[data-puffins-editable]');

		let newData: { [key: string]: string } = {};
		editables.forEach((e) => {
			newData[e.dataset.puffinsEditable!] = e.innerHTML;
		});

		const newSite: FireStoreSite | undefined = (
			await getDoc(doc(database, 'sites', $site.id))
		).data() as FireStoreSite;
		newSite.pages[$pageId] = {
			...newSite.pages[$page.params.slug],
			...newData,
			images: newSite.pages[$pageId].images
		};

		await updateDoc(doc(database, 'sites', $site.id), newSite);
	};
</script>

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
				<button on:click={onSave} class="flex-1 mx-2 py-4 mb-2 bg-sky-500 rounded-lg">
					Save
				</button>
			</div>
		</div>
	</div>

	<div class="flex-1">
		<Layout>
			<Page editMode={true} />
		</Layout>
	</div>
</div>
