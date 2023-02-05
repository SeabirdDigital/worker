<script lang="ts">
	import ContactText from '$lib/components/ContactText.svelte';
	import Text from '$lib/components/Text.svelte';
	import siteStore from '$lib/stores/site';
	import type { IndianSite } from '..';
	import Quote from '../components/icons/Quote.svg';

	const site = $siteStore as IndianSite;

	const images = site.pages.home.images;
	const globalImages = site.data?.images;

	const links = site.data?.links;
</script>

<div class="z-50 absolute w-full">
	<div class="mt-6 px-2 container grid grid-cols-2">
		<div>
			{#if globalImages?.logo}
				<img height="64px" width="64px" src={globalImages?.logo} alt="Logo" />
			{:else}
				<span>{site.siteData.siteName}</span>
			{/if}
		</div>

		<div class="flex justify-end items-center">
			<a
				href="tel:042121688"
				class="text-white shadow-hard bg-rh-primary shadow-rh-dark hover:shadow-none duration-200 py-4 px-5 w-fit h-fit flex items-center gap-2"
			>
				<svg width="18" height="18" viewBox="0 0 36 36">
					<path
						fill="currentColor"
						d="M27.73 35.44a4.72 4.72 0 0 1-1-.11a33.91 33.91 0 0 1-16.62-8.75a32.71 32.71 0 0 1-9-16.25a4.58 4.58 0 0 1 1.35-4.28l4-3.85A2 2 0 0 1 8 1.66a2 2 0 0 1 1.45.87l5 7.39a1.6 1.6 0 0 1-.11 1.9l-2.51 3A18.94 18.94 0 0 0 16 20.71a19.26 19.26 0 0 0 6.07 4.09l3.11-2.47a1.64 1.64 0 0 1 1.86-.12l7.55 4.88A2 2 0 0 1 35 30.2l-3.9 3.86a4.74 4.74 0 0 1-3.37 1.38ZM7.84 3.64l-4 3.85a2.54 2.54 0 0 0-.75 2.4a30.7 30.7 0 0 0 8.41 15.26a31.9 31.9 0 0 0 15.64 8.23a2.75 2.75 0 0 0 2.5-.74l3.9-3.86l-7.29-4.71l-3.34 2.66a1 1 0 0 1-.92.17a20.06 20.06 0 0 1-7.36-4.75a19.49 19.49 0 0 1-4.87-7.2A1 1 0 0 1 10 14l2.7-3.23Z"
					/>
					<path fill="none" d="M0 0h36v36H0z" />
				</svg>
				042-12 16 88
			</a>
		</div>
	</div>
</div>

<div class="overflow-hidden">
	<div class="container pt-40 lg:pb-40 lg:relative grid lg:grid-cols-2 gap-8">
		<div class="flex flex-col justify-center lg:pr-8">
			<h1 class="font-heading font-bold text-4xl md:text-5xl mb-4">
				<Text id="heroHeading" />
			</h1>
			<p>
				<Text id="heroText" />
			</p>

			<a
				href={links?.menu}
				class="text-white bg-rh-primary py-3 px-5 shadow-hard hover:shadow-none shadow-rh-dark duration-200 w-fit flex items-center gap-2 mt-6"
			>
				Se Menyn
				<svg class="rotate-90" width="18" height="18" viewBox="0 0 36 36">
					<path
						fill="currentColor"
						d="M27.66 15.61L18 6l-9.66 9.61A1 1 0 1 0 9.75 17L17 9.81v19.13a1 1 0 1 0 2 0V9.81L26.25 17a1 1 0 0 0 1.41-1.42Z"
					/>
					<path fill="none" d="M0 0h36v36H0z" />
				</svg>
			</a>
		</div>
		<div class="h-[30vh] lg:h-auto mt-12 lg:mt-0">
			<div
				class="-z-10 h-[30vh] w-full lg:h-[175%] lg:w-[32rem] absolute lg:-bottom-[30%] left-0 lg:left-auto right-0 lg:-right-12 bg-cover lg:rotate-[24deg]"
				style="background-image: url({images?.hero});"
			/>
		</div>
	</div>
</div>

<div class="bg-rh-primary">
	<div class="container py-16 flex flex-col items-center text-center text-white">
		<div class="flex flex-col justify-center">
			<h2 class="font-heading font-bold text-4xl mb-4">
				<Text id="aboutHeading" />
			</h2>
			<p>
				<Text id="aboutText" />
			</p>

			<div class="flex items-center justify-center gap-4 mt-6">
				<a
					href={links?.menu}
					target="_blank"
					rel="noreferrer"
					class="text-white bg-rh-dark border border-rh-dark py-3 px-5 w-fit flex items-center gap-2"
				>
					Beställ online
				</a>
				<a href="tel:042121688" class="text-white border py-3 px-5 w-fit flex items-center gap-2">
					<svg width="18" height="18" viewBox="0 0 36 36">
						<path
							fill="currentColor"
							d="M27.73 35.44a4.72 4.72 0 0 1-1-.11a33.91 33.91 0 0 1-16.62-8.75a32.71 32.71 0 0 1-9-16.25a4.58 4.58 0 0 1 1.35-4.28l4-3.85A2 2 0 0 1 8 1.66a2 2 0 0 1 1.45.87l5 7.39a1.6 1.6 0 0 1-.11 1.9l-2.51 3A18.94 18.94 0 0 0 16 20.71a19.26 19.26 0 0 0 6.07 4.09l3.11-2.47a1.64 1.64 0 0 1 1.86-.12l7.55 4.88A2 2 0 0 1 35 30.2l-3.9 3.86a4.74 4.74 0 0 1-3.37 1.38ZM7.84 3.64l-4 3.85a2.54 2.54 0 0 0-.75 2.4a30.7 30.7 0 0 0 8.41 15.26a31.9 31.9 0 0 0 15.64 8.23a2.75 2.75 0 0 0 2.5-.74l3.9-3.86l-7.29-4.71l-3.34 2.66a1 1 0 0 1-.92.17a20.06 20.06 0 0 1-7.36-4.75a19.49 19.49 0 0 1-4.87-7.2A1 1 0 0 1 10 14l2.7-3.23Z"
						/>
						<path fill="none" d="M0 0h36v36H0z" />
					</svg>
					Ring hit
				</a>
			</div>
		</div>
	</div>
</div>

<div class="flex flex-col items-center justify-center flex-grow gap-4 py-20">
	<div class="relative">
		<img class="-z-10 absolute -top-12 -left-16 h-36" src={Quote} alt="" />

		<h2 class="text-4xl font-heading font-bold">
			<Text id="reviewsHeading" />
		</h2>
	</div>

	<div class="md:grid grid-cols-3 text-md text-center container text-base" id="reviews">
		{#if site.data?.reviews}
			{#each site.data.reviews as review}
				<div>
					<p>
						{@html review.message}
					</p>
					<span>{review.author}</span>
				</div>
			{/each}
		{/if}
	</div>
</div>

<footer class="bg-rh-dark text-white">
	<div class="container text-center lg:text-left py-24 grid lg:grid-cols-2 gap-10">
		<div>
			<h2 class="font-heading text-3xl mb-2">Kontakt</h2>
			<div class="grid lg:grid-cols-2 gap-2">
				<div class="flex flex-col">
					<h4>Adress:</h4>
					<a href={links?.map} class="underline hover:no-underline">
						<ContactText type="address" />
					</a>
				</div>

				<div class="flex flex-col">
					<h4>Telefon:</h4>
					<a href="tel:042121688" class="underline hover:no-underline"> 042-12 16 88 </a>
				</div>
			</div>
		</div>

		<div>
			{#if site.data?.openingHours}
				<h2 class="font-heading text-3xl mb-2">Öppetider</h2>
				<div class="grid lg:grid-cols-3 gap-2">
					{#each site.data.openingHours as day}
						<div class="flex flex-col">
							<span>{day.weekday}</span>
							<span>{day.time}</span>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>

	<div class="container pb-8 text-center">
		Copyright 2023 © Seabird Digital UD. Alla rättigheter förbehållna.
	</div>
</footer>

<style lang="postcss">
	#reviews > div {
		@apply px-8 py-6 flex flex-col gap-4;
	}

	#reviews span {
		@apply font-bold;
	}
</style>
