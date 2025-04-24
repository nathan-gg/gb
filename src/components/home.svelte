<script>
    import {ChevronDownOutline} from 'flowbite-svelte-icons';
    import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling'
    
    let {thisRef, goTo, title, pText, btnText, link, image, button = true, arrow = true} = $props();
</script>

<section use:scrollRef={thisRef} class="relative box-content justify-items-center font-instrument">

    <img src="{image}" class=" brightness-30 w-screen object-cover min-h-screen" alt=""/>

    
  
    <div class="absolute top-1/4 sm:top-1/2 text-center w-full text-secondary">

      

      <h1 class="text-6xl px-4">{title}</h1>
      <p class="text-2xl mb-8 font-DMSans font-extralight">{pText}</p>

      {#if button}
      <a href="{link}" class=" text-lg sm:text-2xl border-2 border-secondary rounded-md p-2  sm:px-16 font-DMSans hover:font-bold">
        {btnText}
      </a>
      {/if}
      
      {#if arrow}
      <div use:scrollTo={goTo}>
        <span class="material-icons md-36 mt-16">keyboard_arrow_down</span>
      </div>
      {/if}
      
    </div>
  </section>