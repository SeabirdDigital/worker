<script lang="ts">
	import pageId from '$lib/stores/pageId';
	import site from '$lib/stores/site';

	export let editMode = false;

	export let id: string | string[];

	if (typeof id == 'string') id = id.split('.');

	let text = $site.pages[$pageId][id[0]];
	for (let i = 0; i < id.length; i++) {
		if (typeof text != 'object') break;

		text = text[id[i]];
	}
</script>

<span class="block" data-seabird-id={id} contenteditable={editMode}>
	{@html text}
</span>
