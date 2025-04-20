<script>
	import {
		Button,
		Dropdown,
		DropdownItem,
		DropdownDivider,
		Navbar,
		NavBrand,
		NavHamburger,
		NavUl,
		NavLi
	} from 'flowbite-svelte';
	import { BarsOutline } from 'flowbite-svelte-icons';
	import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
	let group3 = 2;

	let showMenu = $state(true);
	let i = $state(5);
</script>

<label>
	<input type="checkbox" bind:checked={showMenu} />
	show menu
</label>

<Navbar
	let:hidden
	let:toggle
	class="bg-lightText z-20 flex h-fit w-full justify-between border-b-0 border-[#E0B87A] bg-gradient-to-b from-[#092417] to-[#0D2201] align-middle font-serif text-[#E0B87A]"
>
	<NavBrand href="/">
		<img src="finalLogo.svg" class="h-6 justify-self-start sm:h-9" alt="Green Basil Logo" />
	</NavBrand>

	<!-- <NavHamburger on:click={toggle} /> -->
	{#if showMenu}
		<div transition:fly={{ 
      delay: 250, 
      duration: 300, 
      easing: quintOut, 
      x: 100, 
      y: 0 
       }}>
			<NavUl {hidden} class="justify-self-end">
				<!-- <NavLi href="/" active={true}>Home</NavLi> -->
				<NavLi class="cursor-pointer">
					<BarsOutline class="ms-2 inline h-8 w-8 text-[#E0B87A]" />
				</NavLi>

				<Dropdown class="border bg-gradient-to-b from-[#092417] to-[#0D2201] text-[#E0B87A]">
					<DropdownItem href="/" class="hover:transparent hover:underline">Home</DropdownItem>
					<DropdownItem href="menus" class="hover:transparent hover:underline">Menus</DropdownItem>
					<DropdownItem href="order" class="hover:transparent hover:underline"
						>Order Online</DropdownItem
					>
					<DropdownItem href="identity" class="hover:transparent hover:underline"
						>The Basil Identity</DropdownItem
					>
					<!-- <DropdownItem href="bookings" class="hover:underline hover:transparent">Bookings</DropdownItem> -->
					<DropdownItem href="contact" class="hover:transparent hover:underline"
						>Contact Us</DropdownItem
					>
					<DropdownItem href="careers" class="hover:transparent hover:underline"
						>Careers</DropdownItem
					>
				</Dropdown>
			</NavUl>
		</div>
	{/if}
</Navbar>
