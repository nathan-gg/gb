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
		mobileImage,
		button = true,
		arrow = true,
		prevArrow = false,
		backToTop = false,
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
					top: targetElement.offsetTop + 64,
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
	class="scroll-container font-instrument text-secondary snap-align-start relative flex h-[calc(100vh-4rem)] w-full items-center {className}"
>
	{#if mobileImage}
		<img
			src={mobileImage}
			class="absolute inset-0 h-full w-screen object-cover brightness-30 lg:hidden"
			alt=""
		/>
		<div class="absolute inset-0 h-full w-screen lg:flex">
			<div
				class=" absolute inset-0 h-full w-screen bg-gradient-to-r from-[rgba(0,0,0,.8)] to-transparent"
			></div>
			<img src={image} class="absolute inset-0 z-[-10] h-full w-screen object-cover" alt="" />
		</div>
	{:else}
		<div class="absolute inset-0 h-full w-screen">
			<div
				class=" absolute inset-0 h-full w-screen bg-gradient-to-r from-[rgba(0,0,0,.8)] to-transparent"
			></div>
			<img src={image} class="absolute inset-0 z-[-10] h-full w-screen object-cover" alt="" />
		</div>
	{/if}

	{#if firstSection}
		<section class="grid h-[calc(100vh-4rem)] w-screen grid-cols-3 grid-rows-3">
			<div
				class="relative col-span-2 col-start-1 row-span-1 row-start-3 ml-24 flex flex-col items-start self-end pb-20 text-left"
			>
				<h1 class="mb-4 text-6xl xl:text-[96px] xl:leading-[96px]">{title}</h1>
				<p
					class="font-MonaSans w-1/2 text-xl font-medium font-medium text-white md:text-2xl md:leading-[32px]"
				>
					{pText}
				</p>
			</div>

			{#if arrow}
				<button
					class=" relative col-span-1 col-start-2 row-span-1 row-start-3 w-fit place-self-center self-end pb-16 text-center opacity-50 transition-opacity duration-100 hover:cursor-pointer hover:opacity-100"
					onclick={scrollNext}
				>
					<span class="material-icons md-48"> keyboard_arrow_down </span>
				</button>
			{/if}
		</section>
	{:else}
		<section class="grid h-[calc(100vh-4rem)] w-screen grid-cols-3 grid-rows-3">
			{#if prevArrow}
				<button
					class=" relative col-span-1 col-start-2 row-span-1 row-start-1 w-fit place-self-center self-end pt-16 text-center opacity-50 transition-opacity duration-100 hover:cursor-pointer hover:opacity-100"
					onclick={scrollPrev}
				>
					<span class="material-icons md-48"> keyboard_arrow_up </span>
				</button>
			{/if}

			<div
				class="relative col-span-2 col-start-1 row-span-1 row-start-3 ml-24 flex flex-col items-start self-end pb-20 text-left"
			>
				<h1 class="mb-2 text-6xl xl:text-[96px] xl:leading-[96px]">{title}</h1>
				<p
					class="font-MonaSans mb-6 w-1/2 text-xl font-medium text-white md:text-2xl md:leading-[32px]"
				>
					{pText}
				</p>
				{#if button}
					<a
						href={link}
						class="border-secondary font-MonaSans hover:bg-secondary hover:text-primary w-fit self-start rounded-md border-2 p-2 text-lg font-medium transition-colors duration-100 sm:px-16 sm:text-2xl"
					>
						{btnText}
					</a>
				{/if}
			</div>

			{#if arrow}
				<button
					class=" relative col-span-1 col-start-2 row-span-1 row-start-3 w-fit place-self-center self-end pb-16 text-center opacity-50 transition-opacity duration-100 hover:cursor-pointer hover:opacity-100"
					onclick={scrollNext}
				>
					<span class="material-icons md-48"> keyboard_arrow_down </span>
				</button>
			{/if}

			{#if backToTop}
				<button
					class=" relative col-span-1 col-start-2 row-span-1 row-start-3 w-fit place-self-center self-end pb-16 text-center opacity-50 transition-opacity duration-100 hover:cursor-pointer hover:opacity-100"
					onclick={scrollNext}
				>
					<span class="material-icons md-48"> keyboard_arrow_up </span>
					Back To Top
				</button>
			{/if}
		</section>
	{/if}
</section>
