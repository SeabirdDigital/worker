<script>
	import Text from '$lib/components/Text.svelte';
	import ArrowDown from '../components/icons/ArrowDown.svg';
	import ChevronRight from '../components/icons/ChevronRight.svg';
</script>

<div class="h-screen w-screen flex flex-col">
	<div class="h-[15%] flex">
		<div class="h-full w-[15%] bg-si-red flex justify-center items-center">
			<img class="w-[60%]" src="/si/logo.png" alt="s" />
		</div>

		<div class="flex flex-grow border-b">
			<div class="flex-grow" />

			<div class="flex items-center px-8 text-gray-800">Norregatan 15,<br />211 27 Malmö</div>
			<div class="border-l bg-gray-50 text-gray-800 h-full px-8 flex items-center">
				+46 (0)40-23 45 88 <img class="h-6" src={ChevronRight} alt="" />
			</div>
		</div>
	</div>

	<div class="flex flex-grow">
		<div class="w-[15%] flex items-end justify-center pb-12">
			<img src={ArrowDown} alt="" />
		</div>

		<div class="flex flex-grow">
			<div class="w-1/2 h-full bg-cover" style="background-image: url(/si/hero.png);" />

			<div class="h-full flex flex-col gap-2 justify-center px-12">
				<h1 class="text-4xl md:text-4xl 2xl:text-5xl font-lora">
					<Text id="heroHeading" />
				</h1>
				<p>
					<Text id="heroText" />
				</p>
			</div>
		</div>
	</div>
</div>
