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
		image
	} = $props();

	let curTab = $state(0);
</script>

<section use:scrollRef={thisRef} class="relative flex min-h-[calc(100vh-4rem)] ">
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

		<div class="m-48 flex-grow">
			<h1 class="mt-24 text-6xl text-darkText">{title}</h1>
			<h1 class="mb-12 text-4xl text-lightText">{thaiTitle}</h1>

			<div class="">
				<p class="font-sans text-darkText">
					{@html body}
				</p>
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
				<!-- <div>
					<p class="text-lightText">
						{arrowText}
					</p>
				</div> -->
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
</section>
