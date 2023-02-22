<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { auth } from '$lib/firebase';
	import signedIn from '$lib/stores/signedIn';
	import { signInWithEmailAndPassword } from 'firebase/auth';
	import { onMount } from 'svelte';
	let email = '';
	let password = '';
	onMount(() => {
		if ($signedIn) {
			goto($page.url.searchParams.get('redirect') ?? '/portal/edit/home');
		}
	});
	const loginWithEmail = () => {
		signInWithEmailAndPassword(auth, email, password).then((userCred) => {
			signedIn.set(true);
			goto('/portal/edit/home');
		});
	};
</script>

<form>
	<input type="email" name="email" id="email" bind:value={email} />
	<input type="password" name="password" id="password" bind:value={password} />
	<button type="submit" on:click={loginWithEmail}> Login </button>
</form>
