<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
  import ViewTransition from "../components/navigation.svelte";
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import Autoplay from 'embla-carousel-autoplay';

	let options = { loop: true, playOnInit: true };
	let plugins = [Autoplay()];
	let showLanding = $state(true);

	function toggleLanding() {
		if (showLanding == true) {
			showLanding = false;
		}
	}
</script>
<ViewTransition />

<a href='/home'>
	<!-- <div class="landing pointer-events-none absolute inset-0 z-[10] flex flex-col items-center justify-center"> -->
	<div class="landing pointer-events-none absolute inset-0 z-[10] flex flex-col items-center justify-center">
		<img src="landingLogo.svg" class="relative w-fit p-8 sm:-left-6" alt="Green Basil Thai Logo" />
		<p class="mt-24 text-secondary">Click to Enter</p>
	</div>

	<div class="embla bg-black min-h-screen" use:emblaCarouselSvelte={{ options, plugins }}>
		<div class="embla__container">
			<div class="embla__slide">
				<img src="/webp/landing1.webp" class=" object-cover min-h-screen" alt="Background 1" />
			</div>
			<div class="embla__slide">
				<img src="/webp/landing2.webp" class="object-cover min-h-screen" alt="Background 2" />
			</div>
			<div class="embla__slide">
				<img src="/webp/landing3.webp" class="object-cover min-h-screen" alt="Background 3" />
			</div>
			<div class="embla__slide">
				<img src="/webp/landing4.webp" class="object-cover min-h-screen" alt="Background 4" />
			</div>
		</div>
	</div>
</a>