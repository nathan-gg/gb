<script>
    import {ChevronDownOutline} from 'flowbite-svelte-icons';
    import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling'
    import { slide } from 'svelte/transition';
    import { fade } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
    
    let {title, thaiTitle, image} = $props();

    let showDinner = $state(false);
    let showBar = $state(false);
    let showWine = $state(false);
    let showHH = $state(false);

    function toggleDinner() {
		showDinner = !showDinner
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
</script>

<section class="relative flex h-fit">
	<div class="flex w-6/12 flex-auto flex-col bg-tertiary font-serif">
		<div class="m-48 mt-12 flex flex-col font-instrument">
			<h1 class="text-darkText mt-24 text-6xl">{title}</h1>
			<h1 class="text-lightText mb-12 text-4xl">{thaiTitle}</h1>

            <div class="font-DMSans text-3xl flex flex-col text-lightText">
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
						<a href="/full-menu#desserts" class="hover:text-darkText mb-2 inline-block">Desserts</a>
						<a href="/full-menu#specialties" class="hover:text-darkText mb-2 inline-block">Specialties</a>
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
	</div>

	<div class="w-6/12 flex-auto">
        <img src='/webp/menuMain.webp' class="h-full object-cover" alt="" />
	</div>
</section>
