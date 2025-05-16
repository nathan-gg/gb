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
		firstSection = false,
		isScrolling = false, // Accept the shared scrolling state
		container = null, // Accept container reference from parent
		class: className = '' // Accept additional classes from parent
	} = $props();

	// Add an offset variable that you can adjust
	const scrollOffset = 64; // Negative value moves up, positive value moves down

	function scrollPrev() {
		if (previousSection) {
			// Use the element's ID or a ref
			const targetElement =
				document.getElementById(previousSection) ||
				document.querySelector(`[data-scroll-ref="${previousSection}"]`);

			if (targetElement && container) {
				// Manual scroll within container with offset
				container.scrollTo({
					top: targetElement.offsetTop + scrollOffset, // Apply the offset here
					behavior: 'smooth'
				});
			} else {
				// Fallback to svelte-scrolling's method
				// Note: svelte-scrolling may not support offsets directly
				scrollElement(previousSection);
			}
		}
	}

	function scrollNext() {
		if (nextSection) {
			// Use the element's ID or a ref
			const targetElement =
				document.getElementById(nextSection) ||
				document.querySelector(`[data-scroll-ref="${nextSection}"]`);

			if (targetElement && container) {
				// Manual scroll within container with offset
				container.scrollTo({
					top: targetElement.offsetTop + scrollOffset, // Apply the offset here
					behavior: 'smooth'
				});
			} else {
				// Fallback to svelte-scrolling's method
				scrollElement(nextSection);
			}
		}
	}
</script>

<section
	use:scrollRef={thisRef}
	id={thisRef}
	data-scroll-ref={thisRef}
	class="font-instrument text-secondary snap-align-start relative flex h-[calc(100vh-4rem)] w-full items-center {className}"
>
	{#if mobileImage}
		<img
			src={mobileImage}
			class="absolute inset-0 h-full w-screen object-cover brightness-30 lg:hidden"
			alt=""
		/>
		<img
			src={image}
			class="absolute inset-0 hidden h-full w-screen object-cover brightness-30 lg:flex"
			alt=""
		/>
	{:else}
		<img src={image} class="absolute inset-0 h-full w-screen object-cover brightness-30" alt="" />
	{/if}

	{#if firstSection}
		<div class="relative flex w-screen flex-col items-center text-center">
			<h1 class="px-4 text-6xl xl:text-8xl">{title}</h1>
			<p class="font-DMSans mb-8 w-1/2 text-xl font-extralight md:w-2/3 md:text-4xl xl:w-1/3">
				{pText}
			</p>
		</div>

		{#if arrow}
			<button
				class="absolute bottom-1/8 w-screen text-center hover:cursor-pointer"
				onclick={scrollNext}
			>
				<span class="material-icons md-48"> keyboard_arrow_down </span>
			</button>
		{/if}
	{:else}
		{#if prevArrow}
			<button
				class="absolute top-1/8 w-screen text-center hover:cursor-pointer"
				onclick={scrollPrev}
			>
				<span class="material-icons md-48"> keyboard_arrow_up </span>
			</button>
		{/if}

		<div class="relative flex w-screen flex-col items-center text-center">
			<h1 class="px-4 text-6xl md:text-8xl">{title}</h1>
			<p class="font-DMSans mb-8 w-1/2 text-xl font-extralight md:w-2/3 md:text-4xl xl:w-1/3">
				{pText}
			</p>

			{#if button}
				<a
					href={link}
					class="border-secondary font-DMSans hover:bg-secondary hover:text-primary w-fit self-center rounded-md border-2 p-2 text-lg sm:px-16 sm:text-2xl"
				>
					{btnText}
				</a>
			{/if}
		</div>

		{#if arrow}
			<button
				class="absolute bottom-1/8 h-fit w-screen text-center hover:cursor-pointer"
				onclick={scrollNext}
			>
				<span class="material-icons md-48"> keyboard_arrow_down </span>
			</button>
		{/if}
	{/if}
</section>
