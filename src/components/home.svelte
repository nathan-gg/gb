<script>
    import {ChevronDownOutline} from 'flowbite-svelte-icons';
    import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling'
    
    let {thisRef, goTo, goBack, title, pText, btnText, link, image, button = true, arrow = true, prevArrow = false} = $props();
</script>

<section use:scrollRef={thisRef} class="relative box-content w-screen justify-items-center font-instrument">

    <img src="{image}" class=" brightness-30 w-screen object-cover" alt=""/>

    
  
    <div class="absolute top-1/4 sm:top-1/6 text-center w-full flex flex-col text-secondary">

      {#if prevArrow}
      <div use:scrollTo={goBack}>
        <span class="material-icons md-48 mt-0 sm:mt-16 md:mt-8 lg:mt-0 mb-12 md:mb-24 lg:mb-36 xl:mb-48">keyboard_arrow_up</span>
      </div>
      {/if}

      <h1 class="text-6xl px-4 xl:text-8xl">{title}</h1>
      <p class="text-2xl mb-8 font-DMSans font-extralight">{pText}</p>

      {#if button}
      <a href="{link}" class=" text-lg sm:text-2xl border-2 border-secondary rounded-md p-2  sm:px-16 font-DMSans hover:font-bold">
        {btnText}
      </a>
      {/if}
      
      {#if arrow}
      <div use:scrollTo={goTo}>
        <span class="material-icons md-48 mt-12 md:mt-24 lg:mt-36 xl:mt-48">keyboard_arrow_down</span>
      </div>
      {/if}
      
    </div>
  </section>