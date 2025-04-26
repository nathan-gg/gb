<script lang="ts">
	import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling';

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
		imageMobile
	} = $props();

	let curTab = $state(0);
</script>

<!-- <section use:scrollRef={thisRef} class="relative flex min-h-[calc(100vh-4rem)] ">
	<div class="flex w-6/12 flex-auto flex-col bg-tertiary font-serif ">
		{#if prevArrow}
			<div class="absolute top-32 left-1/4 flex -translate-x-1/2 transform flex-col items-center">
				<div use:scrollTo={{ ref: (goBack), offset:-64 }} class="text-lightText hover:text-darkText">
					<p >
						{prevArrowText}
					</p>
				</div>
			</div>
		{/if}

		<div class="bg-tertiary text-darkText flex items-center flex-col font-instrument">
			<div class=" mx-8 sm:mx-16 md:mx-24 xl:mx-50 mt-16 mb-16 flex flex-col">
			<h1 class="mt-24 text-6xl text-darkText">{title}</h1>
			<h1 class="mb-12 text-4xl text-lightText">{thaiTitle}</h1>

			<div class="">
				<p class="font-sans text-darkText">
					{@html body}
				</p>
			</div>
			</div>
		</div>

		{#if arrow}
			<div
				class="absolute bottom-32 left-1/4 flex -translate-x-1/2 transform flex-col items-center"
			>
				<div use:scrollTo={{ ref: (goTo), offset:-64 }} class="text-lightText hover:text-darkText">
					<p >
						{arrowText}
					</p>
				</div>
			</div>
		{/if}

		{#if topArrow}
			<div
				class="absolute bottom-32 left-1/4 flex -translate-x-1/2 transform flex-col items-center"
			>
				<div use:scrollTo={{ ref: (goTo), offset:-64 }} class="text-lightText hover:text-darkText">
					<p >
						{topArrowText}
					</p>
				</div>
			</div>
		{/if}
	</div>

	<div class="w-6/12 flex-auto">
		<img src={image} class="h-full object-cover" alt="" />
	</div>
</section> -->



<section use:scrollRef={thisRef} class=" bg-tertiary relative flex flex-col sm:flex-row h-fit  ">
	<div class="flex sm:hidden">
		<img src={imageMobile} class="w-screen object-cover" alt="" />
	</div>
	<div class=" text-darkText flex sm:w-1/2 justify-center items-center flex-col font-instrument">
		{#if prevArrow}
			<div
				class="mt-6 md:mt-12"
			>
				<div use:scrollTo={{ ref: (goBack), offset:-64 }} class=" font-DMSans text-lightText hover:text-darkText">
					<p >
						{prevArrowText}
					</p>
				</div>
			</div>
		{/if}
		<div class="mx-8 sm:mx-16 xl:mx-50 mt-12 mb-12 sm:my-16 md:my-24  xl:my-36  flex flex-col">
			<h1 class="text-darkText text-6xl mb-4">{title}</h1>
			<h1 class="text-lightText mb-12 text-4xl">{thaiTitle}</h1>

			<p class="font-sans text-darkText">
				{@html body}
			</p>
			
		</div>
		{#if arrow}
			<div
				class="mb-6 md:mb-12"
			>
				<div use:scrollTo={{ ref: (goTo), offset:-64 }} class=" font-DMSans text-lightText hover:text-darkText">
					<p >
						{arrowText}
					</p>
				</div>
			</div>
		{/if}

		{#if topArrow}
			<div
				class="mb-6 md:mb-12"
			>
				<div use:scrollTo={{ ref: (goTo), offset:-64 }} class="font-DMSans text-lightText hover:text-darkText">
					<p >
						{topArrowText}
					</p>
				</div>
			</div>
		{/if}
	</div>

	<div class="w-1/2 flex-auto sm:flex hidden">
		<img src={image} class="h-full object-cover w-full" alt="" />
	</div>
</section>

