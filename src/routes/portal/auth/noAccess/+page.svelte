<script>
	import { goto } from '$app/navigation';
</script>

<div>
	You shall not pass!<br />
	Sign out and login to an account with access or ask an admin to add you to the team.
</div>
<button on:click={() => goto('/portal/auth/signOut')}>Sign Out</button>
