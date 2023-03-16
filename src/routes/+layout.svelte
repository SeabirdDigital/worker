<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { auth } from '$lib/firebase';
	import pageIdStore from '$lib/stores/pageId';
	import site, { type Site } from '$lib/stores/site';
	import theme from '$lib/stores/theme';
	import themes from '$lib/themes';
	import { error } from '@sveltejs/kit';
	import { onAuthStateChanged } from 'firebase/auth';
	import { onMount } from 'svelte';
	import '../app.css';

	export let data;
	const pageId: string = data.pageId ?? '';
	const currentSite: Site | undefined = data.currentSite;
	if (!currentSite) throw error(404, 'Site not found');

	site.set(currentSite);
	theme.set(
		themes[
			$page.url.searchParams.get('theme') ??
				import.meta.env.VITE_THEME ??
				currentSite.siteData.theme
		]
	);

	pageIdStore.set(pageId);
</script>

{#if data.isAdmin}
	<div class="flex flex-col">
		<div
			class="z-[9999999999999999] h-12 w-full fixed bg-sb-blue text-white flex items-center justify-between px-6"
		>
			<div class="flex gap-4">
				<div>Puffins</div>
				{#if !$page.url.pathname.startsWith('/portal')}
					<button
						on:click={() =>
							goto('/portal/edit' + ($page.url.pathname == '/' ? '/home' : $page.url.pathname))}
						>Edit</button
					>
				{/if}
			</div>
			<div class="flex gap-4">
				{#if $page.url.pathname.startsWith('/portal/edit/')}
					<button on:click={() => goto('/' + (pageId == 'home' ? '' : pageId))}>Back to site</button
					>
				{/if}
			</div>
		</div>
		<div class="flex-1 relative mt-12">
			<slot />
		</div>
	</div>
{:else}
	<slot />
{/if}
