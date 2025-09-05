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
		<div class="gradient-blur bg-gradient-to-r from-[rgba(0,0,0,.9)] to-transparent">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
		<img src={image} class="absolute inset-0 z-[-10] h-full w-screen object-cover" alt="" />
	{:else}
		<!-- <div class="absolute inset-0 grid h-full w-screen grid-cols-10">
			<div
				class="  inset-0 h-full w-full bg-gradient-to-r from-[rgba(0,0,0,.8)] to-transparent col-span-1 col-start-1"
			></div>
			<div
				class="  inset-0 col-span-1 col-start-1 h-full w-full bg-gradient-to-r from-[rgba(0,0,0,1)] to-[rgba(0,0,0,.9)]"
			></div>
			<div
				class="  inset-0 col-span-1 col-start-2 h-full w-full bg-gradient-to-r from-[rgba(0,0,0,.9)] to-[rgba(0,0,0,.8)]"
			></div>
			<div
				class="  inset-0 col-span-1 col-start-3 h-full w-full bg-gradient-to-r from-[rgba(0,0,0,.8)] to-[rgba(0,0,0,.7)]"
			></div>
			<div
				class="  inset-0 col-span-1 col-start-4 h-full w-full bg-gradient-to-r from-[rgba(0,0,0,.7)] to-[rgba(0,0,0,.6)]"
			></div>
			<div
				class="  inset-0 col-span-1 col-start-5 h-full w-full bg-gradient-to-r from-[rgba(0,0,0,.6)] to-transparent"
			></div>
		</div> -->
		<div class="gradient-blur bg-gradient-to-r from-[rgba(0,0,0,.9)] to-transparent">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
		<img src={image} class="absolute inset-0 z-[-10] h-full w-screen object-cover" alt="" />
		<!-- <div
			style="mask: linear-gradient(black, black, transparent);
backdrop-filter: blur(8px);"
			class="absolute inset-0 z-[-10] h-full w-screen object-cover"
		>
			<img src={image} class="absolute inset-0 z-[-10] h-full w-full object-cover" alt="" />
		</div> -->
	{/if}

	{#if firstSection}
		<section class="grid h-[calc(100vh-4rem)] z-10 w-screen grid-cols-3 grid-rows-3">
			<div
				class="relative col-span-2 col-start-1 row-span-1 row-start-3 ml-24 flex flex-col items-start self-end pb-20 text-left"
			>
				<h1 class="mb-4 text-6xl xl:text-[96px] xl:leading-[96px]">{title}</h1>
				<p class="font-MonaSans w-1/2 text-xl font-medium text-white md:text-2xl md:leading-[32px]">
					{pText}
				</p>
			</div>

			{#if arrow}
				<button
					class=" relative col-span-1 col-start-2 row-span-1 row-start-3 w-fit place-self-center self-end pb-16 text-center opacity-75 transition duration-100 hover:scale-105 hover:cursor-pointer hover:opacity-100"
					onclick={scrollNext}
				>
					<span class="material-icons md-48"> keyboard_arrow_down </span>
				</button>
			{/if}
		</section>
	{:else}
		<section class="grid h-[calc(100vh-4rem)] z-10 w-screen grid-cols-3 grid-rows-3">
			{#if prevArrow}
				<button
					class=" relative col-span-1 col-start-2 row-span-1 row-start-1 w-fit place-self-center self-start pt-16 text-center opacity-75 transition duration-100 hover:scale-105 hover:cursor-pointer hover:opacity-100"
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
						class="border-secondary font-MonaSans hover:bg-secondary hover:text-primary self-start rounded-[5px] border-2 px-4 text-lg font-medium text-nowrap transition duration-100 hover:scale-105 sm:px-2 sm:text-[1.5rem]"
					>
						{btnText}
					</a>
				{/if}
			</div>

			{#if arrow}
				<button
					class=" relative col-span-1 col-start-2 row-span-1 row-start-3 w-fit place-self-center self-end pb-16 text-center opacity-75 transition duration-100 hover:scale-105 hover:cursor-pointer hover:opacity-100"
					onclick={scrollNext}
				>
					<span class="material-icons md-48"> keyboard_arrow_down </span>
				</button>
			{/if}

			{#if backToTop}
				<button
					class=" relative col-span-1 col-start-2 row-span-1 row-start-3 w-fit place-self-center self-end pb-16 text-center opacity-75 transition duration-100 hover:scale-105 hover:cursor-pointer hover:opacity-100"
					onclick={scrollNext}
				>
					<span class="material-icons md-48"> keyboard_arrow_up </span>
					Back To Top
				</button>
			{/if}
		</section>
	{/if}
</section>

<style>
	.gradient-blur {
		position: absolute;
		z-index: 5;
		inset: auto 0 0 0;
		height: 100%;
		width: 66%;
		pointer-events: none;
	}
	.gradient-blur > div,
	.gradient-blur::before,
	.gradient-blur::after {
		position: absolute;
		inset: 0;
	}
	.gradient-blur::before {
		content: '';
		z-index: 1;
		backdrop-filter: blur(0.5px);
		mask: linear-gradient(
			to left,
			rgba(0, 0, 0, 0) 0%,
			rgba(0, 0, 0, 1) 12.5%,
			rgba(0, 0, 0, 1) 25%,
			rgba(0, 0, 0, 0) 37.5%
		);
	}
	.gradient-blur > div:nth-of-type(1) {
		z-index: 2;
		backdrop-filter: blur(1px);
		mask: linear-gradient(
			to left,
			rgba(0, 0, 0, 0) 12.5%,
			rgba(0, 0, 0, 1) 25%,
			rgba(0, 0, 0, 1) 37.5%,
			rgba(0, 0, 0, 0) 50%
		);
	}
	.gradient-blur > div:nth-of-type(2) {
		z-index: 3;
		backdrop-filter: blur(2px);
		mask: linear-gradient(
			to left,
			rgba(0, 0, 0, 0) 25%,
			rgba(0, 0, 0, 1) 37.5%,
			rgba(0, 0, 0, 1) 50%,
			rgba(0, 0, 0, 0) 62.5%
		);
	}
	.gradient-blur > div:nth-of-type(3) {
		z-index: 4;
		backdrop-filter: blur(4px);
		mask: linear-gradient(
			to left,
			rgba(0, 0, 0, 0) 37.5%,
			rgba(0, 0, 0, 1) 50%,
			rgba(0, 0, 0, 1) 62.5%,
			rgba(0, 0, 0, 0) 75%
		);
	}
	.gradient-blur > div:nth-of-type(4) {
		z-index: 5;
		backdrop-filter: blur(8px);
		mask: linear-gradient(
			to left,
			rgba(0, 0, 0, 0) 50%,
			rgba(0, 0, 0, 1) 62.5%,
			rgba(0, 0, 0, 1) 75%,
			rgba(0, 0, 0, 0) 87.5%
		);
	}
	.gradient-blur > div:nth-of-type(5) {
		z-index: 6;
		backdrop-filter: blur(16px);
		mask: linear-gradient(
			to left,
			rgba(0, 0, 0, 0) 62.5%,
			rgba(0, 0, 0, 1) 75%,
			rgba(0, 0, 0, 1) 87.5%,
			rgba(0, 0, 0, 0) 100%
		);
	}
	.gradient-blur > div:nth-of-type(6) {
		z-index: 7;
		backdrop-filter: blur(32px);
		mask: linear-gradient(
			to left,
			rgba(0, 0, 0, 0) 75%,
			rgba(0, 0, 0, 1) 87.5%,
			rgba(0, 0, 0, 1) 100%
		);
	}
	.gradient-blur::after {
		content: '';
		z-index: 8;
		backdrop-filter: blur(64px);
		mask: linear-gradient(to left, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%);
	}
</style>
