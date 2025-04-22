<script>
    import {ChevronDownOutline} from 'flowbite-svelte-icons';
    import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling'
    
    let {thisRef, goTo, title, pText, btnText, link, image, button = true, arrow = true} = $props();
</script>

<section use:scrollRef={thisRef} class="relative box-content justify-items-center font-serif">

    <img src="{image}" class="w-full h-svh brightness-30" alt=""/>
  
    <div class="absolute top-1/2 text-center w-full text-[#E0B87A]">
      <h1 class="text-8xl">{title}</h1>
      <p class="text-2xl mb-8">{pText}</p>

      {#if button}
      <a href="{link}" class="text-2xl border-2 border-[#E0B87A] p-2 px-16 hover:font-bold">
        {btnText}
      </a>
      {/if}
      
      {#if arrow}
      <div use:scrollTo={goTo}>
        <ChevronDownOutline class="w-20 h-20 m-auto text-[#E0B87A]" />
      </div>
      {/if}
      
    </div>
  </section>