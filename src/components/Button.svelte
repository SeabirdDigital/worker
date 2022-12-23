<script>
	let className = '';
	export { className as class };
</script>

<button class={`flex items-center h-full gap-2.5 p-4 text-xl leading-none border-2 ${className}`}>
	<slot />
</button>
