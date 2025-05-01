<script>
	import MenuSection from './menu-section.svelte';
	import { menuData } from '../data/menu-data.js';

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

	let showTOC = $state(true);

	function toggleTOC() {
		showTOC = !showTOC;
	}

	// let carouselPositions;
	// let halfContainer;
	// let currentItem;

	// function getCarouselPositions() {
	//   carouselPositions = [];
	//   document.querySelectorAll('#container div').forEach(function(div) {
	//     carouselPositions.push([div.offsetTop, div.offsetTop + div.offsetHeight]); // add to array the positions information
	//   })
	//   halfContainer = document.querySelector('#container').offsetHeight/2;
	// }

	// getCarouselPositions(); // call it once

	// function goCarousel(direction) {

	//   var currentScrollTop = document.querySelector('#container').scrollTop;
	//   var currentScrollBottom = currentScrollTop + document.querySelector('#container').offsetHeight;

	//   if (currentScrollTop === 0 && direction === 'next') {
	//       currentItem = 1;
	//   } else if (currentScrollBottom === document.querySelector('#container').scrollHeight && direction === 'previous') {
	//       console.log('here')
	//       currentItem = carouselPositions.length - 2;
	//   } else {
	//       var currentMiddlePosition = currentScrollTop + halfContainer;
	//       for (var i = 0; i < carouselPositions.length; i++) {
	//         if (currentMiddlePosition > carouselPositions[i][0] && currentMiddlePosition < carouselPositions[i][1]) {
	//           currentItem = i;
	//           if (direction === 'next') {
	//               currentItem++;
	//           } else if (direction === 'previous') {
	//               currentItem--
	//           }
	//         }
	//       }
	//   }

	//   document.getElementById('container').scrollTo({
	//     top: carouselPositions[currentItem][0],
	//     behavior: 'smooth'
	//   });

	// }
	// window.addEventListener('resize', getCarouselPositions);
</script>

<section class="bg-tertiary flex">
	<div class="w-fitjustify-between fixed z-30 flex">
		{#if showTOC}
			<button onclick={toggleTOC} class:active={showTOC} class="text-darkText">
				<!-- <img src="closeMenu.svg" class="h-8" alt="Close Website Directory" /> -->
				Close Table of Contents
			</button>
		{:else}
			<button onclick={toggleTOC} class="text-lightText">
				<!-- <img src="menuBars.svg" class="h-8" alt="Open Website Directory" /> -->
				Open Table of Contents
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
						<a href="/full-menu#specialties" class="hover:text-darkText mb-2 inline-block"
							>Specialties</a
						>
						<a href="/full-menu#soups" class="hover:text-darkText mb-2 inline-block">Soups</a>
						<a href="/full-menu#appetizers" class="hover:text-darkText mb-2 inline-block"
							>Appetizers</a
						>
						<a href="/full-menu#salad" class="hover:text-darkText mb-2 inline-block">Salad</a>
						<a href="/full-menu#curry" class="hover:text-darkText mb-2 inline-block">Curry</a>
						<a href="/full-menu#noodles" class="hover:text-darkText mb-2 inline-block">Noodles</a>
						<a href="/full-menu#vegetables" class="hover:text-darkText mb-2 inline-block"
							>Vegetables</a
						>
						<a href="/full-menu#stir-fried" class="hover:text-darkText mb-2 inline-block"
							>Stir Fried</a
						>
						<a href="/full-menu#fried-rice" class="hover:text-darkText mb-2 inline-block"
							>Fried Rice</a
						>
						<a href="/full-menu#desserts" class="hover:text-darkText mb-2 inline-block">Desserts</a>
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
						<a href="/full-menu#food-hh" class="hover:text-darkText mb-2 inline-block">Food</a>
						<a href="/full-menu#draught-beer-hh" class="hover:text-darkText mb-2 inline-block"
							>Draught Beer</a
						>
						<a href="/full-menu#highballs-hh" class="hover:text-darkText mb-2 inline-block"
							>High Balls</a
						>
						<a href="/full-menu#specialties-hh" class="hover:text-darkText mb-2 inline-block"
							>Specialties</a
						>
						<a href="/full-menu#featured-cocktails-hh" class="hover:text-darkText mb-2 inline-block"
							>Featured Cocktails</a
						>
						<a href="/full-menu#wine-hh" class="hover:text-darkText mb-2 inline-block">Wine</a>
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
						<a href="/full-menu#drinks" class="hover:text-darkText mb-2 inline-block">Drinks</a>
						<a href="/full-menu#non-spirited" class="hover:text-darkText mb-2 inline-block"
							>Non-Spirited</a
						>
						<a href="/full-menu#cocktails" class="hover:text-darkText mb-2 inline-block"
							>Cocktails</a
						>
						<a href="/full-menu#signature-cocktails" class="hover:text-darkText mb-2 inline-block"
							>Signature Cocktails</a
						>
						<a href="/full-menu#classic-cocktails" class="hover:text-darkText mb-2 inline-block"
							>Classic Cocktails</a
						>
						
						<a href="/full-menu#draught-beer" class="hover:text-darkText mb-2 inline-block"
							>Draught Beer</a
						>
						<a href="/full-menu#domestic-beer" class="hover:text-darkText mb-2 inline-block"
							>Domestic Beer</a
						>
						<a href="/full-menu#imported-beer" class="hover:text-darkText mb-2 inline-block"
							>Imported Beer</a
						>
						<a href="/full-menu#cider" class="hover:text-darkText mb-2 inline-block">Cider</a>
						<a href="/full-menu#vodka" class="hover:text-darkText mb-2 inline-block">Vodka</a>
						<a href="/full-menu#gin" class="hover:text-darkText mb-2 inline-block">Gin</a>
						<a href="/full-menu#rum" class="hover:text-darkText mb-2 inline-block">Rum</a>
						<a href="/full-menu#tequila" class="hover:text-darkText mb-2 inline-block">Tequila</a>
						<a href="/full-menu#whiskey" class="hover:text-darkText mb-2 inline-block">Whisk(e)y</a>
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

	<div>
		{#each menuSections as [section, data], index}
			<MenuSection
				id={section}
				title={data.title}
				thaiTitle={data.thaiTitle}
				pCol1={data.pCol1}
				pCol2={data.pCol2}
				pCol3={data.pCol3}
				previousSection={index > 0 ? menuSections[index - 1][0] : ''}
				nextSection={index < menuSections.length - 1 ? menuSections[index + 1][0] : ''}
				prevTitle={index > 0 ? menuSections[index - 1][1].title : ''}
				nextTitle={index < menuSections.length - 1 ? menuSections[index + 1][1].title : ''}
				menuItems={data.items}
				imagePath={data.imagePath || '/webp/careersKitchenHelper.webp'}
				mobilePath={data.mobilePath || '/webp/careersKitchenHelperMobile.webp'}
			/>
		{/each}
	</div>
</section>
