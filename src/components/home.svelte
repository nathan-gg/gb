<script lang="ts">
	import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling';

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
		firstSection = false
	} = $props();
	
	function scrollPrev() {
		scrollTo({ ref: goBack, offset: -64, duration: 50 })
	}

	function scrollNext() {
		scrollTo({ ref: goTo, offset: -64 })
	}

</script>

<section
	use:scrollRef={thisRef}
	class="font-instrument relative flex min-h-[calc(100vh-4rem)] w-full items-center text-secondary snap-start snap-normal"
>
	<img src={image} class="absolute inset-0 h-full w-screen object-cover brightness-30" alt="" />

	{#if firstSection}
			{#if prevArrow}
				<div class="absolute top-1/8" onclick={() => scrollPrev()} >
					<span
						class="material-icons md-48 mt-0 mb-12 sm:mt-16 md:mt-8 md:mb-24 lg:mt-0 lg:mb-36 xl:mb-48 top-1/4 sm:top-1/3"
						>keyboard_arrow_up</span
					>
				</div>
			{/if}
		<div class="relative flex w-screen flex-col text-center">

			<h1 class="px-4 text-6xl xl:text-8xl">{title}</h1>
			<p class="font-DMSans mb-8 text-2xl font-extralight">{pText}</p>

			{#if button}
				<a
					href={link}
					class="border-secondary font-DMSans w-fit self-center rounded-md border-2 p-2  text-lg hover:font-bold sm:px-16 sm:text-2xl"
				>
					{btnText}
				</a>
			{/if}
		</div>

			{#if arrow}
				<div class="absolute bottom-1/8 text-center w-screen" onclick={() => scrollNext()}>
					<span class="material-icons md-48 mt-12 md:mt-24 lg:mt-36 xl:mt-48 bottom-1/4 sm:bottom-1/3"
						>keyboard_arrow_down</span
					>
				</div>
			{/if}
	{:else}
			{#if prevArrow}
				<div class="absolute top-1/8 text-center w-screen" onclick={() => scrollPrev()}>
					<span
						class="material-icons md-48 mt-0 mb-12 sm:mt-16 md:mt-8 md:mb-24 lg:mt-0 lg:mb-36 xl:mb-48"
						>keyboard_arrow_up</span
					>
				</div>
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
				<div class="absolute bottom-1/8 text-center w-screen" onclick={() => scrollNext()}>
					<span class="material-icons md-48 mt-12 md:mt-24 lg:mt-36 xl:mt-48"
						>keyboard_arrow_down</span
					>
				</div>
			{/if}
		<!-- </div> -->
	{/if}
</section>
