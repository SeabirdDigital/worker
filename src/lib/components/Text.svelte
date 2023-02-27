<script lang="ts">
	import editMode from '$lib/stores/editMode';
	import pageId from '$lib/stores/pageId';
	import site from '$lib/stores/site';
	import theme from '$lib/stores/theme';

	export let id: string;

	let text = $site.pages[$pageId][id] ?? $theme.defaults.pages[$pageId][id];
</script>

<span class="block" data-puffins-editable={id} contenteditable={$editMode}>
	{@html text}
</span>
