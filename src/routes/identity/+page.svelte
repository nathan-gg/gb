<script lang="ts">
	import { onMount } from 'svelte';
  import { setGlobalOptions } from 'svelte-scrolling';
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
          top: elementTop + (options?.offset || 0),
          behavior: options?.behavior || 'smooth'
        });
        return true; // Return true to indicate we handled the scroll
      }
      return false; // Let the default handler take over
    }
  });

  

	import Identity from '/src/components/identity.svelte';

	const identity = {
		thisRef: 'Identity',
		goTo: 'Mission',
		title: 'The Basil Identity',
		thaiTitle: 'เอกลักษณ์ของเดอะเบซิล',
		body: 'Experience culinary excellence at Green Basil Thai Restaurant, where promoting a healthy lifestyle is at the heart of everything we do. We proudly incorporate Holy Basil into our menu, a scientifically proven ingredient that enhances stress response and elevates spirits. Holy Basil, known for delivering vital nutrients that facilitate mental clarity and enlightenment, is an essential part of our culinary creations.\nGreen Basil Thai Restaurant, nestled in the vibrant Metrotown area on Kingsway, offers authentic Thai cuisine with a twist on time-honored recipes. Embrace the vibrant flavors and health benefits of Thai Holy Basil, a cherished herb that thrives in warm climates and is a cornerstone of Thai cooking.\nCome dine with us at Green Basil Thai Restaurant and discover the rejuvenating powers power of Holy Basil!',
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
		body: 'At Green Basil Thai Restaurant, we dedicate ourselves to curating an exquisite dining experience, harmonizing the rich heritage of authentic Thai cuisine with contemporary flair. Our mission is to elevate the palate, promote a lifestyle of wellness through the artful use of fresh, locally sourced ingredients, highlighted by the revered Holy Basil.\nWe offer a culinary haven offers an inviting ambiance where guests can indulge in dishes nothing short of exceptional and inspired cocktails, all while basking in a sophisticated but welcoming atmosphere. We take pride on delivering impeccable service and fostering a workplace culture that is both fun and supportive for our team.\nThrough our unwavering commitment to quality, innovation, and sustainability, we aspire to be the premier destination for discerning diners seeking the finest Thai cuisine in the Greater Vancouver area.',
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
		body: "For over 16 years, Green Basil has been a beacon of authentic Thai flavors. Established in 2006 by the renowned Executive Chef Ming, the restaurant continues to thrive under his expert guidance. With over 30 years of culinary experience, Chef Ming's journey spans from the vibrant streets of Bangkok to Montreal and Vancouver.\nHis illustrious career includes celebrated stints at Maison Kirin and Chao Phraya in Montreal. Upon returning to Vancouver, Chef Ming has graced some of the city's top Thai dining establishments, including Chili Club, before ultimately becoming the Chef de Cuisine for all Thai House establishments across the lower mainland.\nWith each dish, Chef Ming brings a legacy of culinary excellence and a passion for Thai cuisine that elevates every dining experience at Green Basil.",
		arrowText: 'Prizes',
		prevArrowText: 'Mission',
		image: '/webp/identityHead.webp',
		imageMobile:'/webp/identityMobile1.webp'
	};
	const prizes = {
		thisRef: 'Prizes',
		goTo: 'Identity',
		goBack: 'Chef',
		title: 'Prizes & Accolades',
		thaiTitle: 'รางวัลเเละชื่อเสียง',
		body: "Driven by an unrelenting ambition, he opened his first restaurant, Chao Phraya, near Granville Island. It was acclaimed by both diners and critics, earning numerous accolades for its exquisite cuisine and captivating atmosphere.\nYears later, Green Basil emerged and swiftly garnered widespread acclaim, becoming a perennial winner of Burnaby Now’s 'Best Thai' award. Green Basil has also received rave reviews from esteemed publications such as The Province, The Vancouver Sun, and the Georgia Straight.",
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