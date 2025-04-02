<script>
    import { Button, Dropdown, DropdownItem, DropdownDivider, Navbar, NavBrand, NavHamburger, NavUl, NavLi } from 'flowbite-svelte';
    import {BarsOutline} from 'flowbite-svelte-icons';
    let group3 = 2;
  </script>

<Navbar let:hidden let:toggle class="z-20 flex h-fit w-full align-middle justify-between border-b-0 border-[#E0B87A] bg-gradient-to-b from-[#092417] to-[#0D2201] text-[#E0B87A] font-serif">
    
    <NavBrand href="/">
      <img src="finalLogo.svg" class="justify-self-start h-6 sm:h-9" alt="Green Basil Logo" />
    </NavBrand>

    <NavHamburger on:click={toggle} />

    <NavUl {hidden} class="justify-self-end">
      <!-- <NavLi href="/" active={true}>Home</NavLi> -->
      <NavLi class="cursor-pointer">
        <BarsOutline class="w-8 h-8 ms-2 inline text-[#E0B87A]" />
      </NavLi>

      <Dropdown class="border text-[#E0B87A] bg-gradient-to-b from-[#092417] to-[#0D2201]">
        <DropdownItem href="/" class="hover:underline hover:transparent">Home</DropdownItem>
        <DropdownItem href="about" class="hover:underline hover:transparent">Our Story</DropdownItem>
        <DropdownItem href="bookings" class="hover:underline hover:transparent">Bookings</DropdownItem>
        <DropdownItem href="contact" class="hover:underline hover:transparent">Contact Us</DropdownItem>
        <DropdownItem href="menus" class="hover:underline hover:transparent">Menus</DropdownItem>
        <DropdownItem href="order" class="hover:underline hover:transparent">Order Online</DropdownItem>
        <DropdownItem href="careers" class="hover:underline hover:transparent">Careers</DropdownItem>
        <DropdownItem href="identity" class="hover:underline hover:transparent">The Basil Identity</DropdownItem>
        
      </Dropdown>

    </NavUl>

  </Navbar>



