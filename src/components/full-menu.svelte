<script lang="ts">
	import Header from '../components/head.svelte';
	import Footer from '../components/footer.svelte';

	import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling';
	import { build } from 'vite';

	let {
		thisRef,
		goTo,
		goBack,
		title,
		thaiTitle,
		body,
		arrowText,
		arrow = true,
		prevArrowText,
		prevArrow = false,
		image,
		ifPage1 = false,
		ifPage2 = false
	} = $props();

// 	function changePage(pageID) {
// 		const element = document.getElementById(pageID);
// 		element.scrollIntoView(false);
// 	}


// 	function disableSnapTemporarily() {
// 		const wrapper = document.querySelector('.scroll-wrapper');
// 		if (!wrapper) return;

// 		wrapper.style.scrollSnapType = 'none';

// 		// Re-enable after short delay (adjust as needed)
// 		setTimeout(() => {
// 		wrapper.style.scrollSnapType = 'y mandatory';
// 		}, 500); // give the scroll enough time to finish
// 	}

// 	function smoothScroll(sectionName, off) {
// 		disableSnapTemporarily();
// 		use:scrollTo({ ref: sectionName, offset: off });
// 	}


// 	function scrollIntoView({ target }) {
// 		const el = document.querySelector(target.getAttribute('href'));
// 		if (!el) return;
//     el.scrollIntoView({
//       behavior: 'smooth',
// 	  duration: 1000
//     });
//   }

// IDs for each section—update to match your content
let sections = ['salad1', 'salad2', 'curry'];
  let currentIndex = 0;

  // Scroll to a given section index, smoothly
  const scrollTarget = (index) => {
    if (index < 0 || index >= sections.length) return;
    const target = document.getElementById(sections[index]);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      currentIndex = index;
    }
  };
</script>

<div class="sticky top-0 z-50">
	<Header />
</div>

<div class="snap-y snap-mandatory scroll-mb-16 top-16">
	{#each sections as id, i}
	<section
		id={id}
		class="relative flex min-h-[calc(100vh-4rem)] snap-start snap-normal"
	>
		<div class="bg-tertiary font-instrument flex w-6/12 flex-auto flex-col text-[#000000]">
				<div class="absolute top-32 left-1/4 flex -translate-x-1/2 transform flex-col items-center">
					<!-- <button onclick={changePage('curry')} class="text-lightText hover:text-darkText">
						<p>
							{'Appetizers'}
						</p> -->

					<!-- <a use:scrollTo={{ ref: 'appetizers', offset:-64 }} class="text-lightText hover:text-darkText"> -->
					<!-- <a  onclick={smoothScroll('curry', -64)} class="text-lightText hover:text-darkText"> -->
					<!-- <a href='#curry' onclick={scrollIntoView} class="text-lightText hover:text-darkText"> -->
					 <button onclick={() => scrollTarget(i - 1)} disabled={i === 0} class="text-lightText hover:text-darkText" aria-label="Appetizers">
						<p>
							{'Appetizers'}
						</p>
					</button>
					
				</div>

			<div class="m-48 mt-8 flex-grow">
				<h1 class="text-darkText mt-24 text-6xl">Salad</h1>
				<h1 class="text-lightText mb-12 text-4xl">สลัด</h1>

				<div class="text-darkText font-DMSans mt-8 mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">16. Som Tum</p>
							<p class="font-light">
								Seasonal green papaya, garlic, tomatoes, roasted peanuts, lime juice, bird’s eye
								chilli
							</p>
						</div>
						<div>
							<p>12.95</p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">17. Yum Woon San (Salad Lettuce Wrap)</p>
							<p class="font-light">
								Glass noodles, minced chicken, shrimps, shallots, mint, lime juice, bird’s eye
								chilli
							</p>
						</div>
						<div>
							<p>13.95</p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">18. Yum Ta-Lay</p>
							<p class="font-light">
								Shrimp, bay scallops and squid tossed with fresh lime, fish sauce and bird’s eye
								chilli
							</p>
						</div>
						<div>
							<p>14.95</p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">19. Pla Goong</p>
							<p class="font-light">
								Spicy tiger prawns, lemongrass, shallots, fish sauce, lime juice and Thai spices
							</p>
						</div>
						<div>
							<p>14.95</p>
						</div>
					</div>
				</div>
			</div>

			<!-- {#if arrow} -->
				<div
					 class="absolute bottom-56 left-1/4 flex -translate-x-1/2 transform flex-col items-center"
				>
					<!-- <a use:scrollTo={{ ref: 'curry', offset:-64 }} class="text-lightText hover:text-darkText">
						<p>
							More Salads
						</p>
					</a> -->

					<button onclick={() => scrollTarget(i + 1)} disabled={i === sections.length - 1} class="text-lightText hover:text-darkText" aria-label="More Salads">
						<p>
							More Salads
						</p>
					</button>
				</div>
			<!-- {/if} -->
		</div>

		<div class="w-1/2 flex-auto">
			<img src={image} class="h-full object-cover" alt="" />
		</div>
	</section>

	<section
		
		id={id}
		class="relative flex min-h-screen snap-start snap-normal"
	>
		<div class="bg-tertiary flex w-6/12 flex-auto flex-col font-serif text-[#000000]">
			{#if prevArrow}
				<div class="absolute top-32 left-1/4 flex -translate-x-1/2 transform flex-col items-center">
					<a use:scrollTo={{ ref: 'salad1', offset:-64 }} class="text-lightText hover:text-darkText">
						<p>
							Salads
						</p>
					</a>
				</div>
			{/if}

			<div class="m-48 mt-8 flex-grow">
				<h1 class="text-darkText mt-24 text-6xl">Salad</h1>
				<h1 class="text-lightText mb-12 text-4xl">สลัด</h1>

				<div class="text-darkText font-DMSans mt-8 mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">20. Yum Pla Meuk</p>
							<p class="font-light">
								Squids with lime juice, shallots, fish sauce and bird’s eye chilli
							</p>
						</div>
						<div>
							<p>14.50</p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">21. Yum Neuua</p>
							<p class="font-light">
								Strip loin beef, lime juice, onions, scallions and Thai chilli
							</p>
						</div>
						<div>
							<p>14.50</p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">22. Larb</p>
							<p class="font-light">
								Minced chicken or beef, with shallots, lime juice and roasted chilli
							</p>
						</div>
						<div>
							<p>13.50</p>
						</div>
					</div>
				</div>
			</div>

			{#if arrow}
				<div
					class="absolute bottom-56 left-1/4 flex -translate-x-1/2 transform flex-col items-center"
				>
				<a use:scrollTo={{ ref: 'curry', offset:-64 }} class="text-lightText hover:text-darkText">
					<p>
						{arrowText}
					</p>
				</a>
				</div>
			{/if}
		</div>

		<div class="w-1/2 flex-auto">
			<img src={image} class="h-full object-cover" alt="" />
		</div>
	</section>

	<section
		id="curry"
		class="relative flex min-h-screen snap-start snap-normal"
	>
		<div class="bg-tertiary flex w-6/12 flex-auto flex-col font-serif text-[#000000]">
			{#if prevArrow}
				<div class="absolute top-32 left-1/4 flex -translate-x-1/2 transform flex-col items-center">
					<div use:scrollTo={goBack} class="text-lightText hover:text-darkText">
						<p>
							{prevArrowText}
						</p>
					</div>
				</div>
			{/if}

			<div class="m-48 mt-8 flex-grow">
				<h1 class="text-darkText mt-24 text-6xl">Curry</h1>
				<h1 class="text-lightText mb-12 text-4xl">แกง</h1>

				<div class="text-darkText font-DMSans mt-8 mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold"></p>
							<p class="font-light"></p>
						</div>
						<div>
							<p></p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold"></p>
							<p class="font-light"></p>
						</div>
						<div>
							<p></p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold"></p>
							<p class="font-light"></p>
						</div>
						<div>
							<p></p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold"></p>
							<p class="font-light"></p>
						</div>
						<div>
							<p></p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold"></p>
							<p class="font-light"></p>
						</div>
						<div>
							<p></p>
						</div>
					</div>
				</div>
			</div>

			{#if arrow}
				<div
					class="absolute bottom-56 left-1/4 flex -translate-x-1/2 transform flex-col items-center"
				>
					<div use:scrollTo={goTo} class="text-lightText hover:text-darkText">
						<p>
							{arrowText}
						</p>
					</div>
				</div>
			{/if}
		</div>

		<div class="w-1/2 flex-auto">
			<img src={image} class="h-full object-cover" alt="" />
		</div>
	</section>

	<!-- <section
		use:scrollRef={thisRef}
		id="vegetables"
		class="relative flex min-h-screen snap-start snap-normal"
	>
		<div class="bg-tertiary flex w-6/12 flex-auto flex-col font-serif text-[#000000]">
			{#if prevArrow}
				<div class="absolute top-32 left-1/4 flex -translate-x-1/2 transform flex-col items-center">
					<div use:scrollTo={goBack} class="text-lightText hover:text-darkText">
						<p>
							{prevArrowText}
						</p>
					</div>
				</div>
			{/if}

			<div class="m-48 mt-8 flex-grow">
				<h1 class="text-darkText mt-24 text-6xl">Vegetables</h1>
				<h1 class="text-lightText mb-12 text-4xl">ผัก</h1>

				<div class="text-darkText font-DMSans mt-8 mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">44. Tofu Phat Bai Ga-Phrao</p>
							<p class="font-light">
								Stir-fried soft tofu with seasonal vegetables, white button mushrooms, chilli paste
								and holy basil
							</p>
						</div>
						<div>
							<p>17.95</p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">45. Phat Phak Ruaam Mit</p>
							<p class="font-light">
								Stir-fried seasonal vegetables, white button mushrooms and tofu with your favourite
								sauce (Black Bean, Thai Peanut Sauce, Garlic, Oyster or Wild Bangkok Delight)
							</p>
						</div>
						<div>
							<p>17.95</p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">46. Ruaam Mit Phat Bai Horapa</p>
							<p class="font-light">
								Seasonal vegetables, mushrooms, pressed tofu, bean sprouts, with house basil and
								garlic
							</p>
						</div>
						<div>
							<p>17.95</p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">47. Thuaa Phat Phrik Khing</p>
							<p class="font-light">
								Stir-fried green beans, kaffir lime leaves, basil, in House Spicy Sauce
							</p>
						</div>
						<div>
							<p>17.95</p>
						</div>
					</div>
				</div>
			</div>

			{#if arrow}
				<div
					class="absolute bottom-56 left-1/4 flex -translate-x-1/2 transform flex-col items-center"
				>
					<div use:scrollTo={goTo} class="text-lightText hover:text-darkText">
						<p>
							{arrowText}
						</p>
					</div>
				</div>
			{/if}
		</div>

		<div class="w-1/2 flex-auto">
			<img src={image} class="h-full object-cover" alt="" />
		</div>
	</section>

	<section
		use:scrollRef={thisRef}
		id="vegetables"
		class="relative flex min-h-screen snap-start snap-normal"
	>
		<div class="bg-tertiary flex w-6/12 flex-auto flex-col font-serif text-[#000000]">
			{#if prevArrow}
				<div class="absolute top-32 left-1/4 flex -translate-x-1/2 transform flex-col items-center">
					<div use:scrollTo={goBack} class="text-lightText hover:text-darkText">
						<p>
							{prevArrowText}
						</p>
					</div>
				</div>
			{/if}

			<div class="m-48 mt-8 flex-grow">
				<h1 class="text-darkText mt-24 text-6xl">Desserts</h1>
				<h1 class="text-lightText mb-12 text-4xl">ขนม</h1>

				<div class="text-darkText font-DMSans mt-8 mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">Fresh Mango Sticky Rice (Seasonal)</p>
						</div>
						<div>
							<p>7</p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">Brown Sticky Rice with Vanilla Ice-Cream</p>
						</div>
						<div>
							<p>7</p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">Deep-Fried Banana with Vanilla Ice-Cream</p>
						</div>
						<div class="">
							<p>7</p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">Green Tea Ice-Cream</p>
						</div>
						<div>
							<p>6</p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">Mango Ice-Cream</p>
						</div>
						<div>
							<p>6</p>
						</div>
					</div>
				</div>
			</div>

			{#if arrow}
				<div
					class="absolute bottom-56 left-1/4 flex -translate-x-1/2 transform flex-col items-center"
				>
					<div use:scrollTo={goTo} class="text-lightText hover:text-darkText">
						<p>
							{arrowText}
						</p>
					</div>
				</div>
			{/if}
		</div>

		<div class="w-1/2 flex-auto">
			<img src={image} class="h-full object-cover" alt="" />
		</div>
	</section> -->
	
	<div class="bottom-0 snap-start snap-normal">
		<Footer />
	</div>
	{/each}
</div>


