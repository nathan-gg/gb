<script lang="ts">
	import { ChevronDownOutline, ChevronUpOutline } from 'flowbite-svelte-icons';
	import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling';
	// import { Tabs } from 'flowbite-svelte';
	import { Tabs, TabItem } from 'flowbite-svelte';

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
	} = $props();

    let curTab = $state(0);

</script>

<section use:scrollRef={thisRef} class="relative flex h-screen">
	<div class="flex w-6/12 flex-auto flex-col bg-[#E8E3DA] font-serif text-[#000000]">
		{#if prevArrow}
			<div class="absolute top-32 left-1/4 flex -translate-x-1/2 transform flex-col items-center">
				<div>
					<p class="text-[#758668]">
						{prevArrowText}
					</p>
				</div>
				<div use:scrollTo={goBack}>
					<ChevronUpOutline class="h-20 w-20 text-[#355128]" />
				</div>
			</div>
		{/if}

		<div class="m-48 flex-grow">
			<h1 class="mt-24 text-6xl text-[#355128]">{title}</h1>
			<h1 class="mb-12 text-4xl text-[#758668]">{thaiTitle}</h1>

			<div class="">
				<p class="font-sans text-[#355128]">
					{@html body}
				</p>
			</div>
		</div>

		{#if arrow}
			<div
				class="absolute bottom-32 left-1/4 flex -translate-x-1/2 transform flex-col items-center"
			>
				<div use:scrollTo={goTo}>
					<ChevronDownOutline class="h-20 w-20 text-[#355128]" />
				</div>
				<div>
					<p class="text-[#758668]">
						{arrowText}
					</p>
				</div>
			</div>
		{/if}

		{#if topArrow}
			<div
				class="absolute bottom-32 left-1/4 flex -translate-x-1/2 transform flex-col items-center"
			>
				<div>
					<ChevronUpOutline class="h-20 w-20 text-[#355128]" onclick={() => scrollTop()} />
				</div>
				<div>
					<p class="text-[#758668]">
						{topArrowText}
					</p>
				</div>
			</div>
		{/if}
	</div>

	<div class="w-6/12 flex-auto">
		<img src="../wongchunhei_wallpaper.jpg" class="h-full object-cover" alt="" />
	</div>
</section>
