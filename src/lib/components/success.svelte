<script lang="ts">
	import { onMount } from 'svelte';
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
		image,
		ifPage1 = false,
		ifPage2 = false,
		isScrolling = false,
		container = null,
		class: className = ''
	} = $props();



	
</script>

<section
	use:scrollRef={thisRef}
	id={thisRef}
	data-scroll-ref={thisRef}
	class=" bg-tertiary snap-align-start relative flex min-h-[calc(100vh-4rem)] flex-col sm:flex-row {className} "
>
	<div class="flex sm:hidden">
		<img src="/webp/m-contact1.webp" class="w-screen object-cover" alt="" />
	</div>
	<div
		class=" text-darkText font-instrument mt-12 flex flex-col items-center sm:w-1/2"
	>
		<div class="mx-16 flex w-full flex-col items-center">
			<div class="mx-8 mb-4 flex flex-col sm:mx-16 xl:mx-48">
				<h1 class="text-darkText mb-4 text-6xl">{title}</h1>
				<h1 class="text-lightText mb-12 text-4xl">{thaiTitle}</h1>
				<div class="flex flex-col gap-8 font-MonaSans">
					<p class="text-darkText font-MonaSans">
					{@html body}
				</p>

				<div>
					<img src="/success.svg" alt="Contact form has been submitted">
				</div>
				<p>Thanks, our contact form has been successfully submitted! We will get back to you soon.</p>

				<a href="/contact" class=" border-darkText hover:bg-darkText text-darkText hover:text-tertiary rounded-[5px] border-2 p-2 transition duration-300 sm:px-5.5 sm:py-2 w-fit">Write another Message</a>
				</div>

				
				

				
				
			</div>
		</div>
	</div>

	<div class="hidden w-1/2 flex-auto sm:flex">
		<img src="/webp/contact1.webp" class="h-full w-full object-cover" alt="" />
	</div>
</section>
