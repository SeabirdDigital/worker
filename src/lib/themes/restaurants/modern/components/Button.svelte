<script lang="ts">
	import { goto } from "$app/navigation";


	export let href: string;
	let className = ''
	export { className as class };
</script>

<button on:click={()=>goto(href)} class={`flex items-center h-full gap-2.5 p-4 text-xl leading-none border-2 ${className}`}>
	<slot />
</button>
