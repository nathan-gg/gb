<script>
	import { fly } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let showMenu = $state(false);
	let menuElement = $state();

	function toggleMenu() {
		showMenu = !showMenu;
	}

	// function handleOutsideClick(event) {
	// 	// If the menu is shown and the click is outside the menu
	// 	if (showMenu && menuElement && !menuElement.contains(event.target)) {
	// 		// Check if the click was on the menu toggle button
	// 		const toggleButton = document.querySelector('button[onclick]');
	// 		if (!toggleButton.contains(event.target)) {
	// 			showMenu = false;
	// 		}
	// 	}
	// }
	
	// // Set up and remove event listeners
	// if (showMenu) {
	// 	// Next tick to ensure the DOM is updated
	// 	setTimeout(() => {
	// 		window.addEventListener('click', handleOutsideClick);
	// 	}, 0);
	// } else {
	// 	window.removeEventListener('click', handleOutsideClick);
	// }
	
	// // Clean up on component unmount
	// onMount(() => {
	// 	return () => {
	// 		window.removeEventListener('click', handleOutsideClick);
	// 	};
	// });


</script>

<div class="bg-primary h-fit p-4">
	<div class="z-30 flex justify-between">
		<a href="/">
			<img src="finalLogo.svg" class="h-6 justify-start sm:h-10" alt="Green Basil Logo" />
		</a>
		{#if showMenu}
			<button onclick={toggleMenu} class:active={showMenu}>
				<img src="closeMenu.svg" class="h-10 w-10" alt="Close Website Directory" />
			</button>
		{:else}
			<button onclick={toggleMenu}>
				<img src="menuBars.svg" class="h-10 w-10" alt="Open Website Directory" />
			</button>
		{/if}
	</div>

	{#if showMenu}
		<div
			
			transition:fly={{
				delay: 250,
				duration: 500,
				easing: quintInOut,
				x: 500,
				y: 0
			}}
			class="bg-tertiary text-darkText fixed top-18 right-0 flex h-screen w-1/4 flex-col p-12"
		>
			<div class=" font-instrument flex flex-col justify-between text-right text-6xl">
				<a href="/menus" onclick={toggleMenu}>Menus</a>
				<a href="/order" onclick={toggleMenu}>Order Online</a>
				<a href="/identity" onclick={toggleMenu}>The Basil Identity</a>
				<a href="/careers" onclick={toggleMenu}>Careers</a>
				<a href="/reservations" onclick={toggleMenu}>Reservations</a>
				<a href="/contact" onclick={toggleMenu}>Contact Us</a>
			</div>
			<div class="grid grid-cols-2 mt-12 font-DMSans font-thin ">
				<div class="flex flex-col col-span-1">
					<a href="https://www.instagram.com/greenbasilthai.yvr/" target="_blank">Instagram </a>

					<a href="https://www.facebook.com/GreenBasil/" target="_blank">Facebook </a>
				</div>
				<div class="col-span-1  text-darkText mb-8 flex flex-col text-s">
					<a
						class="font-thin underline mb-2"
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
