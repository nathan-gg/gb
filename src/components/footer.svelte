<script>
</script>

<div>
	<section
		class=" bg-primary text-secondary grid h-fit w-screen overflow-hidden p-4 sm:grid-cols-2 sm:grid-rows-1"
	>
		<div class="m-8 hidden sm:flex">
			<img
				src="finalLogo.svg"
				class="h-6 self-end justify-self-start sm:h-24"
				alt="Green Basil Logo"
			/>
		</div>

		<div class="m-2 flex-col sm:m-8">
			<nav class="font-instrument group flex flex-col text-4xl">
				{#each [{ href: 'home', text: 'Home' }, { href: 'menus', text: 'Menus' }, { href: 'order', text: 'Order Online' }, { href: 'identity', text: 'The Basil Identity' }, { href: 'careers', text: 'Careers' }, { href: 'reservations', text: 'Reservations' }, { href: 'contact', text: 'Contact Us' }] as link}
					<a
						href={link.href}
						class="pr-4 transition-opacity duration-200 group-hover:opacity-50 hover:!opacity-100"
					>
						{link.text}
					</a>
				{/each}
			</nav>

			<div class=" mt-4 mb-6 grid grid-cols-1 md:grid-cols-2 border-b-2 pb-6 sm:mt-12">
				<div class="mb-8 flex flex-col justify-end sm:mb-0">
					<div class="flex flex-wrap">
						<a href="https://www.instagram.com/greenbasilthai.yvr/" target="_blank">
							<img
								src="/webp/instagram.webp"
								class="h-6 self-end justify-self-start sm:h-8"
								alt="link to the Green Basil Thai Instagram Account"
							/>
						</a>

						<a href="https://www.facebook.com/GreenBasil/" target="_blank">
							<img
								src="/webp/facebook.webp"
								class="h-6 self-end justify-self-start sm:h-8"
								alt="link to the Green Basil Thai Facebook Account"
							/>
						</a>
					</div>
					<!-- <a
						href="order"
						class="md:4 hover:bg-secondary hover:text-primary font-MonaSans mt-2 h-fit w-fit rounded-xl border-1 border-[#E0B87A] p-2 text-sm sm:border-2 md:text-lg"
						>Make Reservation</a
					> -->
				</div>
				<div
					class="font-MonaSans text-secondary md:text-xl mx-4 mb-8 flex-col flex-nowrap text-xs font-extralight tracking-wide sm:mb-0 sm:ml-4 md:ml-8"
				>
					<a
						class=" underline"
						href="https://www.google.com/maps/dir//4623+Kingsway,+Burnaby,+BC+V5H+2B3/@49.2291765,-123.0835327,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54867658ed9537d5:0x9e538cb3bbfb2f7f!2m2!1d-123.0011323!2d49.2292058?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"
						>4623 Kingsway, Burnaby, BC V5H 2B3</a
					>

					<p class="mt-4 mb-4">5PM - 10PM WD/ 10:30PM WE</p>

					<a class="underline" href="tel:+16044391919">+1 (604) 439-1919</a>
				</div>
				<div class="col-span-2 sm:hidden">
					<img
						src="finalLogo.svg"
						class="w-1/2 self-end justify-self-start sm:h-24"
						alt="Green Basil Logo"
					/>
				</div>
			</div>
			<p class="font-MonaSans font-thin sm:font-extralight">
				© 2025 All Rights Reserved. Green Basil Thai Cuisine
			</p>
		</div>
	</section>
</div>
