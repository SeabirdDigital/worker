<script lang="ts">
	import { page } from '$app/stores';
	import ImageSelection from '$lib/components/portal/ImageSelection.svelte';
	import { auth, database } from '$lib/firebase';
	import editMode from '$lib/stores/editMode';
	import pageId from '$lib/stores/pageId';
	import editImage from '$lib/stores/portal/editImage';
	import notifications, { addNotification } from '$lib/stores/portal/notifications';
	import siteStore, { type Site } from '$lib/stores/site';
	import theme from '$lib/stores/theme';
	import { doc, getDoc, updateDoc } from 'firebase/firestore';
	import { onMount } from 'svelte';

	let site: Site = $siteStore;
	siteStore.subscribe((s) => (site = s));

	editMode.set(true);

	let newSite: Site | undefined = undefined;
	onMount(async () => {
		newSite = (await getDoc(doc(database, 'sites', site.id))).data() as Site;
	});

	const onSave = async () => {
		const editables = document.querySelectorAll<HTMLElement>('[data-puffins-editable]');

		let newData: { [key: string]: string } = {};
		editables.forEach((e) => {
			newData[e.dataset.puffinsEditable!] = e.innerHTML;
		});

		if (!newSite) return;

		newSite.pages[$pageId] = {
			...newSite.pages[$pageId],
			...newData,
			images: newSite.pages[$pageId].images
		};
		newSite.data = {
			...newSite.data,
			colors: site.data?.colors
		};
		newSite.siteData = { ...site.siteData, ico: newFavicon ?? newSite.siteData.ico };

		await fetch('/portal/edit', {
			method: 'POST',
			body: JSON.stringify({
				id: site.id,
				site: newSite
			})
		});

		addNotification({
			type: 'success',
			message: 'Saved successfully'
		});
	};

	const Page = $theme.pages[$pageId];
	const Layout = $theme.Layout;

	let sidebarWrapper: HTMLDivElement;

	let sidebarPage: string = 'home';

	let colors: { key: string; value: string }[] = [];
	for (const key in site.data?.colors) {
		if (Object.prototype.hasOwnProperty.call(site.data?.colors, key)) {
			const value = site.data?.colors[key];

			if (value) colors.push({ key, value });
		}
	}

	let faviconSelect = false;
	let newFavicon: string | undefined = undefined;
</script>

<svelte:head>
	<link rel="icon" href={site.siteData.ico} />

	<title>
		{site.siteData.siteName}
		{site.siteData.tagline ? ` | ${site.siteData.tagline}` : ''}
	</title>
</svelte:head>

{#if faviconSelect}
	<ImageSelection
		onSelect={(i) => {
			newFavicon = i.id;
			faviconSelect = false;
		}}
		onCancel={() => (faviconSelect = false)}
	/>
{/if}
{#if $editImage != undefined}
	<ImageSelection
		onSelect={(i) => {
			console.log('Hi');
			if (newSite)
				newSite.pages[$pageId].images = $editImage
					? {
							...newSite.pages[$pageId].images,
							[$editImage]: i.id
					  }
					: newSite.pages[$pageId].images;

			siteStore.set({
				...site,
				pages: {
					...site.pages,
					[$pageId]: {
						...site.pages[$pageId],
						images: $editImage
							? {
									...site.pages[$pageId].images,
									[$editImage]: i.url
							  }
							: site.pages[$pageId].images
					}
				}
			});

			console.log($editImage);
			console.log(site.pages[$pageId].images?.[$editImage ?? ''] ?? 'huh');
			editImage.set(undefined);
		}}
		onCancel={() => editImage.set(undefined)}
	/>
{/if}

<div class="z-[9999999999999999] fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col gap-4">
	{#each $notifications as notification}
		<div class="notification {notification.type}">
			{notification.message}

			{#if notification.secondaryButton}
				<button on:click={notification.secondaryButton.onClick}>
					{notification.secondaryButton.label}
				</button>
			{/if}
			{#if notification.primaryButton}
				<button on:click={notification.primaryButton.onClick}>
					{notification.primaryButton.label}
				</button>
			{/if}
		</div>
	{/each}
</div>

<div class="flex">
	<div class="w-[16rem] relative resize-x" bind:this={sidebarWrapper}>
		<div class="flex flex-col w-[inherit] fixed h-[inherit] bottom-0 top-12 border-r">
			<div id="sidebar" class="flex-1 overflow-y-scroll overflow-x-hidden px-4">
				{#if sidebarPage == 'home'}
					<div id="sidebarHome">
						<button on:click={() => (sidebarPage = 'general')}>General</button>
					</div>
				{/if}
				{#if sidebarPage == 'general'}
					<div id="sidebarHome">
						<button on:click={() => (sidebarPage = 'home')}>{'<'} Back</button>
						<div>
							General
							<div class="flex flex-col">
								<label for="siteName">Site Name</label>
								<input
									type="text"
									name="siteName"
									value={site.siteData.siteName}
									on:change={(e) => {
										siteStore.set({
											...site,
											siteData: {
												...site.siteData,
												siteName: e.currentTarget.value
											}
										});
									}}
									id="siteName"
								/>
								<label for="tagline">Tagline</label>
								<input
									type="text"
									name="tagline"
									value={site.siteData.tagline}
									on:change={(e) => {
										siteStore.set({
											...site,
											siteData: {
												...site.siteData,
												tagline: e.currentTarget.value
											}
										});
									}}
									id="tagline"
								/>
								<label for="favicon">Favicon</label>
								<button on:click={() => (faviconSelect = true)}>Choose</button>
							</div>
						</div>
						<div>
							Colors
							<div class="flex flex-col">
								{#each colors as color}
									<label for={color.key}>{color.key}</label>
									<input
										type="color"
										name={color.key}
										value={site.data?.colors?.[color.key]}
										on:change={(e) => {
											siteStore.set({
												...site,
												data: {
													...site.data,
													colors: {
														...site.data?.colors,
														[color.key]: e.currentTarget.value
													}
												}
											});
											console.log('hi');
										}}
										id={color.key}
									/>
								{/each}
							</div>
						</div>
					</div>
				{/if}
			</div>
			<div class="w-full flex">
				<button
					on:click={onSave}
					class="flex-1 mx-2 py-4 mb-2 bg-sb-highlight text-white rounded-lg">Save</button
				>
			</div>
		</div>
	</div>

	<div class="flex-1">
		<Layout>
			{#key site}
				<Page />
			{/key}
		</Layout>
	</div>
</div>

<style>
	.notification {
		padding: 1rem 1.5rem;
		border-radius: 0.5rem;
		border: 1px solid;
	}
	.notification.success {
		@apply bg-green-200 border-green-400;
	}
	.notification.info {
		@apply bg-gray-200 border-gray-400;
	}
	.notification.warning {
		@apply bg-yellow-200 border-yellow-400;
	}
	.notification.error {
		@apply bg-red-200 border-red-400;
	}

	#sidebarHome > * {
		width: 100%;
		padding: 1rem 0.75rem;
	}
	#sidebarHome > * + * {
		border-top: 1px solid;
	}
	#sidebarHome button {
		display: block;
		text-align: left;
	}
</style>
