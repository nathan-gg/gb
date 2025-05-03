<script lang="ts">
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
          top: elementTop + (options?.offset || 0),
          behavior: options?.behavior || 'smooth'
        });
        return true; // Return true to indicate we handled the scroll
      }
      return false; // Let the default handler take over
    }
  });
  
  const start = {
    thisRef: 'Start',
    goTo: 'Menus',
    title: 'Welcome to Green Basil',
    pText: 'its good af trust',
    btnText: '',
    link: '#',
    image: '/webp/homeWelcome.webp'
  };

  const menus = {
    thisRef: 'Menus',
    goTo: 'Cocktails',
    goBack: 'Start',
    title: 'Pad Thai',
    pText: 'its good af trust',
    btnText: 'Discover Our Menus',
    link: 'menus',
    image: '/webp/homeMenusFood.webp',
  };

  const cocktails = {
    thisRef: 'Cocktails',
    goTo: 'Order',
    goBack: 'Menus',
    title: 'Green Basil Cocktail',
    pText: 'its good af trust',
    btnText: 'Explore Cocktails',
    link: 'menus',
    image: '/webp/homeMenusDrinks.webp'
  };

  const order = {
    thisRef: 'Order',
    goTo: 'Contact',
    goBack: 'Cocktails',
    title: 'Order Online',
    pText: 'its good af trust',
    btnText: 'Order Online',
    link: 'order',
    image: '/webp/homeOrderOnline.webp'
  };
  
  const contact = {
    thisRef: 'Contact',
    goTo: 'Partnerships',
    goBack: 'Order',
    title: 'Connect With Us',
    pText: 'its good af trust',
    btnText: 'Contact Us',
    link: 'contact',
    image: '/webp/homeContact.webp'
  };

  const partnerships = {
    thisRef: 'Partnerships',
    goTo: 'About',
    goBack: 'Contact',
    title: 'Our Partnerships',
    pText: 'its good af trust',
    btnText: 'Discover Partnerships',
    link: 'partnerships',
    image: '/webp/homePartnerships.webp'
  };

  const about = {
    thisRef: 'About',
    goTo: 'Reservations',
    goBack: 'Partnerships',
    title: 'The Basil Identity',
    pText: 'its good af trust',
    btnText: 'Learn About Us',
    link: 'identity',
    image: '/webp/homeStory.webp'
  };

  const reservations = {
    thisRef: 'Reservations',
    goTo: 'Start',
    goBack: 'About',
    title: 'Reserve a Seat',
    pText: 'its good af trust',
    btnText: 'Book a Reservation',
    link: 'reservations',
    image: '/webp/homeReserve.webp'
  };
</script>

<section 
  id="container" 
  bind:this={container} 
  class="h-screen overflow-y-auto overflow-x-hidden scroll-container">

  <Home
    thisRef={start.thisRef}
    goTo={start.goTo}
    title={start.title}
    pText={start.pText}
    button={false}
    btnText={start.btnText}
    link={start.link}
    image={start.image}
    firstSection={true}
    isScrolling={isScrolling}
    container={container}
    class="snap-start snap-normal"
  />
  
  <Home
    thisRef={menus.thisRef}
    goTo={menus.goTo}
    goBack={menus.goBack}
    title={menus.title}
    pText={menus.pText}
    btnText={menus.btnText}
    link={menus.link}
    image={menus.image}
    prevArrow={true}
    isScrolling={isScrolling}
    container={container}
    class="snap-start snap-normal"
  />
  
  <Home
    thisRef={cocktails.thisRef}
    goTo={cocktails.goTo}
    goBack={cocktails.goBack}
    title={cocktails.title}
    pText={cocktails.pText}
    btnText={cocktails.btnText}
    link={cocktails.link}
    image={cocktails.image}
    prevArrow={true}
    isScrolling={isScrolling}
    container={container}
    class="snap-start snap-normal"
  />
  
  <Home
    thisRef={order.thisRef}
    goTo={order.goTo}
    goBack={order.goBack}
    title={order.title}
    pText={order.pText}
    btnText={order.btnText}
    link={order.link}
    image={order.image}
    prevArrow={true}
    isScrolling={isScrolling}
    container={container}
    class="snap-start snap-normal"
  />
  
  <Home
    thisRef={contact.thisRef}
    goTo={contact.goTo}
    goBack={contact.goBack}
    title={contact.title}
    pText={contact.pText}
    btnText={contact.btnText}
    link={contact.link}
    image={contact.image}
    prevArrow={true}
    isScrolling={isScrolling}
    container={container}
    class="snap-start snap-normal"
  />
  
  <Home
    thisRef={partnerships.thisRef}
    goTo={partnerships.goTo}
    goBack={partnerships.goBack}
    title={partnerships.title}
    pText={partnerships.pText}
    btnText={partnerships.btnText}
    image={partnerships.image}
    link={partnerships.link}
    prevArrow={true}
    isScrolling={isScrolling}
    container={container}
    class="snap-start snap-normal"
  />
  
  <Home
    thisRef={about.thisRef}
    goTo={about.goTo}
    goBack={about.goBack}
    title={about.title}
    pText={about.pText}
    btnText={about.btnText}
    link={about.link}
    image={about.image}
    prevArrow={true}
    isScrolling={isScrolling}
    container={container}
    class="snap-start snap-normal"
  />
  
  <Home
    thisRef={reservations.thisRef}
    goTo={reservations.goTo}
    goBack={reservations.goBack}
    title={reservations.title}
    pText={reservations.pText}
    btnText={reservations.btnText}
    arrow={false}
    link={reservations.link}
    image={reservations.image}
    prevArrow={true}
    isScrolling={isScrolling}
    container={container}
    class="snap-start snap-normal"
  />

  <div class="bottom-0 z-50 snap-end snap-normal">
    <Footer />
  </div>

</section>

<!-- <style>
  .scroll-container {
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
  }

  /* Hide the scrollbar for better UX */
.scroll-container::-webkit-scrollbar {
  display: none;
}
</style> -->