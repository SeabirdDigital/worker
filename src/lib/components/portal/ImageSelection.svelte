<script lang="ts">
	import { onMount } from 'svelte';

	type Image = { id: string; url: string };
	export let onSelect: ((chosenImage: Image) => void) | undefined = undefined;
	export let onCancel: (() => void) | undefined = undefined;

	let chosenIndex = -1;
	let images: Image[] = [];
	onMount(() => {
		fetch('/portal/api/bucket', {
			method: 'GET'
		}).then((r) => {
			r.json().then((fetchedImages) => {
				console.log(fetchedImages);
				images = fetchedImages;
			});
		});
	});
</script>

<div
	class="z-[999999999999] bg-black/30 fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center"
	on:click={(e) => {
		if (e.target != e.currentTarget || !onCancel) return;
		onCancel();
	}}
	on:keydown={(e) => {
		if (e.target != e.currentTarget || !onCancel) return;
		onCancel();
	}}
>
	<div class="bg-white shadow-lg flex gap-6 max-w-full min-h-[30rem] rounded-lg p-6">
		<div>
			Images
			<div class="grid grid-cols-5 gap-4">
				{#key images.length}
					{#each images as image, i}
						<button on:click={() => (chosenIndex = i)}>
							<div
								class="h-32 w-32 bg-cover bg-center border-4 {i == chosenIndex &&
									'border-sb-highlight'}"
								style="background-image:url({image.url});"
							/>
						</button>
					{/each}
				{/key}
			</div>
		</div>
		{#if chosenIndex > -1}
			<div class="flex flex-col justify-between">
				<div>
					<img
						class="max-w-xs max-h-64 mx-auto"
						src={images[chosenIndex].url}
						alt={images[chosenIndex].id}
					/>
					<a href={images[chosenIndex].url}>{images[chosenIndex].id}</a>
				</div>
				<div class="flex justify-end">
					<button on:click={() => onSelect && onSelect(images[chosenIndex])}>Select</button>
				</div>
			</div>
		{/if}
	</div>
</div>
