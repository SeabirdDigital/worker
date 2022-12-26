<script lang="ts">
	import pageId from '$lib/stores/pageId';

	import site from '$lib/stores/site';

	export let id: string;
</script>

<span data-seabird data-seabird-id={id}>
	{@html $site.pages[$pageId][id]}
</span>
