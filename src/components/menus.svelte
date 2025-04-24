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
		<div class="m-48 mt-12 flex flex-col">
			<h1 class="text-darkText mt-24 text-6xl">{title}</h1>
			<h1 class="text-lightText mb-12 text-4xl">{thaiTitle}</h1>

            <div class="font-DMSans text-3xl flex flex-col text-lightText">
                <button class="hover:text-darkText  text-left" onclick={toggleDinner}>Dinner</button>
                {#if showDinner}
                <div 
                transition:slide={{
                    duration: 500,
                    easing: quintInOut,
                }}
                class="text-xl flex flex-col">
                    <a href="/full-menu#specialties" class="hover:text-darkText">Specialties</a>
                    <a href="/full-menu#soups" class="hover:text-darkText">Soups</a>
                    <a href="/full-menu#appetizers" class="hover:text-darkText">Appetizers</a>
                    <a href="/full-menu#salad" class="hover:text-darkText">Salad</a>
                    <a href="/full-menu#curry" class="hover:text-darkText">Curry</a>
                    <a href="/full-menu#noodles" class="hover:text-darkText">Noodles</a>
                    <a href="/full-menu#vegetables" class="hover:text-darkText">Vegetables</a>
                    <a href="/full-menu#stir-fried" class="hover:text-darkText">Stir Fried</a>
                    <a href="/full-menu#fried-rice" class="hover:text-darkText">Fried Rice</a>
                    <a href="/full-menu#desserts" class="hover:text-darkText">Desserts</a>

                </div>
                {/if}
                <button class="hover:text-darkText text-left" onclick={toggleBar}>Bar</button>
                {#if showBar}
                <div 
                transition:slide={{
                    duration: 500,
                    easing: quintInOut,
                }}
                class="text-xl flex flex-col">
                    <a href="/full-menu#ctsd" class="hover:text-darkText">Coffee, Tea & Soft Drinks</a>
                    <a href="/full-menu#drinks" class="hover:text-darkText">Drinks</a>
                    <a href="/full-menu#non-spirited" class="hover:text-darkText">Non-Spirited</a>
                    <a href="/full-menu#cocktails" class="hover:text-darkText">Cocktails</a>
                    <a href="/full-menu#signature-cocktails" class="hover:text-darkText">Signature Cocktails</a>
                    <a href="/full-menu#classic-cocktails" class="hover:text-darkText">Classic Cocktails</a>
                    <a href="/full-menu#draught-beer" class="hover:text-darkText">Draught Beer</a>
                    <a href="/full-menu#domestic-beer" class="hover:text-darkText">Domestic Beer</a>
                    <a href="/full-menu#imported-beer" class="hover:text-darkText">Imported Beer</a>
                    <a href="/full-menu#cider" class="hover:text-darkText">Cider</a>
                    <a href="/full-menu#vodka" class="hover:text-darkText">Vodka</a>
                    <a href="/full-menu#gin" class="hover:text-darkText">Gin</a>
                    <a href="/full-menu#rum" class="hover:text-darkText">Rum</a>
                    <a href="/full-menu#tequila" class="hover:text-darkText">Tequila</a>
                    <a href="/full-menu#whiskey" class="hover:text-darkText">Whisk(e)y</a>
                    <a href="/full-menu#scotch" class="hover:text-darkText">Scotch</a>
                    <a href="/full-menu#brandy" class="hover:text-darkText">Brandy</a>
                    <a href="/full-menu#aperitif-digestif" class="hover:text-darkText">Aperitif & Digestif</a>
                    <a href="/full-menu#vermouth-liquers" class="hover:text-darkText">Vermouth & Liquers</a>
                    <a href="/full-menu#sct" class="hover:text-darkText">Specialty Coffee & Tea</a>
                </div>
                {/if}
                <button class="hover:text-darkText text-left" onclick={toggleWine}>Wine</button>
                {#if showWine}
                <div 
                transition:slide={{
                    duration: 500,
                    easing: quintInOut,
                }}
                class="text-xl flex flex-col">
                    <a href="/full-menu#featured-wine" class="hover:text-darkText">Featured Wine</a>
                    <a href="/full-menu#white-wines" class="hover:text-darkText">White Wines</a>
                    <a href="/full-menu#rose" class="hover:text-darkText">Rosé</a>
                    <a href="/full-menu#red-wines" class="hover:text-darkText">Red Wines</a>
                </div>
                {/if}
                <button class="hover:text-darkText text-left" onclick={toggleHH}>Happy Hour</button>
                {#if showHH}
                <div 
                transition:slide={{
                    duration: 500,
                    easing: quintInOut,
                }}
                class="text-xl flex flex-col">
                    <a href="/full-menu#food-hh" class="hover:text-darkText">Food</a>
                    <a href="/full-menu#draught-beer-hh" class="hover:text-darkText">Draught Beer</a>
                    <a href="/full-menu#highballs-hh" class="hover:text-darkText">High Balls</a>
                    <a href="/full-menu#specialties-hh" class="hover:text-darkText">Specialties</a>
                    <a href="/full-menu#featured-cocktails-hh" class="hover:text-darkText">Featured Cocktails</a>
                    <a href="/full-menu#wine-hh" class="hover:text-darkText">Wine</a>
                </div>
                {/if}
			</div>

		</div>
	</div>

	<div class="w-6/12 flex-auto">
        <img src='/webp/menuMain.webp' class="h-full object-cover" alt="" />
	</div>
</section>
