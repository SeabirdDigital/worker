<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { auth } from '$lib/firebase';
	import { onMount } from 'svelte';

	onMount(() => {
		if (!$page.url.pathname.startsWith('/portal/auth')) {
			if (!auth.currentUser) {
				goto('/portal/auth/login');
			}
		}
	});
</script>

<slot />
