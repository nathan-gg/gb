<script lang="ts">
	import { onMount } from 'svelte';
  import { setGlobalOptions } from 'svelte-scrolling';
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
          top: elementTop + (options?.offset || 0),
          behavior: options?.behavior || 'smooth'
        });
        return true; // Return true to indicate we handled the scroll
      }
      return false; // Let the default handler take over
    }
  });

  

	import Identity from '$lib/components/identity.svelte';

	const identity = {
		thisRef: 'Identity',
		goTo: 'Mission',
		title: 'The Basil Identity',
		thaiTitle: 'เอกลักษณ์ของเดอะเบซิล',
		body: 'Experience culinary excellence at Green Basil Thai Restaurant, where promoting a healthy lifestyle is at the heart of everything we do. The Holy Basil is  a proven ingredient that enhances stress response and elevates spirits. It is also known for containing vital nutrients, facilitating mental clarity and enlightenment, is an essential part of our culinary creations.\nGreen Basil Thai Restaurant, located in the bustling Metrotown area on Kingsway, offers authentic Thai cuisine with a twist on timeless recipes. We take pride in promoting the vibrant flavours and health benefits of Thai Holy Basil, a cherished herb that is a cornerstone of Thai cooking.',
		arrowText: 'Missions',
		image: '/webp/identityHead.webp',
		imageMobile:'/webp/identityMobile1.webp'
	};

	const mission = {
		thisRef: 'Mission',
		goTo: 'Chef',
		goBack: 'Identity',
		title: 'Our Mission',
		thaiTitle: 'หน้าที่ของเรา',
		body: 'At Green Basil Thai Restaurant, we dedicate ourselves to curating an exquisite dining experience, harmonizing the rich heritage of authentic Thai cuisine with a more contemporary dining experience. Our mission is to elevate the palate, promote a lifestyle of wellness through the artful use of fresh, locally sourced ingredients, highlighted by the revered Holy Basil.\nWe want diners to experience a culinary haven with an inviting ambiance where guests can indulge in dishes of exceptional quality and inspired cocktails, all while enjoying a sophisticated but inclusive atmosphere. We take pride on delivering impeccable service and fostering a workplace culture that is fun and supportive for our team.\nWe have an unwavering commitment to quality, innovation, and sustainability, we aspire to be the premier destination for diners of all kinds seeking elegant Thai cuisine in the Greater Vancouver area.',
		arrowText: 'Chef',
		prevArrowText: 'Identity',
		image: '/webp/identityMission.webp',
		imageMobile:'/webp/identityMobile2.webp'
	};
	const chef = {
		thisRef: 'Chef',
		goTo: 'Prizes',
		goBack: 'Mission',
		title: 'Chef Ming',
		thaiTitle: 'เชฟหมิง',
		body: "For over 16 years, Green Basil has been a beacon of authentic Thai flavours.  With over 30 years of culinary experience, Chef Ming's career spans from Bangkok to Montreal and Vancouver!\nHis illustrious career includes celebrated time at Maison Kirin and Chao Phraya in Montreal. Upon returning to Vancouver, Chef Ming has graced some of the city's top Thai dining establishments, including Chili Club, before ultimately becoming the Chef de Cuisine for many Thai House establishments across the lower mainland.\nWith each dish, Chef Ming brings a generations of passed down culinary excellence and a passion for Thai cuisine that elevates the dining experience here at Green Basil.",
		arrowText: 'Prizes',
		prevArrowText: 'Mission',
		image: '/webp/chefMing.webp',
		imageMobile:'/webp/m-chefMing.webp'
	};
	const prizes = {
		thisRef: 'Prizes',
		goTo: 'Identity',
		goBack: 'Chef',
		title: 'Prizes & Accolades',
		thaiTitle: 'รางวัลเเละชื่อเสียง',
		body: "Since inception, Green Basil has quickly built a reputation as one of the premier Thai restaurants in the lower mainland. Established in 2006, the restaurant continues to thrive to this day.\nHaving earned Burnaby Now’s “Best Thai Restaurant” award multiple times, Green Basil has garnered glowing reviews from respected publications like The Province, The Vancouver Sun, and the Georgia Straight, emphasizing our status as a leader in the local dining scene.",
		prevArrowText: 'Chef',
		topArrowText: 'Back to Identity',
		image: '/webp/identityPrizes.webp',
		imageMobile:'/webp/identityMobile4.webp'
	};
</script>

<section
id="container" 
  bind:this={container} 
  class="h-screen overflow-y-auto overflow-x-hidden scroll-container">

<Identity class="snap-start snap-normal"
	thisRef={identity.thisRef}
	goTo={identity.goTo}
	title={identity.title}
	thaiTitle={identity.thaiTitle}
	body={identity.body}
	arrowText={identity.arrowText}
	image={identity.image}
	imageMobile={identity.imageMobile}
	isScrolling={isScrolling}
    container={container}
/>

<Identity class="snap-start snap-normal"
	thisRef={mission.thisRef}
	goTo={mission.goTo}
	goBack={mission.goBack}
	title={mission.title}
	thaiTitle={mission.thaiTitle}
	body={mission.body}
	arrowText={mission.arrowText}
	prevArrow={true}
	prevArrowText={mission.prevArrowText}
	image={mission.image}
	imageMobile={mission.imageMobile}
	isScrolling={isScrolling}
    container={container}
/>

<Identity class="snap-start snap-normal"
	thisRef={chef.thisRef}
	goTo={chef.goTo}
	goBack={chef.goBack}
	title={chef.title}
	thaiTitle={chef.thaiTitle}
	body={chef.body}
	arrowText={chef.arrowText}
	prevArrow={true}
	prevArrowText={chef.prevArrowText}
	image={chef.image}
	imageMobile={chef.imageMobile}
	isScrolling={isScrolling}
    container={container}
/>

<Identity class="snap-start snap-normal"
	thisRef={prizes.thisRef}
	goTo={prizes.goTo}
	goBack={prizes.goBack}
	title={prizes.title}
	thaiTitle={prizes.thaiTitle}
	body={prizes.body}
	arrow={false}
	prevArrow={true}
	prevArrowText={prizes.prevArrowText}
	topArrow={true}
	topArrowText={prizes.topArrowText}
	image={prizes.image}
	imageMobile={prizes.imageMobile}
	isScrolling={isScrolling}
    container={container}
/>

<div class="bottom-0 z-50 snap-end snap-normal">
    <Footer />
  </div>

</section>