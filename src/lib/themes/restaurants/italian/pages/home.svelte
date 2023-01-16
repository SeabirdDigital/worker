<script>
	import Text from '$lib/components/Text.svelte';
	import ArrowDown from '../components/icons/ArrowDown.svg';
	import ChevronRight from '../components/icons/ChevronRight.svg';
	import Quote from '../components/icons/Quote.svg';
	import Star from '../components/icons/Star.svg';
</script>

<div class="h-screen w-full flex flex-col">
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

<div class="flex h-[85vh]">
	<div class="ml-[15%] flex flex-grow">
		<div class="h-full w-1/2 flex flex-col gap-2 justify-center px-20">
			<h2 class="text-4xl md:text-4xl 2xl:text-5xl font-lora">
				<Text id="aboutHeading" />
			</h2>
			<p>
				<Text id="aboutText" />
			</p>
		</div>

		<div class="w-1/2 h-full bg-cover" style="background-image: url(/si/about.jpg);" />
	</div>
</div>

<div class="flex">
	<div id="stars" class="w-[15%] flex flex-col items-center py-6">
		<img src={Star} alt="" />
		<img src={Star} alt="" />
		<img src={Star} alt="" />
		<img src={Star} alt="" />
	</div>

	<div class="flex flex-col items-center justify-center flex-grow gap-8">
		<div class="relative">
			<img class="-z-10 absolute -top-12 -left-16 h-36" src={Quote} alt="" />

			<h2 class="text-4xl md:text-4xl 2xl:text-5xl font-lora">Recensioner</h2>
		</div>

		<div class="flex text-sm text-center container" id="reviews">
			<div>
				<p>
					Mycket god pizza och servicen var mycket bra.
					<b>Kocken vet hur man gör riktig italiensk pizza.</b>
					Tack för pizzan.
				</p>
				<span>Mubinul Mulk</span>
			</div>
			<div>
				<p>
					<b>Bästa pizzan i Malmö. Hands down.</b> Alla ingredienser är färska och alla rätt (som jag
					smakat) klassar alla andra pizzerior jag har käkat på!
				</p>
				<span>Victor Schack</span>
			</div>
			<div>
				<p>
					Fantastisk pizza. Nya ägaren levererar. <b>En slice räckte</b> för att jag skulle skriva en
					recension. Vi ses igen.
				</p>
				<span>Linus Persson</span>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	#stars > img {
		@apply -rotate-45 w-[8vw] h-[8vw] opacity-50;
	}

	#reviews > div {
		@apply px-8 flex flex-col gap-4;
	}

	#reviews span {
		@apply font-bold;
	}
</style>
