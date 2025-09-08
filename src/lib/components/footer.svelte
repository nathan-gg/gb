<script>
</script>

<section
	class=" bg-primary text-secondary flex min-h-screen w-screen justify-between overflow-hidden p-4 py-8 xl:min-h-fit xl:grid-cols-2 xl:grid-rows-1"
>
	<div class="m-8 hidden w-1/4 xl:flex xl:w-1/8">
		<img src="finalLogo.svg" class="w-full self-end justify-self-start" alt="Green Basil Logo" />
	</div>

	<div class="m-2 flex flex-col gap-4 xl:m-8">
		<nav class="font-instrument group flex flex-col text-4xl">
			{#each [{ href: 'home', text: 'Home' }, { href: 'menus', text: 'Menus' }, { href: 'order', text: 'Order Online' }, { href: 'identity', text: 'The Basil Identity' }, { href: 'careers', text: 'Careers' }, { href: 'reservations', text: 'Reservations' }, { href: 'contact', text: 'Contact Us' }, { href: 'hours-location', text: 'Hours & Location' }] as link}
				<a
					href={link.href}
					class="pr-4 transition-opacity duration-200 group-hover:opacity-50 hover:!opacity-100"
				>
					{link.text}
				</a>
			{/each}
		</nav>

		<div class=" flex flex-col border-b-2 pb-8 xl:flex-row xl:pb-0">
			<div class="mb-8 flex flex-col justify-end xl:mb-0 xl:flex-row">
				<div class="flex flex-wrap">
					<a href="https://www.instagram.com/greenbasilthai.yvr/" target="_blank">
						<img
							src="/webp/instagram.webp"
							class="h-12 self-end justify-self-start"
							alt="link to the Green Basil Thai Instagram Account"
						/>
					</a>

					<a href="https://www.facebook.com/GreenBasil/" target="_blank">
						<img
							src="/webp/facebook.webp"
							class="h-12 self-end justify-self-start"
							alt="link to the Green Basil Thai Facebook Account"
						/>
					</a>
				</div>
			</div>
			<div
				class="font-MonaSans text-secondary mb-8 flex flex-col flex-nowrap gap-y-1 text-[1rem] font-extralight tracking-wide xl:mx-4 xl:ml-8"
			>
				<p class="">5PM - 10PM WD/ 10:30PM WE</p>

				<a
					class=" underline"
					href="https://www.google.com/maps/dir//4623+Kingsway,+Burnaby,+BC+V5H+2B3/@49.2291765,-123.0835327,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54867658ed9537d5:0x9e538cb3bbfb2f7f!2m2!1d-123.0011323!2d49.2292058?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"
					>4623 Kingsway, Burnaby, BC V5H 2B3</a
				>

				<a class="underline" href="tel:+16044391919">+1 (604) 439-1919</a>
			</div>
			<div class="col-span-2 xl:hidden">
				<img
					src="finalLogo.svg"
					class="w-1/2 self-end justify-self-start xl:h-24"
					alt="Green Basil Logo"
				/>
			</div>
		</div>
		<p class="font-MonaSans font-thin xl:font-extralight">
			© 2025 All Rights Reserved. Green Basil Thai Cuisine
		</p>
	</div>
</section>
