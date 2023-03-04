<script lang="ts">
	import editMode from '$lib/stores/editMode';
	import pageId from '$lib/stores/pageId';
	import site, { type PagesDefault } from '$lib/stores/site';
	import { RestaurantDefaults } from '$lib/themes/restaurants';

	export let id: string;

	const restaurantDefault = (RestaurantDefaults.pages as PagesDefault)[$pageId][id];

	let text =
		$site.pages[$pageId][id] ??
		($site.siteData.theme.endsWith('Restaurant') ? restaurantDefault : '');
</script>

<span class="block" data-puffins-editable={id} contenteditable={$editMode}>
	{@html text}
</span>
