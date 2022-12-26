<script lang="ts">
	import type { Menu } from '../data/menu';

	export let menu: Menu;
</script>

<div class="px-4">
	{#each menu as category, i}
		<div class="flex flex-col gap-4 my-12">
			<h3 class="font-lora text-4xl font-semibold ">
				{category.name}
			</h3>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
				{#each category.dishes as dish}
					<div class="">
						<div class="flex justify-between items-end w-full">
							<h4 class="font-lora text-2xl font-semibold text-si-brown flex-shrink-0">
								{dish.name}
							</h4>
							<span class="w-full flex-grow border-b-2 border-dotted border-si-brown mb-2 mx-1" />
							<span class="font-lora text-2xl text-si-brown font-semibold flex-shrink-0">
								{dish.price} kr
							</span>
						</div>
						<p class="text-lg opacity-75">
							{dish.description}
						</p>
					</div>
				{/each}
			</div>
		</div>

		<div
			class="{i != menu.length - 1 ? 'block' : 'hidden'} w-80 mx-auto pt-6 border-b-1 border-black"
		/>
	{/each}
</div>
