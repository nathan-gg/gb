<script>
	import { onMount } from 'svelte';
	import { setGlobalOptions } from 'svelte-scrolling';
	import Home from '/src/components/home.svelte';
	import Header from '/src/components/head.svelte';
	import Footer from '/src/components/footer.svelte';

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

	import Contact from '/src/components/contact.svelte';

	const message = {
		thisRef: 'Message',
		goTo: 'Info',
		title: 'Contact Us',
		thaiTitle: 'ติดต่อเรา',
		body: 'Fill out this contact form below to get in touch with us, or contact us through our email <a href="mailto:info@greenbasilthai.com" class="underline">info@greenbasilthai.com</a> or call our phone number at <a href="tel:+1 6045007542" class="underline" >+1 (604) 439-1919</a>.',
		arrowText: 'Hours & Location',
		image: '/webp/identityHead.webp'
	};

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
	<Contact
		thisRef={message.thisRef}
		goTo={message.goTo}
		title={message.title}
		thaiTitle={message.thaiTitle}
		body={message.body}
		arrowText={message.arrowText}
		image={message.image}
		ifPage1={true}
		ifPage2={false}
		{isScrolling}
		{container}
		class="snap-start snap-normal"
	/>

	<Contact
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
