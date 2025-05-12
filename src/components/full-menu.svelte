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
		if (showTOC === false){
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
	class="z-50 fixed w-screen h-[calc(100vh-64px)] flex flex-col md:hidden items-center justify-center bg-black/50">
		<div class="bg-tertiary border-2 w-4/5 h-fit border-primary flex flex-col p-8 items-start">
			<button onclick={toggleSpice} class="text-lightText hover:text-darkText self-end">
				<span class="material-icons md-24">close</span>
			</button>
		
			<div class="inline-flex items-center my-4">
				<span class="font-semibold text-[#D08111] text-3xl ml-1 mr-2">GF</span>
				<p class="font-DMSans text-darkText text-xl">
					- Gluten Free</p>
			</div>
			<div class="inline-flex items-center my-4">
				<img src="/spiceMild.svg" alt="Mild Spice" class="inline-block h-12 w-12"/>
				<p class="font-DMSans text-darkText text-xl">- Very Mild</p>
			</div>
			
			<div class="inline-flex items-center my-4">
				<img src="/spiceMedium.svg" alt="Mild Spice" class="inline-block h-12 w-12"/>
				<p class="font-DMSans text-darkText text-xl">- Mild</p>
			</div>
			<div class="inline-flex items-center my-4">
				<img src="/spiceHot.svg" alt="Mild Spice" class="inline-block h-12 w-12"/>
				<p class="font-DMSans text-darkText text-xl">- Hot</p>
			</div>
			<div class="inline-flex items-center my-4">
				<img src="/spiceVeryHot.svg" alt="Mild Spice" class="inline-block h-12 w-12"/>
				<p class="font-DMSans text-darkText text-xl">- Very Hot</p>
			</div>
		</div>


	</div>
	{:else}
	<button class="z-20 fixed bottom-2 left-2 md:hidden" onclick={toggleSpice}>
		<img src="spiceShow.svg" class="w-8 h-8" alt="Open Spice Index" />
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
	class="z-50 fixed {showTOC ? 'w-53/128' : 'w-1/2'} h-[calc(100vh-64px)] right-0 flex-col hidden md:flex items-center justify-center overscroll-contain">
		<div class="bg-tertiary border-2 min-w-fit w-2/5 h-fit border-primary flex flex-col p-8 items-start">
			<button onclick={toggleSpice} class="text-lightText hover:text-darkText self-end">
				<span class="material-icons md-24">close</span>
			</button>
		
			<div class="inline-flex items-center my-4">
				<span class="font-semibold text-[#D08111] text-3xl xl:text-5xl ml-1 mr-2">GF</span>
				<p class="font-DMSans text-darkText lg:text-xl xl:text-2xl whitespace-nowrap">
					- Gluten Free</p>
			</div>
			<div class="inline-flex items-center my-4">
				<img src="/spiceMild.svg" alt="Mild Spice" class="inline-block h-12 w-12 xl:h-16 xl:w-16"/>
				<p class="font-DMSans text-darkText lg:text-xl xl:text-2xl whitespace-nowrap">- Very Mild</p>
			</div>
			
			<div class="inline-flex items-center my-4">
				<img src="/spiceMedium.svg" alt="Mild Spice" class="inline-block h-12 w-12 xl:h-16 xl:w-16"/>
				<p class="font-DMSans text-darkText lg:text-xl xl:text-2xl">- Mild</p>
			</div>
			<div class="inline-flex items-center my-4">
				<img src="/spiceHot.svg" alt="Mild Spice" class="inline-block h-12 w-12 xl:h-16 xl:w-16"/>
				<p class="font-DMSans text-darkText lg:text-xl xl:text-2xl">- Hot</p>
			</div>
			<div class="inline-flex items-center my-4">
				<img src="/spiceVeryHot.svg" alt="Mild Spice" class="inline-block h-12 w-12 xl:h-16 xl:w-16"/>
				<p class="font-DMSans text-darkText lg:text-xl xl:text-2xl whitespace-nowrap">- Very Hot</p>
			</div>
		</div>


	</div>
	{:else}
	<button class="z-20 fixed bottom-2 left-2 xl:bottom-4 xl:left-4 md:flex hidden" onclick={toggleSpice}>
		<img src="spiceShow.svg" class="w-8 h-8 xl:h-16 xl:w-16" alt="Open Spice Index" />
	</button>
	{/if}


	<div class="absolute z-30 hidden lg:flex w-fit justify-between ml-2  ">
		{#if showTOC}
			<!-- <button onclick={toggleTOC} class:active={showTOC} class="text-lightText hover:text-darkText">
				<span class="material-icons md-36">keyboard_arrow_left</span>
			</button> -->
		{:else}
			<button onclick={toggleTOC} class="text-lightText hover:text-darkText mt-[46vh]">
				<span class="material-icons md-36">keyboard_arrow_right</span>
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
			class="font-DMSans text-lightText left-0 hidden lg:flex h-[calc(100vh-16px)]  w-1/4 items-center pl-6 text-3xl  "
		>
			<div class=" flex flex-col border-r border-r-[#9B9893] pr-4 min-w-fit">
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

						<a href="/full-menu#rice" class="hover:text-darkText mb-2 inline-block">Rice</a>
						<a href="/full-menu#specialties" class="hover:text-darkText mb-2 inline-block"
							>Specialties</a
						>
						<a href="/full-menu#desserts" class="hover:text-darkText mb-2 inline-block">Desserts</a>
						<a href="/full-menu#combinations" class="hover:text-darkText mb-2 inline-block"
							>Combinations</a
						>
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
						<a href="/full-menu#happy-hour" class="hover:text-darkText mb-2 inline-block"
							>Happy Hour Menu</a
						>
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

						<a href="/full-menu#beer" class="hover:text-darkText mb-2 inline-block">Beer</a>

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

			<button onclick={toggleTOC} class:active={showTOC} class="text-lightText hover:text-darkText w-fit mt-[-2vh] z-10  ">
				<span class="material-icons md-36">keyboard_arrow_left</span>
			</button>
		</div>
	{/if}

	<div class="fixed z-30 lg:hidden w-fit justify-between mt-[46vh]">
		{#if showTOC}
			<button onclick={toggleTOC} class:active={showTOC} class="text-lightText hover:text-darkText fixed">
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
			class="font-DMSans text-lightText bg-tertiary lg:hidden flex flex-auto flex-col text-3xl 
			fixed z-20 w-full h-[calc(100vh-16px)] items-center justify-center"
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
			
			<div class="flex flex-col w-full h-full items-center justify-center">
				<div 
					
					class="scroll-toc flex flex-col w-3/4 max-h-[100vh] overflow-y-auto "
				>
					<!-- "Back to top" anchor for scrolling to top -->
					<!-- <div id="toc-top"></div> -->
					
					<button class={showDinner ? "text-darkText text-left" : "hover:text-darkText text-left"} onclick={toggleDinner}>
						Dinner
					</button>
					
					{#if showDinner}
						<div
							transition:slide={{
								duration: 250,
								easing: quintInOut
							}}
							class="flex flex-col text-lg"
						>
							<a href="/full-menu#soups" class="hover:text-darkText mb-2 inline-block" onclick={toggleTOC}>Soups</a>
							<a href="/full-menu#appetizers" class="hover:text-darkText mb-2 inline-block" onclick={toggleTOC}
								>Appetizers</a
							>
							<a href="/full-menu#salad" class="hover:text-darkText mb-2 inline-block" onclick={toggleTOC}>Salad</a>
							<a href="/full-menu#curry" class="hover:text-darkText mb-2 inline-block" onclick={toggleTOC}>Curry</a>
							<a href="/full-menu#stir-fried" class="hover:text-darkText mb-2 inline-block" onclick={toggleTOC}
								>Stir Fried</a
							>
							<a href="/full-menu#noodles" class="hover:text-darkText mb-2 inline-block" onclick={toggleTOC}>Noodles</a>
							<a href="/full-menu#vegetables" class="hover:text-darkText mb-2 inline-block" onclick={toggleTOC}
								>Vegetables</a
							>

							<a href="/full-menu#rice" class="hover:text-darkText mb-2 inline-block" onclick={toggleTOC}>Rice</a>
							<a href="/full-menu#specialties" class="hover:text-darkText mb-2 inline-block" onclick={toggleTOC}
								>Specialties</a
							>
							<a href="/full-menu#desserts" class="hover:text-darkText mb-2 inline-block" onclick={toggleTOC}>Desserts</a>
							<a href="/full-menu#combinations" class="hover:text-darkText mb-2 inline-block" onclick={toggleTOC}
								>Combinations</a
							>
						</div>
					{/if}

					<button class={showHH ? "text-darkText mt-4 text-left" : "hover:text-darkText mt-4 text-left"} onclick={toggleHH}>
						Happy Hour
					</button>
					
					{#if showHH}
						<div
							transition:slide={{
								duration: 250,
								easing: quintInOut
							}}
							class="flex flex-col text-xl"
						>
							<a href="/full-menu#happy-hour" class="hover:text-darkText mb-2 inline-block" onclick={toggleTOC}
								>Happy Hour Menu</a
							>
						</div>
					{/if}

					<button class={showBar ? "text-darkText mt-4 text-left" : "hover:text-darkText mt-4 text-left"} onclick={toggleBar}>
						Bar
					</button>
					
					{#if showBar}
						<div
							transition:slide={{
								duration: 250,
								easing: quintInOut
							}}
							class="flex flex-col text-xl"
						>
							<a href="/full-menu#ctsd" class="hover:text-darkText mb-2 inline-block" onclick={toggleTOC}
								>Coffee, Tea & Soft Drinks</a
							>

							<a href="/full-menu#non-spirited" class="hover:text-darkText mb-2 inline-block" onclick={toggleTOC}
								>Non-Spirited</a
							>
							<a href="/full-menu#signature-cocktails" class="hover:text-darkText mb-2 inline-block" onclick={toggleTOC}
								>Signature Cocktails</a
							>
							<a href="/full-menu#classic-cocktails" class="hover:text-darkText mb-2 inline-block" onclick={toggleTOC}
								>Classic Cocktails</a
							>

							<a href="/full-menu#beer" class="hover:text-darkText mb-2 inline-block" onclick={toggleTOC}>Beer</a>

							<a href="/full-menu#cider" class="hover:text-darkText mb-2 inline-block" onclick={toggleTOC}>Cider</a>
							<a href="/full-menu#vodka" class="hover:text-darkText mb-2 inline-block" onclick={toggleTOC}>Vodka</a>
							<a href="/full-menu#gin" class="hover:text-darkText mb-2 inline-block" onclick={toggleTOC}>Gin</a>
							<a href="/full-menu#rum" class="hover:text-darkText mb-2 inline-block" onclick={toggleTOC}>Rum</a>
							<a href="/full-menu#tequila" class="hover:text-darkText mb-2 inline-block" onclick={toggleTOC}>Tequila</a>
							<a href="/full-menu#whisky" class="hover:text-darkText mb-2 inline-block" onclick={toggleTOC}>Whisky</a>
							<a href="/full-menu#scotch" class="hover:text-darkText mb-2 inline-block" onclick={toggleTOC}>Scotch</a>
							<a href="/full-menu#brandy" class="hover:text-darkText mb-2 inline-block" onclick={toggleTOC}>Brandy</a>
							<a href="/full-menu#aperitif-digestif" class="hover:text-darkText mb-2 inline-block" onclick={toggleTOC}
								>Aperitif & Digestif</a
							>
							<a href="/full-menu#vermouth-liqueurs" class="hover:text-darkText mb-2 inline-block" onclick={toggleTOC}
								>Vermouth & Liquers</a
							>
							<a href="/full-menu#sct" class="hover:text-darkText mb-2 inline-block" onclick={toggleTOC}
								>Specialty Coffee & Tea</a
							>
						</div>
					{/if}

					<button class={showWine ? "text-darkText mt-4 text-left" : "hover:text-darkText mt-4 text-left"} onclick={toggleWine}>
						Wine
					</button>
					
					{#if showWine}
						<div
							transition:slide={{
								duration: 250,
								easing: quintInOut
							}}
							class="flex flex-col text-xl"
						>
							<a href="/full-menu#featured-wine" class="hover:text-darkText mb-2 inline-block" onclick={toggleTOC}
								>Featured Wine</a
							>
							<a href="/full-menu#white-wines" class="hover:text-darkText mb-2 inline-block" onclick={toggleTOC}
								>White Wines</a
							>
							<a href="/full-menu#rose" class="hover:text-darkText mb-2 inline-block" onclick={toggleTOC}>Rosé</a>
							<a href="/full-menu#red-wines" class="hover:text-darkText mb-2 inline-block" onclick={toggleTOC}
								>Red Wines</a
							>
						</div>
					{/if}
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
			/>
		{/each}
	</div>
</section>