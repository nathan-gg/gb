<script>
	import MenuSection from './menu-section.svelte';
	import { menuData } from '../data/menu-data.js';
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
		offset: -64,
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

	import { slide } from 'svelte/transition';
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

	let showTOC = $state(true);

	function toggleTOC() {
		showTOC = !showTOC;
		if (showTOC === false) {
			showBar = false;
			showWine = false;
			showHH = false;
			showDinner = false;
		}
	}

	// // Reference to the mobile TOC container for scrolling
	// let mobileTocContainer;

	// // Function to scroll to top of TOC when needed
	// function scrollToTop() {
	// 	if (mobileTocContainer) {
	// 		mobileTocContainer.scrollTo({
	// 			top: 0,
	// 			behavior: 'smooth'
	// 		});
	// 	}
	// }

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
				{ text: 'Salad', href: '/full-menu#salad' },
				{ text: 'Curry', href: '/full-menu#curry' },
				{ text: 'Stir Fried', href: '/full-menu#stir-fried' },
				{ text: 'Noodles', href: '/full-menu#noodles' },
				{ text: 'Vegetables', href: '/full-menu#vegetables' },
				{ text: 'Rice', href: '/full-menu#rice' },
				{ text: 'Desserts', href: '/full-menu#desserts' },
				{ text: 'Specialties', href: '/full-menu#specialties' }
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

<section class="bg-tertiary flex">
	<!-- mobile spice index -->
	{#if showSpice}
		<div
			transition:fade={{
				delay: 0,
				duration: 250,
				easing: sineInOut,
				x: 500,
				y: 0
			}}
			class="fixed z-50 flex h-[calc(100vh-64px)] w-screen flex-col items-center justify-center bg-black/50 md:hidden"
		>
			<div class="bg-tertiary border-primary flex h-fit w-4/5 flex-col items-start border-2 p-8">
				<button onclick={toggleSpice} class="text-lightText hover:text-darkText self-end">
					<span class="material-icons md-24">close</span>
				</button>

				<div class="my-4 inline-flex items-center">
					<span class="mr-2 ml-1 text-3xl font-semibold text-[#D08111]">GF</span>
					<p class="font-DMSans text-darkText text-xl">- Gluten Free</p>
				</div>
				<div class="my-4 inline-flex items-center">
					<img src="/spiceMild.svg" alt="Mild Spice" class="inline-block h-12 w-12" />
					<p class="font-DMSans text-darkText text-xl">- Very Mild</p>
				</div>

				<div class="my-4 inline-flex items-center">
					<img src="/spiceMedium.svg" alt="Mild Spice" class="inline-block h-12 w-12" />
					<p class="font-DMSans text-darkText text-xl">- Mild</p>
				</div>
				<div class="my-4 inline-flex items-center">
					<img src="/spiceHot.svg" alt="Mild Spice" class="inline-block h-12 w-12" />
					<p class="font-DMSans text-darkText text-xl">- Hot</p>
				</div>
				<div class="my-4 inline-flex items-center">
					<img src="/spiceVeryHot.svg" alt="Mild Spice" class="inline-block h-12 w-12" />
					<p class="font-DMSans text-darkText text-xl">- Very Hot</p>
				</div>
			</div>
		</div>
	{:else}
		<button class="fixed bottom-2 left-2 z-20 md:hidden" onclick={toggleSpice}>
			<img src="spiceShow.svg" class="h-8 w-8" alt="Open Spice Index" />
		</button>
	{/if}

	<!-- desktop spice index -->
	{#if showSpice}
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
				: 'w-1/2'} right-0 hidden h-[calc(100vh-64px)] flex-col items-center justify-center overscroll-contain md:flex"
		>
			<div
				class="bg-tertiary border-primary flex h-fit w-2/5 min-w-fit flex-col items-start border-2 p-8"
			>
				<button onclick={toggleSpice} class="text-lightText hover:text-darkText self-end">
					<span class="material-icons md-24">close</span>
				</button>

				<div class="my-4 inline-flex items-center">
					<span class="mr-2 ml-1 text-3xl font-semibold text-[#D08111] xl:text-5xl">GF</span>
					<p class="font-DMSans text-darkText whitespace-nowrap lg:text-xl xl:text-2xl">
						- Gluten Free
					</p>
				</div>
				<div class="my-4 inline-flex items-center">
					<img
						src="/spiceMild.svg"
						alt="Mild Spice"
						class="inline-block h-12 w-12 xl:h-16 xl:w-16"
					/>
					<p class="font-DMSans text-darkText whitespace-nowrap lg:text-xl xl:text-2xl">
						- Very Mild
					</p>
				</div>

				<div class="my-4 inline-flex items-center">
					<img
						src="/spiceMedium.svg"
						alt="Mild Spice"
						class="inline-block h-12 w-12 xl:h-16 xl:w-16"
					/>
					<p class="font-DMSans text-darkText lg:text-xl xl:text-2xl">- Mild</p>
				</div>
				<div class="my-4 inline-flex items-center">
					<img
						src="/spiceHot.svg"
						alt="Mild Spice"
						class="inline-block h-12 w-12 xl:h-16 xl:w-16"
					/>
					<p class="font-DMSans text-darkText lg:text-xl xl:text-2xl">- Hot</p>
				</div>
				<div class="my-4 inline-flex items-center">
					<img
						src="/spiceVeryHot.svg"
						alt="Mild Spice"
						class="inline-block h-12 w-12 xl:h-16 xl:w-16"
					/>
					<p class="font-DMSans text-darkText whitespace-nowrap lg:text-xl xl:text-2xl">
						- Very Hot
					</p>
				</div>
			</div>
		</div>
	{:else}
		<button
			class="fixed bottom-2 left-2 z-20 hidden md:flex xl:bottom-4 xl:left-4"
			onclick={toggleSpice}
		>
			<img src="spiceShow.svg" class="h-8 w-8 xl:h-16 xl:w-16" alt="Open Spice Index" />
		</button>
	{/if}

	<div class=" absolute z-20 ml-2 hidden w-fit justify-between lg:flex">
		{#if showTOC}
			<!-- <button onclick={toggleTOC} class:active={showTOC} class="text-lightText hover:text-darkText">
				<span class="material-icons md-36">keyboard_arrow_left</span>
			</button> -->
		{:else}
			<button onclick={toggleTOC} class="text-lightText hover:text-darkText mt-[46vh]">
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
			class="font-DMSans text-darkText left-0 hidden h-[calc(100vh-16px)] w-1/4 items-center pl-6 text-3xl lg:flex"
		>
			<div
				class="group text-darkText flex h-fit min-w-fit flex-col border-r border-r-[#9B9893] pr-4"
			>
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
								>
									{link.text}
								</a>
							{/each}
						</div>
					{/if}
				{/each}
			</div>

			<button
				onclick={toggleTOC}
				class:active={showTOC}
				class="text-lightText hover:text-darkText z-10 mt-[-2vh] w-fit"
			>
				<span class="material-icons md-60">keyboard_arrow_left</span>
			</button>
		</div>
	{/if}

	<div class="fixed z-30 mt-[46vh] w-fit justify-between lg:hidden">
		{#if showTOC}
			<button
				onclick={toggleTOC}
				class:active={showTOC}
				class="text-lightText hover:text-darkText fixed"
			>
				<span class="material-icons md-24">keyboard_arrow_left</span>
			</button>
		{:else}
			<button onclick={toggleTOC} class="text-lightText hover:text-darkText fixed">
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
			class="font-DMSans text-lightText bg-tertiary fixed z-20 flex h-[calc(100vh-16px)] w-full
			flex-auto flex-col items-center justify-center text-3xl lg:hidden"
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

			<div class="flex h-full w-full flex-col items-center justify-center">
				<div
					class="scroll-toc group text-darkText flex max-h-[100vh] w-3/4 flex-col overflow-y-auto"
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
