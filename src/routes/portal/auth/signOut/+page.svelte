<script lang="ts">
	import { goto } from '$app/navigation';

	const signOut = async () => {
		await fetch(window.location.href, {
			method: 'POST'
		});

		goto('/portal/auth/login?justSignedOut=true');
	};
</script>

<button on:click={signOut}>Sign Out</button>
