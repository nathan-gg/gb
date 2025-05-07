<script>
	import MenuSection from './menu-section.svelte';
	import { menuData } from '../data/menu-data.js';
	import Footer from '/src/components/footer.svelte';
	import { setGlobalOptions } from 'svelte-scrolling';

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
	import { fly } from 'svelte/transition';

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
</script>

<section class="bg-tertiary flex">
	<div class="w-fit justify-between fixed z-30 flex">
		{#if showTOC}
			<button onclick={toggleTOC} class:active={showTOC} class="text-lightText hover:text-darkText">
				<span class="material-icons md-36"
						>keyboard_arrow_left</span
					>
			</button>
		{:else}
			<button onclick={toggleTOC} class="text-lightText hover:text-darkText">
				<span class="material-icons md-36"
						>keyboard_arrow_right</span
					>
			</button>
		{/if}
	</div>

	{#if showTOC}
		<div
			id="TOC"
			transition:slide|global={{
				duration: 250,
				axis: 'x'
			}}
			class=" font-DMSans text-lightText left-0 flex h-[calc(100vh-16px)] w-1/4 flex-auto flex-col justify-center pl-6 text-3xl"
		>
			<div class="flex flex-col border-r border-r-[#9B9893] fixed pr-4">
				{#if showDinner}
					<button class="text-darkText text-left" onclick={toggleDinner}>Dinner</button>
					<div
						transition:slide={{
							duration: 250,
							easing: quintInOut
						}}
						class="flex flex-col text-lg"
					>
						
						<a href="/full-menu#soups" class="hover:text-darkText mb-2 inline-block">Soups</a>
						<a href="/full-menu#appetizers" class="hover:text-darkText mb-2 inline-block"
							>Appetizers</a
						>
						<a href="/full-menu#salad" class="hover:text-darkText mb-2 inline-block">Salad</a>
						<a href="/full-menu#curry" class="hover:text-darkText mb-2 inline-block">Curry</a>
						<a href="/full-menu#stir-fried" class="hover:text-darkText mb-2 inline-block"
							>Stir Fried</a
						>
						<a href="/full-menu#noodles" class="hover:text-darkText mb-2 inline-block">Noodles</a>
						<a href="/full-menu#vegetables" class="hover:text-darkText mb-2 inline-block"
							>Vegetables</a
						>
						
						<a href="/full-menu#rice" class="hover:text-darkText mb-2 inline-block"
							>Rice</a
						>
						<a href="/full-menu#specialties" class="hover:text-darkText mb-2 inline-block">Specialties</a>
						<a href="/full-menu#desserts" class="hover:text-darkText mb-2 inline-block">Desserts</a>
						<a href="/full-menu#combinations" class="hover:text-darkText mb-2 inline-block">Combinations</a>
					</div>
				{:else}
					<button class="hover:text-darkText text-left" onclick={toggleDinner}>Dinner</button>
				{/if}

				{#if showHH}
					<button class="text-darkText mt-4 text-left" onclick={toggleHH}>Happy Hour</button>
					<div
						transition:slide={{
							duration: 250,
							easing: quintInOut
						}}
						class="flex flex-col text-xl"
					>
						<a href="/full-menu#happy-hour" class="hover:text-darkText mb-2 inline-block">Happy Hour Menu</a>
					</div>
				{:else}
					<button class="hover:text-darkText mt-4 text-left" onclick={toggleHH}>Happy Hour</button>
				{/if}

				{#if showBar}
					<button class="text-darkText mt-4 text-left" onclick={toggleBar}>Bar</button>
					<div
						transition:slide={{
							duration: 250,
							easing: quintInOut
						}}
						class="flex flex-col text-xl"
					>
						<a href="/full-menu#ctsd" class="hover:text-darkText mb-2 inline-block"
							>Coffee, Tea & Soft Drinks</a
						>
						
						<a href="/full-menu#non-spirited" class="hover:text-darkText mb-2 inline-block"
							>Non-Spirited</a
						>
						<a href="/full-menu#signature-cocktails" class="hover:text-darkText mb-2 inline-block"
							>Signature Cocktails</a
						>
						<a href="/full-menu#classic-cocktails" class="hover:text-darkText mb-2 inline-block"
							>Classic Cocktails</a
						>
						
						<a href="/full-menu#beer" class="hover:text-darkText mb-2 inline-block"
							>Beer</a
						>
						
						<a href="/full-menu#cider" class="hover:text-darkText mb-2 inline-block">Cider</a>
						<a href="/full-menu#vodka" class="hover:text-darkText mb-2 inline-block">Vodka</a>
						<a href="/full-menu#gin" class="hover:text-darkText mb-2 inline-block">Gin</a>
						<a href="/full-menu#rum" class="hover:text-darkText mb-2 inline-block">Rum</a>
						<a href="/full-menu#tequila" class="hover:text-darkText mb-2 inline-block">Tequila</a>
						<a href="/full-menu#whisky" class="hover:text-darkText mb-2 inline-block">Whisky</a>
						<a href="/full-menu#scotch" class="hover:text-darkText mb-2 inline-block">Scotch</a>
						<a href="/full-menu#brandy" class="hover:text-darkText mb-2 inline-block">Brandy</a>
						<a href="/full-menu#aperitif-digestif" class="hover:text-darkText mb-2 inline-block"
							>Aperitif & Digestif</a
						>
						<a href="/full-menu#vermouth-liqueurs" class="hover:text-darkText mb-2 inline-block"
							>Vermouth & Liquers</a
						>
						<a href="/full-menu#sct" class="hover:text-darkText mb-2 inline-block"
							>Specialty Coffee & Tea</a
						>
					</div>
				{:else}
					<button class="hover:text-darkText mt-4 text-left" onclick={toggleBar}>Bar</button>
				{/if}

				{#if showWine}
					<button class="text-darkText mt-4 text-left" onclick={toggleWine}>Wine</button>
					<div
						transition:slide={{
							duration: 250,
							easing: quintInOut
						}}
						class="flex flex-col text-xl"
					>
						<a href="/full-menu#featured-wine" class="hover:text-darkText mb-2 inline-block"
							>Featured Wine</a
						>
						<a href="/full-menu#white-wines" class="hover:text-darkText mb-2 inline-block"
							>White Wines</a
						>
						<a href="/full-menu#rose" class="hover:text-darkText mb-2 inline-block">Rosé</a>
						<a href="/full-menu#red-wines" class="hover:text-darkText mb-2 inline-block"
							>Red Wines</a
						>
					</div>
				{:else}
					<button class="hover:text-darkText mt-4 text-left" onclick={toggleWine}>Wine</button>
				{/if}
			</div>
		</div>
	{/if}

	<div 
	id="container" 
  bind:this={container} 
  class="h-screen overflow-y-auto overflow-x-hidden scroll-container">
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
				isScrolling={isScrolling}
				container={container}
				class="snap-start snap-normal"
			/>
		{/each}
	</div>
	
</section>
