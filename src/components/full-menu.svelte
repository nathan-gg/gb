<script>
	import MenuSection from './menu-section.svelte';
	import { menuData } from '../lib/utils/data/menu-data.js';
	import Footer from '/src/components/footer.svelte';
	import { setGlobalOptions } from 'svelte-scrolling';
	import IntersectionObserver from 'svelte-intersection-observer';

	// Shared state for tracking scrolling across components
	let isScrolling = $state(false);

	// Configure the container element
	let container = $state();

	// Configure global scroll options with a custom scrollIntoView function
	setGlobalOptions({
		duration: 800,
		offset: 64,
		onStart: () => {
			isScrolling = true;
			// Temporarily disable scroll snapping during programmatic scrolling
			if (container) {
				container.style.scrollSnapType = 'none';
			}
			console.log('Scrolling started, isScrolling =', isScrolling);
		},
		onDone: () => {
			isScrolling = false;
			// Re-enable scroll snapping after programmatic scrolling
			if (container) {
				container.style.scrollSnapType = 'y mandatory';
			}
			console.log('Scrolling complete, isScrolling =', isScrolling);
		},
		// Custom scrollIntoView function that ensures scrolling happens within the container
		scrollIntoViewFn: (element, options) => {
			if (element && container) {
				// Use the container as the scrolling context instead of window
				const elementTop = element.offsetTop;
				container.scrollTo({
					top: elementTop + (options?.offset || 0),
					behavior: options?.behavior || 'smooth'
				});
				return true; // Return true to indicate we handled the scroll
			}
			return false; // Let the default handler take over
		}
	});

	const menuSections = Object.entries(menuData);

	import { fly, slide } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import { sineInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	let { title, thaiTitle, image } = $props();

	let showDinner = $state(false);
	let showBar = $state(false);
	let showWine = $state(false);
	let showHH = $state(false);

	function toggleDinner() {
		showDinner = !showDinner;
		showBar = false;
		showWine = false;
		showHH = false;
	}
	function toggleBar() {
		showBar = !showBar;
		showDinner = false;
		showWine = false;
		showHH = false;
	}
	function toggleWine() {
		showWine = !showWine;
		showBar = false;
		showDinner = false;
		showHH = false;
	}
	function toggleHH() {
		showHH = !showHH;
		showBar = false;
		showWine = false;
		showDinner = false;
	}

	let showTOC = $state(false);

	function toggleTOC() {
		showTOC = !showTOC;
	}

	let showSpice = $state(false);
	let menuElement = $state();

	function toggleSpice() {
		showSpice = !showSpice;
	}

	export function clickOutside(node) {
		const handleClick = (event) => {
			if (node && !node.contains(event.target) && !event.defaultPrevented) {
				showSpice = false;
			}
		};

		document.addEventListener('click', handleClick, true);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}

	function handleClickOutside(event) {
		alert('Click outside!');
	}

	let openSection = $state('');

	const menuCategories = [
		{
			id: 'dinner',
			name: 'Dinner',
			links: [
				{ text: 'Soups', href: '/full-menu#soups' },
				{ text: 'Appetizers', href: '/full-menu#appetizers' },
				{ text: 'Salads', href: '/full-menu#salad' },
				{ text: 'Curry', href: '/full-menu#curry' },
				{ text: 'Stir Fried', href: '/full-menu#stir-fried' },
				{ text: 'Noodles', href: '/full-menu#noodles' },
				{ text: 'Vegetables', href: '/full-menu#vegetables' },
				{ text: 'Rice', href: '/full-menu#rice' },
				{ text: 'Specialties', href: '/full-menu#specialties' },
				{ text: 'Desserts', href: '/full-menu#desserts' },
				{ text: 'Combinations', href: '/full-menu#combinations' }
			]
		},
		{
			id: 'hh',
			name: 'Happy Hour',
			links: [{ text: 'Happy Hour Menu', href: '/full-menu#happy-hour' }]
		},
		{
			id: 'bar',
			name: 'Bar',
			links: [
				{ text: 'Coffee, Tea & Soft Drinks', href: '/full-menu#ctsd' },
				{ text: 'Non-Spirited', href: '/full-menu#non-spirited' },
				{ text: 'Signature Cocktails', href: '/full-menu#signature-cocktails' },
				{ text: 'Classic Cocktails', href: '/full-menu#classic-cocktails' },
				{ text: 'Beer', href: '/full-menu#beer' },
				{ text: 'Cider', href: '/full-menu#cider' },
				{ text: 'Vodka', href: '/full-menu#vodka' },
				{ text: 'Gin', href: '/full-menu#gin' },
				{ text: 'Rum', href: '/full-menu#rum' },
				{ text: 'Tequila', href: '/full-menu#tequila' },
				{ text: 'Whisky', href: '/full-menu#whisky' },
				{ text: 'Scotch', href: '/full-menu#scotch' },
				{ text: 'Brandy', href: '/full-menu#brandy' },
				{ text: 'Aperitif & Digestif', href: '/full-menu#aperitif-digestif' },
				{ text: 'Vermouth & Liqueurs', href: '/full-menu#vermouth-liqueurs' },
				{ text: 'Specialty Coffee & Tea', href: '/full-menu#sct' }
			]
		},
		{
			id: 'wine',
			name: 'Wine',
			links: [
				{ text: 'Featured Wine', href: '/full-menu#featured-wine' },
				{ text: 'White Wines', href: '/full-menu#white-wines' },
				{ text: 'Rosé', href: '/full-menu#rose' },
				{ text: 'Red Wines', href: '/full-menu#red-wines' }
			]
		}
	];

	function toggle(sectionId) {
		openSection = openSection === sectionId ? '' : sectionId;
	}

	// Add this function to your script section
	function handleLastSectionVisible() {
		// Hide both TOC and spice index
		showTOC = false;
		showSpice = false;
	}
</script>

<section class="bg-tertiary flex h-[calc(100vh-4rem)]">
	<!-- mobile spice index -->
	{#if showSpice}
		<button
			class="font-MonaSans bg-darkText border-darkText text-tertiary fixed bottom-2 left-[25vw] z-20 w-1/2 rounded-[5px] border px-4 text-lg text-[1rem] font-medium text-nowrap transition duration-300 xl:px-5.5 xl:py-2 xl:text-[1rem] xl:left-16 xl:w-44"
			onclick={toggleSpice}
		>
			Spice Index
		</button>
		<div
			transition:slide={{
				delay: 0,
				duration: 400,
				easing: sineInOut,
				x: 0,
				y: 10
			}}
			class="border-darkText bg-tertiary fixed bottom-8 left-[25vw] z-10 flex h-fit w-1/2 flex-col items-center justify-center border xl:bottom-4 xl:left-[4rem] xl:w-44 py-2 rounded-t-[5px] pb-10.5"
		>
			<div class="bg-tertiary flex flex-col gap-y-1 xl:gap-y-4">
				<div class="inline-flex items-center">
					<span class="text-2xl font-semibold inline-block text-[#D08111]">GF</span>
					<p class="font-MonaSans text-darkText text-[1rem]">- Gluten Free</p>
				</div>
				<div class="inline-flex items-center">
					<img src="/spiceMild.svg" alt="Mild Spice" class="inline-block h-8 w-12" />
					<p class="font-MonaSans text-darkText text-[1rem]">- Very Mild</p>
				</div>

				<div class="inline-flex items-center">
					<img src="/spiceMedium.svg" alt="Mild Spice" class="inline-block h-8 w-12" />
					<p class="font-MonaSans text-darkText text-[1rem]">- Mild</p>
				</div>
				<div class="inline-flex items-center">
					<img src="/spiceHot.svg" alt="Mild Spice" class="inline-block h-8 w-12" />
					<p class="font-MonaSans text-darkText text-[1rem]">- Hot</p>
				</div>
				<div class="inline-flex items-center">
					<img src="/spiceVeryHot.svg" alt="Mild Spice" class="inline-block h-8 w-12" />
					<p class="font-MonaSans text-darkText text-[1rem]">- Very Hot</p>
				</div>
			</div>
		</div>
	{:else}
		<button
			class="font-MonaSans bg-tertiary border-darkText text-darkText fixed bottom-2 left-[25vw] z-20 w-1/2 rounded-[5px] border px-4 text-lg text-[1rem] font-medium text-nowrap transition duration-300 xl:px-5.5 xl:py-2 xl:text-[1rem] xl:left-16 xl:w-44"
			onclick={toggleSpice}
		>
			Spice Index
		</button>
	{/if}

	<!-- desktop spice index -->
	<!-- {#if showSpice}
		<div
			transition:fade={{
				delay: 0,
				duration: 250,
				easing: sineInOut,
				x: 500,
				y: 0
			}}
			class="fixed z-50 {showTOC
				? 'w-53/128'
				: 'w-1/2'} right-0 hidden h-[calc(100vh-64px)] flex-col items-center justify-center overscroll-contain xl:flex"
		>
			<div
				class="bg-tertiary border-primary flex h-fit w-2/5 min-w-fit flex-col items-start border-2 p-8"
			>
				<button onclick={toggleSpice} class="text-lightText hover:text-darkText self-end">
					<span class="material-icons md-24">close</span>
				</button>

				<div class="my-4 inline-flex items-center">
					<span class="mr-2 ml-1 text-3xl font-semibold text-[#D08111] xl:text-5xl">GF</span>
					<p class="font-MonaSans text-darkText whitespace-nowrap xl:text-xl xl:text-2xl">
						- Gluten Free
					</p>
				</div>
				<div class="my-4 inline-flex items-center">
					<img
						src="/spiceMild.svg"
						alt="Mild Spice"
						class="inline-block h-8 w-12 xl:h-16 xl:w-16"
					/>
					<p class="font-MonaSans text-darkText whitespace-nowrap xl:text-xl xl:text-2xl">
						- Very Mild
					</p>
				</div>

				<div class="my-4 inline-flex items-center">
					<img
						src="/spiceMedium.svg"
						alt="Mild Spice"
						class="inline-block h-8 w-12 xl:h-16 xl:w-16"
					/>
					<p class="font-MonaSans text-darkText xl:text-xl xl:text-2xl">- Mild</p>
				</div>
				<div class="my-4 inline-flex items-center">
					<img
						src="/spiceHot.svg"
						alt="Mild Spice"
						class="inline-block h-8 w-12 xl:h-16 xl:w-16"
					/>
					<p class="font-MonaSans text-darkText xl:text-xl xl:text-2xl">- Hot</p>
				</div>
				<div class="my-4 inline-flex items-center">
					<img
						src="/spiceVeryHot.svg"
						alt="Mild Spice"
						class="inline-block h-8 w-12 xl:h-16 xl:w-16"
					/>
					<p class="font-MonaSans text-darkText whitespace-nowrap xl:text-xl xl:text-2xl">
						- Very Hot
					</p>
				</div>
			</div>
		</div>
	{:else}
		<button
			title="Spice Index"
			class="fixed bottom-2 left-2 z-20 hidden xl:flex xl:bottom-4 xl:left-4"
			onclick={toggleSpice}
		>
			<img src="spiceShow.svg" class="h-8 w-8 xl:h-16 xl:w-16" alt="Open Spice Index" />
		</button>
	{/if} -->

	<div class=" absolute z-20 ml-2 hidden w-fit justify-between xl:flex">
		{#if showTOC}
			<!-- <button onclick={toggleTOC} class:active={showTOC} class="text-lightText hover:text-darkText">
				<span class="material-icons md-36">keyboard_arrow_left</span>
			</button> -->
		{:else}
			<button
				onclick={() => {
					toggleTOC();
					toggle(openSection);
				}}
				class="text-lightText hover:text-darkText mt-[46vh]"
			>
				<span class="material-icons md-60">keyboard_arrow_right</span>
			</button>
		{/if}
	</div>

	{#if showTOC}
		<div
			id="TOC"
			transition:slide={{
				duration: 250,
				axis: 'x'
			}}
			class=" font-MonaSans text-darkText left-0 hidden h-[calc(100vh)] w-3/5 items-center justify-center pl-6 text-3xl xl:flex"
		>
			<!-- class="font-MonaSans text-darkText left-0 hidden h-[calc(100vh-16px)] w-1/4 items-center pl-6 text-3xl xl:flex" -->
			<div
				class=" desktop-toc group text-darkText flex max-h-3/5 w-full flex-col overflow-y-scroll pr-4"
			>
				{#each menuCategories as section (section.id)}
					<button
						class="mt-4 text-left text-2xl transition-opacity duration-200 group-hover:opacity-50 hover:!opacity-100 2xl:text-3xl {openSection ===
						section.id
							? '!opacity-100'
							: ''}"
						onclick={() => toggle(section.id)}
					>
						{section.name}
					</button>

					{#if openSection === section.id}
						<div
							transition:slide={{ duration: 250, easing: quintInOut }}
							class="flex flex-col text-base 2xl:text-xl"
						>
							{#each section.links as link}
								<a
									href={link.href}
									class="mb-2 inline-block transition-opacity duration-200 group-hover:opacity-50 hover:!opacity-100"
								>
									{link.text}
								</a>
							{/each}
						</div>
					{/if}
				{/each}
			</div>

			<button
				onclick={() => {
					toggleTOC();
					toggle(openSection);
				}}
				class:active={showTOC}
				class="text-lightText hover:text-darkText z-10 mt-[-2vh] w-fit"
			>
				<span class="material-icons md-60">keyboard_arrow_left</span>
			</button>
		</div>
	{/if}

	<div class="fixed z-30 mt-[46vh] w-fit justify-between xl:hidden">
		{#if showTOC}
			<button
				onclick={() => {
					toggleTOC();
					toggle(openSection);
				}}
				class:active={showTOC}
				class="text-lightText hover:text-darkText fixed"
			>
				<span class="material-icons md-24">keyboard_arrow_left</span>
			</button>
		{:else}
			<button
				onclick={() => {
					toggleTOC();
					toggle(openSection);
				}}
				class="text-lightText hover:text-darkText fixed"
			>
				<span class="material-icons md-24">keyboard_arrow_right</span>
			</button>
		{/if}
	</div>

	{#if showTOC}
		<div
			id="TOC-mobile"
			transition:slide|global={{
				duration: 250,
				axis: 'x'
			}}
			class="font-MonaSans text-lightText bg-tertiary fixed z-20 flex h-[calc(100vh-16px)] w-full
			flex-auto flex-col items-center justify-center text-3xl xl:hidden"
		>
			<!-- Back to top button
			{#if showBar || showWine || showHH}
				<button 
					class="fixed top-12 right-4 z-30 text-lightText hover:text-darkText bg-tertiary bg-opacity-80 rounded-full p-1" 
					onclick={scrollToTop}
				>
					<span class="material-icons">arrow_upward</span>
				</button>
			{/if} -->

			<div class="flex w-full flex-col items-center justify-center">
				<div
					class="desktop-toc group text-darkText flex max-h-[80vh] w-3/4 flex-col overflow-y-scroll"
				>
					<!-- "Back to top" anchor for scrolling to top -->
					<!-- <div id="toc-top"></div> -->

					{#each menuCategories as section (section.id)}
						<button
							class="mt-4 text-left transition-opacity duration-200 group-hover:opacity-50 hover:!opacity-100 {openSection ===
							section.id
								? '!opacity-100'
								: ''}"
							onclick={() => toggle(section.id)}
						>
							{section.name}
						</button>

						{#if openSection === section.id}
							<div
								transition:slide={{ duration: 250, easing: quintInOut }}
								class="flex flex-col text-xl"
							>
								{#each section.links as link}
									<a
										href={link.href}
										class="mb-2 inline-block transition-opacity duration-200 group-hover:opacity-50 hover:!opacity-100"
										onclick={toggleTOC}
									>
										{link.text}
									</a>
								{/each}
							</div>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	{/if}

	<div
		id="container"
		bind:this={container}
		class="scroll-container h-screen overflow-x-hidden overflow-y-auto"
	>
		{#each menuSections as [section, data], index}
			<MenuSection
				id={section}
				title={data.title}
				thaiTitle={data.thaiTitle}
				sectionDetails={data.sectionDetails}
				pCol1={data.pCol1}
				pCol2={data.pCol2}
				pCol3={data.pCol3}
				sHead={data.sHead}
				isFooter={data.isFooter}
				previousSection={index > 0 ? menuSections[index - 1][0] : ''}
				nextSection={index < menuSections.length - 1 ? menuSections[index + 1][0] : ''}
				prevTitle={index > 0 ? menuSections[index - 1][1].title : ''}
				nextTitle={index < menuSections.length - 1 ? menuSections[index + 1][1].title : ''}
				menuItems={data.items}
				imagePath={data.imagePath || '/webp/careersKitchenHelper.webp'}
				mobilePath={data.mobilePath || '/webp/careersKitchenHelperMobile.webp'}
				{isScrolling}
				{container}
				class="snap-start snap-normal"
				on:lastSectionVisible={handleLastSectionVisible}
			/>
		{/each}
	</div>
</section>
