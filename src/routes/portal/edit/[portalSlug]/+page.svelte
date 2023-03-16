<script lang="ts">
	import { page } from '$app/stores';
	import { auth, database } from '$lib/firebase';
	import editMode from '$lib/stores/editMode';
	import notifications from '$lib/stores/notifications';
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
		newSite.data = {
			...newSite.data,
			colors: $site.data?.colors
		};

		await fetch('/portal/edit', {
			method: 'POST',
			body: JSON.stringify({
				id: $site.id,
				site: newSite
			})
		});

		notifications.set([
			...$notifications,
			{
				type: 'success',
				message: 'Saved successfully',
				primaryButton: { label: 'Nice', onClick: () => alert('hi') },
				secondaryButton: { label: 'heheh', onClick: () => alert('yo') }
			}
		]);
	};

	const Page = $theme.pages[$pageId];
	const Layout = $theme.Layout;

	let sidebarWrapper: HTMLDivElement;

	let sidebarPage: 'home' | 'general' | 'contact' | 'buttons' = 'home';

	let colors: { key: string; value: string }[] = [];
	for (const key in $site.data?.colors) {
		if (Object.prototype.hasOwnProperty.call($site.data?.colors, key)) {
			const value = $site.data?.colors[key];

			if (value) colors.push({ key, value });
		}
	}
</script>

<svelte:head>
	<link rel="icon" href={$site.siteData.ico} />

	<title>
		{$site.siteData.siteName}
		{$site.siteData.tagline ? ` | ${$site.siteData.tagline}` : ''}
	</title>
</svelte:head>

<div class="z-[9999999999999999] fixed bottom-8 left-1/2 -translate-x-1/2">
	{#each $notifications as notification}
		<div class="notification {notification.type}">
			{notification.message}

			{#if notification.secondaryButton}
				<button on:click={notification.secondaryButton.onClick}
					>{notification.secondaryButton.label}</button
				>
			{/if}
			{#if notification.primaryButton}
				<button on:click={notification.primaryButton.onClick}
					>{notification.primaryButton.label}</button
				>
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
						<button on:click={() => (sidebarPage = 'contact')}>Contact Details</button>
						<button on:click={() => (sidebarPage = 'buttons')}>Buttons</button>
					</div>
				{/if}
				{#if sidebarPage == 'general'}
					<div id="sidebarHome">
						<button on:click={() => (sidebarPage = 'home')}>{'<'} Back</button>
						<div>
							Colors
							<div>
								{#each colors as color}
									<label for={color.key}>{color.key}</label>
									<input
										type="color"
										name={color.key}
										value={$site.data?.colors?.[color.key]}
										on:change={(e) => {
											site.set({
												...$site,
												data: {
													...$site.data,
													colors: {
														...$site.data?.colors,
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
				{#if sidebarPage == 'contact'}
					<div id="sidebarHome">
						<button on:click={() => (sidebarPage = 'home')}>{'<'} Back</button>
					</div>
				{/if}
				{#if sidebarPage == 'buttons'}
					<div id="sidebarHome">
						<button on:click={() => (sidebarPage = 'home')}>{'<'} Back</button>
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
			<Page />
		</Layout>
	</div>
</div>

<style>
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
