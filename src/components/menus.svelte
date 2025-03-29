<script>
    import {ChevronDownOutline} from 'flowbite-svelte-icons';
    import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling'
    
    let {thisRef, goTo, title, thaiTitle, dishName, dishDesc, price,  arrowText, arrow = true} = $props();
</script>

<section use:scrollRef={thisRef} class="inline-flex h-screen">

    <div class="flex-auto">
        <img src="../wongchunhei_wallpaper.jpg" class="h-full object-cover" alt=""/>
    </div>

    <div class="flex-auto w-6/12 bg-[#E8E3DA] text-[#000000] font-serif">

        <div class="m-24">

        <h1 class="text-[#355128] text-6xl mt-24">{title}</h1>
        <h1 class="text-[#758668] text-4xl mb-24">{thaiTitle}</h1>

        <div class="grid grid-cols-2">

            <div>
                <p class="m-6">
                    {dishName}{price} <br>{dishDesc}
                </p>
            </div>

            <div>
                <p class="m-6">
                    {dishDesc}
                </p>
            </div>

        </div>

        <div class="flex justify-center m-auto w-100">

            {#if arrow}

                <p>
                    {arrowText}
                </p>
                <div use:scrollTo={goTo}>
                    <ChevronDownOutline class="w-20 h-20 m-auto text-[#E0B87A]" />
                </div>
            {/if}

        </div>
        

        </div>

    </div>


</section>