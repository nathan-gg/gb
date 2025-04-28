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



<section use:scrollRef={thisRef} class=" bg-tertiary relative flex flex-col sm:flex-row h-[calc(100vh-16px)]  ">
	<div class="flex sm:hidden">
		<img src={imageMobile} class="w-screen object-cover h-screen" alt="" />
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
		<div class="mx-8 sm:mx-16 xl:mx-36 mt-12 mb-12 sm:my-16 md:my-24 xl:my-12 flex flex-col">
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

