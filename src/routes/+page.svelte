<script>
  import emblaCarouselSvelte from 'embla-carousel-svelte'
  import Autoplay from 'embla-carousel-autoplay'
	import { AlignCenterOutline } from 'flowbite-svelte-icons';

  let options = { loop: true, playOnInit:true}
  let plugins = [Autoplay()]
</script>

<div class="embla" use:emblaCarouselSvelte="{{ options, plugins }}">
  <div class="embla__container">
    <div class="embla__slide">
      <img src="/webp/careersFoodRunner.webp" class="" alt="Uber Eats Logo" />
      <img src="/webp/homeMenusDrinks.webp" class="" alt="Uber Eats Logo" />
      <img src="/webp/homeStory.webp" class="" alt="Uber Eats Logo" />
    </div>
    <div class="embla__slide">
      <img src="/webp/homeMenusDrinks.webp" class="" alt="Uber Eats Logo" />
    </div>
    <div class="embla__slide">
      <img src="/webp/homeStory.webp" class="" alt="Uber Eats Logo" />
    </div>
  </div>
</div>
