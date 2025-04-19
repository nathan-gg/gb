<script>
	import {
		Footer,
		FooterCopyright,
		FooterLinkGroup,
		FooterLink,
		FooterBrand,
		FooterIcon
	} from 'flowbite-svelte';
	import {
		FacebookSolid,
		GithubSolid,
		DiscordSolid,
		TwitterSolid,
		InstagramSolid
	} from 'flowbite-svelte-icons';
</script>

<!-- <Footer footerType="socialmedia" class="border-t-1 border-[#E0B87A] bg-gradient-to-b from-[#092417] to-[#0D2201] text-[#E0B87A] font-serif">
    <div class="md:flex md:justify-between mx-8">
      <div class="mb-6 md:mb-0">
        <FooterBrand href="https://flowbite.com" src="finalLogo.svg" alt="Flowbite Logo" />
      </div>
      <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 class="mb-6 text-sm font-semibold text-[#E0B87A]">Resources</h2>
          <FooterLinkGroup>
            <FooterLink liClass="mb-4" href="/">Flowbite</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-[#E0B87A]">Follow us</h2>
          <FooterLinkGroup>
            <FooterLink liClass="mb-4" href="/">GitHub</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-[#E0B87A]">Legal</h2>
          <FooterLinkGroup>
            <FooterLink liClass="mb-4" href="/">Privacy Policy</FooterLink>
          </FooterLinkGroup>
        </div>
      </div>
    </div>
    <div class="sm:flex sm:items-center sm:justify-between">
      <FooterCopyright href="/" by="Green Basil Thai™" />
      <div class="flex mt-4 space-x-6 rtl:space-x-reverse sm:justify-center sm:mt-0">
        <FooterIcon class="" href="/">
          <InstagramSolid class="w-5 h-5 text-[#E0B87A] hover:text-font-600" />
        </FooterIcon>
        <FooterIcon href="/">
          <TwitterSolid class="w-5 h-5 text-[#E0B87A] hover:text-font-600" />
        </FooterIcon>
      </div>
    </div>
  </Footer> -->

<div>
	<section
		class=" grid h-max grid-cols-2 grid-rows-1 bg-gradient-to-b from-[#092417] to-[#0D2201] p-4 text-[#E0B87A]"
	>
		<div class="m-8 flex">
			<img
				src="finalLogo.svg"
				class="h-6 self-end justify-self-start sm:h-24"
				alt="Green Basil Logo"
			/>
		</div>

		<div class="m-8 flex-col ">
			<div class="font-editorialOld flex flex-col text-4xl">
				<a href="/" class="pr-4 hover:underline"> Home </a>
				<a href="about" class="pr-4 text-nowrap hover:underline"> Our Story </a>
				<a href="contact" class="pr-4 text-nowrap hover:underline"> Contact Us </a>
				<a href="menus" class="pr-4 text-nowrap hover:underline"> Menu </a>
				<a href="order" class="pr-4 text-nowrap hover:underline"> Order Online </a>
				<a href="bookings" class="pr-4 text-nowrap hover:underline"> Bookings </a>
				<a href="partnerships" class="pr-4 text-nowrap hover:underline"> Partnerships </a>
			</div>

			<div class="grid grid-cols-2 mt-12 pb-6 border-b-2 mb-6">
        <div class="flex flex-wrap">
          <img
            src="/webp/instagram.webp"
            class="h-6 self-end justify-self-start sm:h-8"
            alt="link to the Green Basil Thai Instagram Account"
          />

          <img
            src="/webp/facebook.webp"
            class="h-6 self-end justify-self-start sm:h-8"
            alt="link to the Green Basil Thai Facebook Account"
          />

          <a href="identity" class="text-2xl border-2 border-[#E0B87A] mt-2 rounded-2xl p-2 px-16 hover:font-bold">Make Reservation</a>

          

        </div>
        <div class="font-neueMontreal mb-8 ml-16 text-xs font-thin flex-col flex-nowrap">
          <a class="font-thin underline" href="https://www.google.com/maps/dir//4623+Kingsway,+Burnaby,+BC+V5H+2B3/@49.2291765,-123.0835327,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54867658ed9537d5:0x9e538cb3bbfb2f7f!2m2!1d-123.0011323!2d49.2292058?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D">4623 Kingsway, Burnaby, BC V5H 2B3</a>

          <p>5PM - 10PM WD/ 10:30PM WE</p>

          <a class="underline" href="tel:+16044391919">+1 (604) 439-1919</a>
        </div>

        
				
			</div>
      <p>© 2025 All Rights Reserved. Green Basil Thai Cuisine</p>
      
		</div>
    
	</section>
</div>
