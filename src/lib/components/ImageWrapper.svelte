<script lang="ts">
	import editMode from '$lib/stores/editMode';
	import editImage from '$lib/stores/portal/editImage';
	import site from '$lib/stores/site';

	export let id: string;
</script>

{#if $editMode}
	<div class="relative h-full w-full">
		<div class="imageWrapper">
			<div class="buttons">
				<button class="editButton" on:click={() => editImage.set(id)}>Edit</button>
			</div>
		</div>
		<slot />
	</div>
{:else}
	<slot />
{/if}

<style>
	.imageWrapper {
		position: absolute;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
	}

	.imageWrapper:hover {
		@apply border-4 border-sb-highlight;
	}

	.imageWrapper > .buttons {
		display: none;
	}
	.imageWrapper:hover > .buttons {
		display: block;
		position: absolute;
		bottom: 0;
		right: 0;

		@apply bg-sb-highlight;
	}
</style>
