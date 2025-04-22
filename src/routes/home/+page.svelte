<script lang="ts">
  
    import Home from '/src/components/home.svelte';
  
    
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
      title: 'Pad Thai',
      pText: 'its good af trust',
      btnText: 'Discover Our Menus',
      link: 'menus',
      image: '/webp/homeMenusFood.webp'
      };
  
    const cocktails = {
          thisRef: 'Cocktails',
      goTo: 'Order',
      title: 'Green Basil Cocktail',
      pText: 'its good af trust',
      btnText: 'Explore Cocktails',
      link: 'menus',
      image: '/webp/homeMenusDrinks.webp'
      };
  
    const order = {
          thisRef: 'Order',
      goTo: 'Contact',
      title: 'Order Online',
      pText: 'its good af trust',
      btnText: 'Order Online',
      link: 'order',
      image: '/webp/homeOrderOnline.webp'
      };
    
    const contact = {
          thisRef: 'Contact',
      goTo: 'Partnerships',
      title: 'Connect With Us',
      pText: 'its good af trust',
      btnText: 'Contact Us',
      link: 'contact',
      image: '/webp/homeContact.webp'
      };
  
    const partnerships = {
          thisRef: 'Partnerships',
      goTo: 'About',
      title: 'Our Partnerships',
      pText: 'its good af trust',
      btnText: 'Discover Partnerships',
      link: 'partnerships',
      image: '/webp/homePartnerships.webp'
      };
  
    const about = {
          thisRef: 'About',
      goTo: 'Reservations',
      title: 'The Basil Identity',
      pText: 'its good af trust',
      btnText: 'Learn About Us',
      link: 'identity',
      image: '/webp/homeStory.webp'
      };
  
    const reservations = {
          thisRef: 'Reservations',
      goTo: 'Start',
      title: 'Reserve a Seat',
      pText: 'its good af trust',
      btnText: 'Book a Reservation',
      link: 'reservations',
      image: '/webp/homeReserve.webp'
      };
  
  </script>
  
  
  <Home
    thisRef={start.thisRef}
    goTo={start.goTo}
    title={start.title}
    pText={start.pText}
    button={false}
    btnText={start.btnText}
    link={start.link}
    image={start.image}
  />
  
  <Home
    thisRef={menus.thisRef}
    goTo={menus.goTo}
    title={menus.title}
    pText={menus.pText}
    btnText={menus.btnText}
    link={menus.link}
    image={menus.image}
  />
  
  <Home
    thisRef={cocktails.thisRef}
    goTo={cocktails.goTo}
    title={cocktails.title}
    pText={cocktails.pText}
    btnText={cocktails.btnText}
    link={cocktails.link}
    image={cocktails.image}
  />
  
  <Home
    thisRef={order.thisRef}
    goTo={order.goTo}
    title={order.title}
    pText={order.pText}
    btnText={order.btnText}
    link={order.link}
    image={order.image}
  />
  
  <Home
    thisRef={contact.thisRef}
    goTo={contact.goTo}
    title={contact.title}
    pText={contact.pText}
    btnText={contact.btnText}
    link={contact.link}
    image={contact.image}
  />
  
  <Home
    thisRef={partnerships.thisRef}
    goTo={partnerships.goTo}
    title={partnerships.title}
    pText={partnerships.pText}
    btnText={partnerships.btnText}
    image={partnerships.image}
    link={partnerships.link}
  />
  
  <Home
    thisRef={about.thisRef}
    goTo={about.goTo}
    title={about.title}
    pText={about.pText}
    btnText={about.btnText}
    link={about.link}
    image={about.image}
  />
  
  <Home
    thisRef={reservations.thisRef}
    goTo={reservations.goTo}
    title={reservations.title}
    pText={reservations.pText}
    btnText={reservations.btnText}
    arrow={false}
    link={reservations.link}
    image={reservations.image}
  />
  
  
  