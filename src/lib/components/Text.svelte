<script lang="ts">
	import pageId from '$lib/stores/pageId';
	import site from '$lib/stores/site';
	import theme from '$lib/stores/theme';

	export let id: string;

	let text = $site.pages[$pageId][id] ?? $theme.defaults.pages[$pageId][id];
</script>

<span data-seabird data-seabird-id={id}>
	{@html text}
</span>
