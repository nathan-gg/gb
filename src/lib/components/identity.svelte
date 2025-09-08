<script lang="ts">
	import { scrollTo, scrollRef, scrollElement, setGlobalOptions } from 'svelte-scrolling';
	import { cubicInOut } from 'svelte/easing';

	let {
		thisRef,
		goTo,
		goBack,
		title,
		thaiTitle,
		body,
		arrowText,
		arrow = true,
		prevArrowText,
		prevArrow = false,
		topArrowText,
		topArrow = false,
		image,
		imageMobile,
		firstSection = false,
		isScrolling = false, // Accept the shared scrolling state
		container = null, // Accept container reference from parent
		class: className = '' // Accept additional classes from parent
	} = $props();

	// Helper functions for programmatic scrolling that use the parent container
	function scrollPrev() {
		if (goBack) {
			// Use the element's ID or a ref
			const targetElement =
				document.getElementById(goBack) || document.querySelector(`[data-scroll-ref="${goBack}"]`);

			if (targetElement && container) {
				// Manual scroll within container
				container.scrollTo({
					top: targetElement.offsetTop - 64,
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
			const targetElement =
				document.getElementById(goTo) || document.querySelector(`[data-scroll-ref="${goTo}"]`);

			if (targetElement && container) {
				// Manual scroll within container
				container.scrollTo({
					top: targetElement.offsetTop - 64,
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
	class=" bg-tertiary relative flex min-h-[calc(100vh-4rem)] xl:min-h-screen flex-col xl:flex-row {className}"
>
	<div class="flex xl:hidden">
		<img src={imageMobile} class="w-screen object-cover" alt="" />
	</div>
	<div
		class="text-darkText font-instrument grid grid-cols-3 grid-rows-3 items-start justify-start xl:w-1/2"
	>
		{#if prevArrow}
			<button
				class=" relative col-span-1 col-start-2 row-span-1 row-start-1 w-fit place-self-center self-start text-center opacity-75 transition duration-300 hover:translate-y-[-16px] hover:cursor-pointer hover:opacity-100 xl:pt-8"
				onclick={scrollPrev}
			>
				<span class="material-icons md-48"> keyboard_arrow_up </span>
			</button>
		{/if}
		<div
			class="col-span-3 col-start-1 row-span-3 row-start-1 mx-8 my-12 flex w-3/4 flex-col items-start sm:ml-16 xl:my-24"
		>
			<h1 class="text-darkText mb-1 w-4/5 text-6xl sm:w-full">{title}</h1>
			<h1 class="text-lightText mb-12 text-2xl">{thaiTitle}</h1>

			<p class="text-darkText font-MonaSans">
				{@html body}
			</p>
		</div>
		{#if arrow}
			<button
				class=" relative col-span-1 col-start-2 row-span-1 row-start-3 w-fit place-self-center self-end text-center opacity-75 transition duration-300 hover:translate-y-4 hover:cursor-pointer hover:opacity-100 xl:pb-32"
				onclick={scrollNext}
			>
				<span class="material-icons md-48"> keyboard_arrow_down </span>
			</button>
		{/if}

		{#if topArrow}
			<!-- <div class="mb-6 xl:mb-12">
				<div
					use:scrollTo={{ ref: goTo, offset: -64 }}
					class=" font-MonaSans text-lightText hover:text-darkText hover:cursor-pointer"
				>
					<p>
						{topArrowText}
					</p>
				</div>
			</div> -->
			<button
				class=" relative col-span-1 col-start-2 row-span-1 row-start-3 w-fit place-self-center self-end text-center opacity-75 transition duration-300 hover:translate-y-4 hover:cursor-pointer hover:opacity-100 xl:pb-32"
				onclick={scrollNext}
			>
				<span class="material-icons md-48"> keyboard_arrow_down </span>
			</button>
		{/if}
	</div>

	<div class="hidden w-1/2 flex-auto xl:flex">
		<img src={image} class="h-full w-full object-cover" alt="" />
	</div>
</section>
