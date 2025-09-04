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
	class=" bg-tertiary relative flex min-h-screen snap-start flex-col sm:flex-row {className}"
>
	<div class="flex sm:hidden">
		<img src={imageMobile} class="w-screen object-cover" alt="" />
	</div>
	<div class=" text-darkText font-instrument flex flex-col items-center justify-center sm:w-1/2">
		{#if prevArrow}
			<div class="mt-6 md:mt-12">
				<button
					onclick={scrollPrev}
					class=" font-DMSans text-lightText hover:text-darkText hover:cursor-pointer"
				>
					<span class="material-icons md-48"> keyboard_arrow_up </span>
				</button>
			</div>
		{/if}
		<div class="mx-8 mt-12 mb-12 flex flex-col sm:mx-16 sm:my-16 md:my-24 xl:mx-52 xl:my-12">
			<h1 class="text-darkText mb-4 text-6xl">{title}</h1>
			<h1 class="text-lightText mb-12 text-4xl">{thaiTitle}</h1>

			<p class="text-darkText font-sans">
				{@html body}
			</p>
		</div>
		{#if arrow}
			<div class="mb-6 md:mb-12">
				<button
					onclick={scrollNext}
					class=" font-DMSans text-lightText hover:text-darkText hover:cursor-pointer"
				>
					<span class="material-icons md-48"> keyboard_arrow_down </span>
				</button>
			</div>
		{/if}

		{#if topArrow}
			<!-- <div class="mb-6 md:mb-12">
				<div
					use:scrollTo={{ ref: goTo, offset: -64 }}
					class=" font-DMSans text-lightText hover:text-darkText hover:cursor-pointer"
				>
					<p>
						{topArrowText}
					</p>
				</div>
			</div> -->
			<div class="mb-6 md:mb-12">
				<button
					onclick={scrollNext}
					class=" font-DMSans text-lightText hover:text-darkText hover:cursor-pointer"
				>
					
					<span class="material-icons md-48"> keyboard_arrow_up </span>
					<p>
						{topArrowText}
					</p>
				</button>
			</div>
		{/if}
	</div>

	<div class="hidden w-1/2 flex-auto sm:flex">
		<img src={image} class="h-full w-full object-cover" alt="" />
	</div>
</section>
