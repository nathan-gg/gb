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
	<div class="pointer-events-none absolute inset-0 z-[10] flex flex-col items-center justify-center">
		<img src="landingLogo.svg" class="relative -left-6" alt="Green Basil Thai Logo" />
		<p class="mt-24 text-white">Click to Enter</p>
	</div>

	<div class="embla bg-black" use:emblaCarouselSvelte={{ options, plugins }}>
		<div class="embla__container">
			<div class="embla__slide">
				<img src="/webp/landing1.webp" class="" alt="Background 1" />
			</div>
			<div class="embla__slide">
				<img src="/webp/landing2.webp" class="" alt="Background 2" />
			</div>
			<div class="embla__slide">
				<img src="/webp/landing3.webp" class="" alt="Background 3" />
			</div>
			<div class="embla__slide">
				<img src="/webp/landing4.webp" class="" alt="Background 4" />
			</div>
		</div>
	</div>
</a>