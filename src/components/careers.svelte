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
		tab1,
		tab2,
		tab3,
		tab4,
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

    function toggleTab(numTab){
        curTab = numTab;
    }

</script>

<section use:scrollRef={thisRef} class="relative flex h-screen">
	<div class="flex w-6/12 flex-auto flex-col bg-[#E8E3DA] font-serif text-[#000000]">
		{#if prevArrow}
			<div class="absolute top-32 left-1/4 flex -translate-x-1/2 transform flex-col items-center">
				<!-- <div>
					<p class="text-lightText">
						{prevArrowText}
					</p>
				</div>
				<div use:scrollTo={goBack}>
					<ChevronUpOutline class="h-20 w-20 text-darkText" />
				</div> -->

				<div use:scrollTo={goBack} class="text-lightText hover:text-darkText">
					<p >
						{prevArrowText}
					</p>
				</div>
			</div>
		{/if}

		<div class="m-48 flex-grow">
			<h1 class="mt-24 text-6xl text-darkText">{title}</h1>
			<h1 class="mb-12 text-4xl text-lightText">{thaiTitle}</h1>

			<div class="inline-flex">
				<button use:scrollTo={'Server'} onclick={() => toggleTab(0)}>
                    {console.log(curTab)}
                    {#if curTab === 0}
					    <p class="mb-8 mr-4 text-darkText underline">Server</p>
                    {:else if curTab != 0}
                        <p class="mb-8 mr-4 text-lightText">Server</p>
                    {/if}
				</button>
                <button use:scrollTo={'Food Runner'} onclick={() => toggleTab(1)}>
                    {console.log(curTab)}
                    {#if curTab === 1}
                        <p class="mb-8 mx-4 text-darkText underline">Food Runner</p>
                    {:else if curTab != 1}
                        <p class="mb-8 mx-4 text-lightText">Food Runner</p>
                    {/if}
				</button>
                <button use:scrollTo={'Driver'} onclick={() => toggleTab(2)}>
                    {console.log(curTab)}
                    {#if curTab === 2}
					    <p class="mb-8 mx-4 text-darkText underline">Driver</p>
                    {:else if curTab != 2}
                        <p class="mb-8 mx-4 text-lightText">Driver</p>
                    {/if}
				</button>
                <button use:scrollTo={'Kitchen Helper'} onclick={() => toggleTab(3)}>
                    {console.log(curTab)}
                    {#if curTab === 3}
					<p class="mb-8 mx-4 text-darkText underline">Kitchen Helper</p>
                    {:else if curTab != 3}
                        <p class="mb-8 mx-4 text-lightText">Kitchen Helper</p>
                    {/if}
				</button>
			</div>
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
				<!-- <div use:scrollTo={goTo}>
					<ChevronDownOutline class="h-20 w-20 text-lightText" />
				</div>
				<div>
					<p class="text-lightText">
						{arrowText}
					</p>
				</div> -->

				<div use:scrollTo={goTo} class="text-lightText hover:text-darkText">
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

			<div use:scrollTo={goTo} class="text-lightText hover:text-darkText">
				<p >
					{topArrowText}
				</p>
			</div>
				<!-- <div>
					<ChevronUpOutline class="h-20 w-20 text-darkText" onclick={() => scrollTop()} />
				</div>
				<div>
					<p class="text-lightText">
						{topArrowText}
					</p>
				</div> -->
			</div>
		{/if}
	</div>

	<div class="w-6/12 flex-auto">
		<img src="{image}" class="h-full object-cover" alt="" />
	</div>
</section>
