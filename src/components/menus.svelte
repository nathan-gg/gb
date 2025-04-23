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
                    <a href="/fullmenu#specialties" class="hover:text-darkText">Specialties</a>
                    <a href="/fullmenu#soups" class="hover:text-darkText">Soups</a>
                    <a href="/fullmenu#appetizers" class="hover:text-darkText">Appetizers</a>
                    <a href="/fullmenu#salad" class="hover:text-darkText">Salad</a>
                    <a href="/fullmenu#curry" class="hover:text-darkText">Curry</a>
                    <a href="/fullmenu#noodles" class="hover:text-darkText">Noodles</a>
                    <a href="/fullmenu#vegetables" class="hover:text-darkText">Vegetables</a>
                    <a href="/fullmenu#stir-fried" class="hover:text-darkText">Stir Fried</a>
                    <a href="/fullmenu#fried-rice" class="hover:text-darkText">Fried Rice</a>
                    <a href="/fullmenu#desserts" class="hover:text-darkText">Desserts</a>

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
                    <a href="/fullmenu#ctsd" class="hover:text-darkText">Coffee, Tea & Soft Drinks</a>
                    <a href="/fullmenu#drinks" class="hover:text-darkText">Drinks</a>
                    <a href="/fullmenu#non-spirited" class="hover:text-darkText">Non-Spirited</a>
                    <a href="/fullmenu#cocktails" class="hover:text-darkText">Cocktails</a>
                    <a href="/fullmenu#signature-cocktails" class="hover:text-darkText">Signature Cocktails</a>
                    <a href="/fullmenu#classic-cocktails" class="hover:text-darkText">Classic Cocktails</a>
                    <a href="/fullmenu#draught-beer" class="hover:text-darkText">Draught Beer</a>
                    <a href="/fullmenu#domestic-beer" class="hover:text-darkText">Domestic Beer</a>
                    <a href="/fullmenu#imported-beer" class="hover:text-darkText">Imported Beer</a>
                    <a href="/fullmenu#cider" class="hover:text-darkText">Cider</a>
                    <a href="/fullmenu#vodka" class="hover:text-darkText">Vodka</a>
                    <a href="/fullmenu#gin" class="hover:text-darkText">Gin</a>
                    <a href="/fullmenu#rum" class="hover:text-darkText">Rum</a>
                    <a href="/fullmenu#tequila" class="hover:text-darkText">Tequila</a>
                    <a href="/fullmenu#whiskey" class="hover:text-darkText">Whisk(e)y</a>
                    <a href="/fullmenu#scotch" class="hover:text-darkText">Scotch</a>
                    <a href="/fullmenu#brandy" class="hover:text-darkText">Brandy</a>
                    <a href="/fullmenu#aperitif-digestif" class="hover:text-darkText">Aperitif & Digestif</a>
                    <a href="/fullmenu#vermouth-liquers" class="hover:text-darkText">Vermouth & Liquers</a>
                    <a href="/fullmenu#sct" class="hover:text-darkText">Specialty Coffee & Tea</a>
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
                    <a href="/fullmenu#featured-wine" class="hover:text-darkText">Featured Wine</a>
                    <a href="/fullmenu#white-wines" class="hover:text-darkText">White Wines</a>
                    <a href="/fullmenu#rose" class="hover:text-darkText">Rosé</a>
                    <a href="/fullmenu#red-wines" class="hover:text-darkText">Red Wines</a>
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
                    <a href="/fullmenu#food-hh" class="hover:text-darkText">Food</a>
                    <a href="/fullmenu#draught-beer-hh" class="hover:text-darkText">Draught Beer</a>
                    <a href="/fullmenu#highballs-hh" class="hover:text-darkText">High Balls</a>
                    <a href="/fullmenu#specialties-hh" class="hover:text-darkText">Specialties</a>
                    <a href="/fullmenu#featured-cocktails-hh" class="hover:text-darkText">Featured Cocktails</a>
                    <a href="/fullmenu#wine-hh" class="hover:text-darkText">Wine</a>
                </div>
                {/if}
			</div>

		</div>
	</div>

	<div class="w-6/12 flex-auto">
        <img src='/webp/menuMain.webp' class="h-full object-cover" alt="" />
	</div>
</section>
