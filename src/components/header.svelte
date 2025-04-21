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
	import { quintInOut } from 'svelte/easing';
	let group3 = 2;

	let showMenu = $state(false);
	let i = $state(5);

	function toggleMenu() {
		showMenu = !showMenu;
	}
</script>

<!-- <label>
	<input type="checkbox" bind:checked={showMenu} />
	show menu
</label> -->
<div class="bg-primary">
	<Navbar
		let:hidden
		let:toggle
		class="bg-primary text-secondary flex w-fit flex-row justify-between p-4 align-middle font-serif"
	>
		<NavBrand href="/">
			<img src="finalLogo.svg" class="h-6 justify-start sm:h-9" alt="Green Basil Logo" />
			<button class="justify-self-end" onclick={toggleMenu} class:active={showMenu}>
				<img
					src="menuBars.svg"
					class=" text-secondary ms-2 inline h-8 w-8"
					alt="Green Basil Logo"
				/>
			</button>
		</NavBrand>

		<!-- <NavHamburger on:click={toggle} /> -->

		<!-- <NavUl class="justify-self-end"> -->
		<!-- <NavLi href="/" active={true}>Home</NavLi>  -->
		<!-- <NavLi class="cursor-pointer"> -->
		<!-- <BarsOutline class="text-secondary ms-2 inline h-8 w-8" /> -->
		<!-- <img src="menuBars.svg" class="text-secondary ms-2 inline h-8 w-8" alt="Green Basil Logo" /> -->
		<!-- </NavLi> -->
		<Dropdown class="">
			{#if showMenu}
				<div
					transition:fly={{
						delay: 250,
						duration: 1000,
						easing: quintInOut, 
						x: 500,
						y: 0
					}}
					class=""
				>
					<!-- <div class="font-instrument flex flex-col text-4xl">
    <a href="/menus" class="hover:transparent hover:underline">Menus</a>
  </div> -->

					<!-- <div
				transition:fly={{
					delay: 250,
					duration: 300,
					easing: quintOut,
					x: 1000,
					y: 0
				}}
				class="bg-primary flex h-screen w-2/4 flex-col"
			> -->
					<div class="bg-primary text-secondary font-instrument flex flex-col text-6xl absolute p-16 h-screen w-max">
						<!-- <DropdownItem href="/" class="hover:transparent hover:underline">Home</DropdownItem> -->
						<DropdownItem href="menus" class="hover:transparent hover:underline">Menus</DropdownItem
						>
						<DropdownItem href="order" class="hover:transparent hover:underline"
							>Order Online</DropdownItem
						>
						<DropdownItem href="identity" class="hover:transparent hover:underline"
							>The Basil Identity</DropdownItem
						>
						<DropdownItem href="contact" class="hover:transparent hover:underline"
							>Contact Us</DropdownItem
						>
						<DropdownItem href="careers" class="hover:transparent hover:underline"
							>Careers</DropdownItem
						>
					</div>

					<div></div>
				</div>
			{/if}
			<!-- </div> -->
		</Dropdown>
		<!-- </NavUl> -->
	</Navbar>
</div>

<!-- {#if showMenu}
	<div
		transition:fly={{
			delay: 250,
			duration: 300,
			easing: quintOut,
			x: 1000,
			y: 0
		}}
		class=" !bg-primary text-secondary absolute h-screen w-2/4"
	>
  <div class="font-instrument flex flex-col text-4xl">
    <a href="/menus" class="hover:transparent hover:underline">Menus</a>
  </div>
	</div>
{/if} -->
