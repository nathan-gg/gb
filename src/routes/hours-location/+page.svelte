<script>
	import { onMount } from 'svelte';
	import { setGlobalOptions } from 'svelte-scrolling';
	import Home from '$lib/components/home.svelte';
	import Header from '$lib/components/head.svelte';
	import Footer from '$lib/components/footer.svelte';

	// Shared state for tracking scrolling across components
	let isScrolling = $state(false);

	// Configure the container element
	let container = $state();

	// Configure global scroll options with a custom scrollIntoView function
	setGlobalOptions({
		duration: 800,
		offset: -64,
		onStart: () => {
			isScrolling = true;
			// Temporarily disable scroll snapping during programmatic scrolling
			if (container) {
				container.style.scrollSnapType = 'none';
			}
			console.log('Scrolling started, isScrolling =', isScrolling);
		},
		onDone: () => {
			isScrolling = false;
			// Re-enable scroll snapping after programmatic scrolling
			if (container) {
				container.style.scrollSnapType = 'y mandatory';
			}
			console.log('Scrolling complete, isScrolling =', isScrolling);
		},
		// Custom scrollIntoView function that ensures scrolling happens within the container
		scrollIntoViewFn: (element, options) => {
			if (element && container) {
				// Use the container as the scrolling context instead of window
				const elementTop = element.offsetTop;
				container.scrollTo({
					top: elementTop + (options?.offset || 64),
					behavior: options?.behavior || 'smooth'
				});
				return true; // Return true to indicate we handled the scroll
			}
			return false; // Let the default handler take over
		}
	});

	import Hours from '$lib/components/hours.svelte';


	const info = {
		thisRef: 'Info',
		goBack: 'Message',
		title: 'Hours & Location',
		thaiTitle: 'เวลาเปิดทำการเเละที่อยู่',
		body: '',
		prevArrowText: 'Contact Us',
		image: '/webp/identityMission.webp'
	};
</script>

<section
	id="container"
	bind:this={container}
	class="scroll-container h-screen overflow-x-hidden overflow-y-auto"
>

	<Hours
		thisRef={info.thisRef}
		goBack={info.goBack}
		title={info.title}
		thaiTitle={info.thaiTitle}
		body={info.body}
		arrow={false}
		prevArrow={true}
		prevArrowText={info.prevArrowText}
		image={info.image}
		ifPage1={false}
		ifPage2={true}
		{isScrolling}
		{container}
		class="snap-start snap-normal"
	/>

	<div class="bottom-0 z-50 snap-end snap-normal">
		<Footer />
	</div>
</section>
