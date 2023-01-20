<script lang="ts">
	import site from '$lib/stores/site';

	export let type: 'address' | 'phone' | 'email';

	console.log($site.siteData);
</script>

{@html $site.siteData.contact[type]}
