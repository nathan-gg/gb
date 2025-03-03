<script>
    import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand, FooterIcon } from 'flowbite-svelte';
    import { FacebookSolid, GithubSolid, DiscordSolid, TwitterSolid, InstagramSolid } from 'flowbite-svelte-icons';
  </script>
  
  <Footer footerType="socialmedia" class="border-t-1 border-[#E0B87A] bg-gradient-to-b from-[#092417] to-[#0D2201] text-[#E0B87A] font-serif">
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
  </Footer>

<!-- !-- <div>
    
    <section class=" block items-stretch h-max bg-gradient-to-b from-[#092417] to-[#0D2201] text-[#E0B87A] border-solid border-t-1 border-[#E0B87A] p-4">
    

        <div class="flex justify-start m-8">
            <a href="/" class="pr-4 text-nowrap hover:underline">
                Home
            </a>
            <a href="about" class="px-4 text-nowrap hover:underline">
                Our Story
            </a>
            <a href="contact" class="px-4 text-nowrap hover:underline">
                Contact Us
            </a>
            <a href="menus" class="px-4 text-nowrap hover:underline">
                Menu
            </a>
            <a href="order" class="px-4 text-nowrap hover:underline">
                Order Online
            </a>
            <a href="bookings" class="px-4 text-nowrap hover:underline">
                Bookings
            </a>
            <a href="partnerships" class="px-4 text-nowrap hover:underline">
                Partnerships
            </a>
        </div>

        <div class="m-8 block">

            <a class="mb-8 hover:underline" href="https://www.google.com/maps/dir//4623+Kingsway,+Burnaby,+BC+V5H+2B3/@49.2291765,-123.0835327,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54867658ed9537d5:0x9e538cb3bbfb2f7f!2m2!1d-123.0011323!2d49.2292058?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D">
                        Green Basil Thai<br />4623 Kingsway, Burnaby, BC V5H 2B3
            </a>

            <br /><br />

            <a class="hover:underline" href="tel:+16044391919">+1 (604) 439-1919</a>
            
        </div>

    </section>

</div> -->