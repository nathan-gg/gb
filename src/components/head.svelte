<script>
	import { fly } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import { sineInOut } from 'svelte/easing';
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	let showMenu = $state(false);
	let menuElement = $state();

	function toggleMenu() {
		showMenu = !showMenu;
	}

	export function clickOutside(node) {
		const handleClick = (event) => {
			if (node && !node.contains(event.target) && !event.defaultPrevented) {
				showMenu = false;
			}
		};

		document.addEventListener('click', handleClick, true);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}


	function handleClickOutside(event) {
		alert('Click outside!');
	}
</script>

<section class="overflow-x-hidden" use:clickOutside onclick_outside={handleClickOutside}>
	<div class="bg-primary h-16 w-full p-4 px-8 sm:p-4 sm:px-16">
		<div class="z-30 flex justify-between">
			<a href="/home">
				<img src="finalLogo.svg" class="h-8 justify-start" alt="Green Basil Logo" />
			</a>
			{#if showMenu}
				<button onclick={toggleMenu} class:active={showMenu}>
					<img src="closeMenu.svg" class="h-8" alt="Close Website Directory" />
				</button>
			{:else}
				<button onclick={toggleMenu}>
					<img src="menuBars.svg" class="h-8" alt="Open Website Directory" />
				</button>
			{/if}
		</div>

		{#if showMenu}
			<div
				id="MENU"
				bind:this={menuElement}
				transition:fly={{
					delay: 0,
					duration: 500,
					easing: sineInOut,
					x: 500,
					y: 0
				}}
				class="bg-tertiary text-darkText fixed top-16 right-0 z-20 flex h-screen w-full flex-col p-12 sm:w-1/2 md:w-1/4"
			>
				<div
					class=" font-instrument flex flex-col justify-between text-right text-4xl sm:text-2xl lg:text-4xl"
				>
					<a href="/home" onclick={toggleMenu}>Home</a>
					<a href="/menus" onclick={toggleMenu}>Menus</a>
					<a href="/order" onclick={toggleMenu}>Order Online</a>
					<a href="/identity" onclick={toggleMenu}>The Basil Identity</a>
					<a href="/careers" onclick={toggleMenu}>Careers</a>
					<a href="/reservations" onclick={toggleMenu}>Reservations</a>
					<a href="/contact" onclick={toggleMenu}>Contact Us</a>
				</div>
				<div
					class="font-DMSans mt-6 grid grid-cols-2 text-xs sm:mt-12 md:grid-cols-1 lg:grid-cols-2"
				>
					<div class="col-span-1 flex flex-col md:mb-4">
						<a
							class="hover:underline"
							href="https://www.instagram.com/greenbasilthai.yvr/"
							target="_blank"
							>Instagram
						</a>

						<a class="hover:underline" href="https://www.facebook.com/GreenBasil/" target="_blank"
							>Facebook
						</a>
					</div>
					<div class="text-darkText col-span-1 mb-8 flex flex-col">
						<a
							class="mb-2 underline"
							href="https://www.google.com/maps/dir//4623+Kingsway,+Burnaby,+BC+V5H+2B3/@49.2291765,-123.0835327,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54867658ed9537d5:0x9e538cb3bbfb2f7f!2m2!1d-123.0011323!2d49.2292058?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"
							>4623 Kingsway, Burnaby, BC V5H 2B3</a
						>

						<p class="mb-2">5PM - 10PM WD/ 10:30PM WE</p>

						<a class="mb-2 underline" href="tel:+16044391919">+1 (604) 439-1919</a>
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>
