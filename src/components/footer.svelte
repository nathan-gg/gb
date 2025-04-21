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

<div>
	<section class=" bg-primary grid h-max grid-cols-2 grid-rows-1 p-4 text-[#E0B87A]">
		<div class="m-8 flex">
			<img
				src="finalLogo.svg"
				class="h-6 self-end justify-self-start sm:h-24"
				alt="Green Basil Logo"
			/>
		</div>

		<div class="m-8 flex-col">
			<div class=" font-instrument flex flex-col text-4xl">
				<a href="/" class="pr-4 hover:underline"> Home </a>
				<a href="about" class="pr-4 text-nowrap hover:underline"> Our Story </a>
				<a href="contact" class="pr-4 text-nowrap hover:underline"> Contact Us </a>
				<a href="menus" class="pr-4 text-nowrap hover:underline"> Menu </a>
				<a href="order" class="pr-4 text-nowrap hover:underline"> Order Online </a>
				<a href="bookings" class="pr-4 text-nowrap hover:underline"> Bookings </a>
				<a href="partnerships" class="pr-4 text-nowrap hover:underline"> Partnerships </a>
			</div>

			<div class="mt-12 mb-6 grid grid-cols-2 border-b-2 pb-6">
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
					<a
						href="order"
						class="mt-2 rounded-2xl border-2 border-[#E0B87A] p-2 px-16 text-2xl hover:font-bold"
						>Make Reservation</a
					>
				</div>
				<div class="font-DMSans text-darkText mb-8 ml-16 flex-col flex-nowrap text-xs font-thin">
					<a
						class="font-thin underline"
						href="https://www.google.com/maps/dir//4623+Kingsway,+Burnaby,+BC+V5H+2B3/@49.2291765,-123.0835327,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54867658ed9537d5:0x9e538cb3bbfb2f7f!2m2!1d-123.0011323!2d49.2292058?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"
						>4623 Kingsway, Burnaby, BC V5H 2B3</a
					>

					<p>5PM - 10PM WD/ 10:30PM WE</p>

					<a class="underline" href="tel:+16044391919">+1 (604) 439-1919</a>
				</div>
			</div>
			<p>© 2025 All Rights Reserved. Green Basil Thai Cuisine</p>
		</div>
	</section>
</div>
