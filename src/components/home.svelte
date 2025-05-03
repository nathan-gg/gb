<script>
	import { scrollTo, scrollRef, scrollElement, setGlobalOptions } from 'svelte-scrolling';
	import { cubicInOut } from 'svelte/easing';
  
	let {
	  thisRef,
	  goTo,
	  goBack,
	  title,
	  pText,
	  btnText,
	  link,
	  image,
	  button = true,
	  arrow = true,
	  prevArrow = false,
	  firstSection = false,
	  isScrolling = false, // Accept the shared scrolling state
	  container = null, // Accept container reference from parent
	  class: className = '' // Accept additional classes from parent
	} = $props();
	

	
	// Helper functions for programmatic scrolling that use the parent container
	function scrollPrev() {
	  if (goBack) {
		// Use the element's ID or a ref
		const targetElement = document.getElementById(goBack) || 
							  document.querySelector(`[data-scroll-ref="${goBack}"]`);
		
		if (targetElement && container) {
		  // Manual scroll within container
		  container.scrollTo({
			top: targetElement.offsetTop,
			behavior: 'smooth'
		  });
		} else {
		  // Fallback to svelte-scrolling's method
		  scrollElement(goBack);
		}
	  }
	}
  
	function scrollNext() {
	  if (goTo) {
		// Use the element's ID or a ref
		const targetElement = document.getElementById(goTo) || 
							  document.querySelector(`[data-scroll-ref="${goTo}"]`);
		
		if (targetElement && container) {
		  // Manual scroll within container
		  container.scrollTo({
			top: targetElement.offsetTop,
			behavior: 'smooth'
		  });
		} else {
		  // Fallback to svelte-scrolling's method
		  scrollElement(goTo);
		}
	  }
	}
  </script>
  
  <section
	use:scrollRef={thisRef}

	id={thisRef}
	data-scroll-ref={thisRef}
	class="font-instrument relative flex h-[calc(100vh-4rem)] w-full items-center text-secondary snap-align-start {className}"
  >
	<img src={image} class="absolute inset-0 h-full w-screen object-cover brightness-30" alt="" />
  
	{#if firstSection}
	  {#if prevArrow}
		<button 
		  class="absolute top-1/8 text-center w-screen hover:cursor-pointer" 
		  onclick={scrollPrev}
		>
		  <span class="material-icons md-48 mt-0 mb-12 sm:mt-16 md:mt-8 md:mb-24 lg:mt-0 lg:mb-36 xl:mb-48 top-1/4 sm:top-1/3">
			keyboard_arrow_up
		  </span>
		</button>
	  {/if}
	  
	  <div class="relative flex w-screen flex-col text-center">
		<h1 class="px-4 text-6xl xl:text-8xl">{title}</h1>
		<p class="font-DMSans mb-8 text-2xl font-extralight">{pText}</p>
  
		{#if button}
		  <a
			href={link}
			class="border-secondary font-DMSans w-fit self-center rounded-md border-2 p-2 text-lg hover:font-bold sm:px-16 sm:text-2xl"
		  >
			{btnText}
		  </a>
		{/if}
	  </div>
  
	  {#if arrow}
		<button 
		  class="absolute bottom-1/8 text-center w-screen hover:cursor-pointer" 
		  onclick={scrollNext}
		>
		  <span class="material-icons md-48 mt-12 md:mt-24 lg:mt-36 xl:mt-48 bottom-1/4 sm:bottom-1/3">
			keyboard_arrow_down
		  </span>
		</button>
	  {/if}
	{:else}
	  {#if prevArrow}
		<button 
		  class="absolute top-1/8 text-center w-screen hover:cursor-pointer" 
		  onclick={scrollPrev}
		>
		  <span class="material-icons md-48 mt-0 mb-12 sm:mt-16 md:mt-8 md:mb-24 lg:mt-0 lg:mb-36 xl:mb-48">
			keyboard_arrow_up
		  </span>
		</button>
	  {/if}
	  
	  <div class="relative flex w-screen flex-col text-center">
		<h1 class="px-4 text-6xl xl:text-8xl">{title}</h1>
		<p class="font-DMSans mb-8 text-2xl font-extralight">{pText}</p>
  
		{#if button}
		  <a
			href={link}
			class="border-secondary font-DMSans w-fit self-center rounded-md border-2 p-2 text-lg hover:font-bold sm:px-16 sm:text-2xl"
		  >
			{btnText}
		  </a>
		{/if}
	  </div>
  
	  {#if arrow}
		<button 
		  class="absolute bottom-1/8 text-center w-screen hover:cursor-pointer" 
		  onclick={scrollNext}
		>
		  <span class="material-icons md-48 mt-12 md:mt-24 lg:mt-36 xl:mt-48">
			keyboard_arrow_down
		  </span>
		</button>
	  {/if}
	{/if}
  </section>