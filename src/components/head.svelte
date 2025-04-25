<script>
	import { fly } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import { sineInOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let showMenu = $state(false);
	let menuElement = $state();

	function toggleMenu() {
		showMenu = !showMenu;
	}

	// function handleClickOutside(event) {
	// 	// Only check if the menu is currently shown
	// 	if (showMenu == true) {
	// 		// Check if the click is outside the menu and not on the toggle button
	// 		if (!menuElement.contains(event.target)) {
	// 			showMenu = false;
	// 		}
	// 	}
	// }

	// onMount(() => {
	// 	// Add click event listener to the document when component mounts
	// 	document.addEventListener('click', handleClickOutside);

	// 	// Clean up the event listener when component is destroyed
	// 	return () => {
	// 		document.removeEventListener('click', handleClickOutside);
	// 	};
	// });
</script>

<div class="bg-primary p-4 px-8 h-16 sm:p-4 sm:px-16 w-screen" >
	
	<div class="z-30 flex justify-between">
		<a href="/home">
			<img src="finalLogo.svg" class="h-8 justify-start " alt="Green Basil Logo" />
		</a>
		{#if showMenu}
			<button onclick={toggleMenu}  class:active={showMenu}>
				<img src="closeMenu.svg" class="h-8 " alt="Close Website Directory" />
			</button>
		{:else}
			<button onclick={toggleMenu}>
				<img src="menuBars.svg" class="h-8 " alt="Open Website Directory" />
			</button>
		{/if}
	</div>

	{#if showMenu}
		<div
			id="MENU"
			
			transition:fly={{
				delay: 0,
				duration: 500,
				easing: sineInOut,
				x: 500,
				y: 0
			}}
			class="bg-tertiary text-darkText fixed top-16 right-0 flex h-screen w-full sm:w-1/2 md:w-1/4 flex-col p-12 z-20"
		>
			<div class=" font-instrument flex flex-col justify-between text-right text-4xl sm:text-2xl lg:text-4xl">
				<a href="/home" onclick={toggleMenu}>Home</a>
				<a href="/menus" onclick={toggleMenu}>Menus</a>
				<a href="/order" onclick={toggleMenu}>Order Online</a>
				<a href="/identity" onclick={toggleMenu}>The Basil Identity</a>
				<a href="/careers" onclick={toggleMenu}>Careers</a>
				<a href="/reservations" onclick={toggleMenu}>Reservations</a>
				<a href="/contact" onclick={toggleMenu}>Contact Us</a>
			</div>
			<div class="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 mt-6 sm:mt-12 font-DMSans text-xs ">
				<div class="flex flex-col col-span-1 md:mb-4">
					<a href="https://www.instagram.com/greenbasilthai.yvr/" target="_blank">Instagram </a>

					<a href="https://www.facebook.com/GreenBasil/" target="_blank">Facebook </a>
				</div>
				<div class="col-span-1  text-darkText mb-8 flex flex-col ">
					<a
						class="underline mb-2"
						href="https://www.google.com/maps/dir//4623+Kingsway,+Burnaby,+BC+V5H+2B3/@49.2291765,-123.0835327,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54867658ed9537d5:0x9e538cb3bbfb2f7f!2m2!1d-123.0011323!2d49.2292058?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"
						>4623 Kingsway, Burnaby, BC V5H 2B3</a
					>

					<p class="mb-2" >5PM - 10PM WD/ 10:30PM WE</p>

					<a class="underline mb-2" href="tel:+16044391919">+1 (604) 439-1919</a>
				</div>
			</div>
		</div>
	{/if}
</div>
