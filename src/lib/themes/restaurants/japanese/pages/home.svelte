<script lang="ts">
	import { scrollRef, scrollTo, scrollTop } from 'svelte-scrolling';

	import Text from '$lib/components/Text.svelte';

	import ImageWrapper from '$lib/components/ImageWrapper.svelte';
	import pageId from '$lib/stores/pageId';
	import siteStore from '$lib/stores/site';
	import { JapaneseRestaurant } from '..';
	import { RestaurantDefaults, type RestaurantSite } from '../..';

	const site = $siteStore as RestaurantSite;

	const images = site.pages.home.images;
	const globalImages = site.data?.images;

	const links = site.data?.links;
	const reviews = site.data?.reviews ?? RestaurantDefaults.data.reviews;
	const contact = site.data?.contact ?? RestaurantDefaults.data.contact;
	const openingHours = site.data?.openingHours ?? RestaurantDefaults.data.openingHours;
</script>

<header class="container flex justify-between h-24 py-6 mb-4">
	<div>
		<img src={globalImages?.logo} class="h-full max-w-[12rem]" alt="Logo" />
	</div>

	<div class="flex items-center gap-4">
		<a href={links?.map}>
			<button>Hitta hit</button>
		</a>
		<a href={'tel:' + contact?.phone}>
			<button class="bg-puffin-primary h-fit py-2 px-4"> Ring </button>
		</a>
	</div>
</header>

<div class="relative flex flex-col-reverse md:flex-col">
	<div class="md:absolute h-[40vh] md:h-full md:w-1/2 left-1/2">
		<ImageWrapper id="hero">
			<div
				class="h-full w-full bg-cover bg-center bg-fixed md:bg-scroll"
				style="background-image: url({images?.hero});"
			/>
		</ImageWrapper>
	</div>
	<div class="container py-36">
		<div class="flex flex-col gap-2 md:w-1/2">
			<h1 class="font-medium uppercase text-4xl">
				<Text id="heroHeading" />
			</h1>

			<p class="w-3/4">
				<Text id="heroText" />
			</p>
			<div class="flex items-center gap-4 mt-4">
				<a href={links?.menu}>
					<button class="bg-puffin-primary h-fit py-2 px-4"> Se menyn </button>
				</a>

				<a href={links?.foodora}>
					<button>Foodora</button>
				</a>
			</div>
		</div>
	</div>
</div>

<div class="container flex flex-col gap-2 items-center text-center py-36">
	<h2 class="text-3xl uppercase">
		<Text id="aboutHeading" />
	</h2>
	<p class="w-4/5">
		<Text id="aboutText" />
	</p>
</div>

<ImageWrapper id="about">
	<div
		class="bg-cover bg-center bg-fixed h-[40vh]"
		style="background-image: url({images?.about});"
	/>
</ImageWrapper>

<div class="flex">
	<div class="flex flex-col items-center justify-center flex-grow gap-8 py-24">
		<div class="relative">
			<h2 class="text-4xl 2xl:text-5xl uppercase">
				<Text id="reviewsHeading" />
			</h2>
		</div>

		<div class="md:flex text-md text-center container" id="reviews">
			{#each reviews as review}
				<div class="px-8 flex flex-col gap-4">
					<p class="text-base">
						{@html review.message}
					</p>
					<span class="font-bold">{review.author}</span>
				</div>
			{/each}
		</div>
	</div>
</div>

<footer class="text-sm">
	<div class="container">
		<div class="relative py-16 flex flex-col gap-8 md:gap-0 md:grid md:grid-cols-3">
			<div class="h-fit flex justify-center md:justify-start">
				<img class="w-36 h-auto" src={globalImages?.logo} alt="" />
			</div>

			<div class="col-span-2 flex flex-col md:flex-row relative gap-4">
				<div class="md:w-1/2 px-4 flex flex-col gap-2">
					<h3 class="text-lg uppercase">Öppettider</h3>
					{#each openingHours as day}
						<div class="flex justify-between">
							<span>{day.weekday}</span>
							<span class="text-right">{day.time}</span>
						</div>
					{/each}
				</div>
				<div class="md:w-1/2 px-4 flex flex-col gap-2">
					<h3 class="text-lg uppercase">Hör av dig!</h3>
					<div class="flex justify-between">
						<span>Email</span>
						<a class="text-right" href={'mailto:' + contact?.email}>
							{contact?.email}
						</a>
					</div>

					<div class="flex justify-between">
						<span>Telefon</span>
						<a class="text-right" href={'tel:' + contact?.phone?.replace(/\s/g, '')}>
							{contact?.phone}
						</a>
					</div>

					<div class="flex md:hidden justify-between">
						<span>Adress</span>
						<a class="text-right" href={'tel:' + contact?.phone?.replace(/\s/g, '')}>
							{@html contact?.address}
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="text-center py-8">
		Copyright 2023 &copy; Seabird Digital UD. Alla rättigheter förbehållna.
	</div>
</footer>
