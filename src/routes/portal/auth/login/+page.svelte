<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { auth } from '$lib/firebase';
	import { inMemoryPersistence, setPersistence, signInWithEmailAndPassword } from 'firebase/auth';
	import { onMount } from 'svelte';
	let email = '';
	let password = '';
	// onMount(() => {
	// 	if (auth.currentUser) {
	// 		window.location.assign($page.url.searchParams.get('redirect') ?? '/portal/edit/home');
	// 	}
	// });

	const loginWithEmail = async () => {
		await setPersistence(auth, inMemoryPersistence);
		signInWithEmailAndPassword(auth, email, password)
			.then((userCred) => {
				return userCred.user.getIdToken().then((idToken) => {
					console.log(idToken);
					return fetch('/portal/auth/session', {
						method: 'POST',
						body: JSON.stringify({
							idToken
						})
					});
				});
			})
			.then(() => {
				return auth.signOut();
			})
			.then(() => {
				window.location.assign('/portal/edit/home');
			});
	};
</script>

<form>
	<input type="email" name="email" id="email" bind:value={email} />
	<input type="password" name="password" id="password" bind:value={password} />
	<button type="submit" on:click={loginWithEmail}> Login </button>
</form>
