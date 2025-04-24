<script lang="ts">
	import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling';

	let {
		thisRef,
		goTo,
		goBack,
		title,
		thaiTitle,
		body,
		arrowText,
		arrow = true,
		prevArrowText,
		prevArrow = false,
		image,
		ifPage1 = false,
		ifPage2 = false
	} = $props();

	let salad = '/full-menu#salad'

	let curTab = $state(0);
</script>
<div class="snap-y scroll-mb-16">


<section use:scrollRef={thisRef} id="salad" class="snap-start snap-normal relative flex min-h-screen">
	<div class="bg-tertiary flex w-6/12 flex-auto flex-col font-serif text-[#000000]">
		{#if prevArrow}
			<div class="absolute top-32 left-1/4 flex -translate-x-1/2 transform flex-col items-center">
				<div use:scrollTo={goBack} class="text-lightText hover:text-darkText">
					<p>
						{prevArrowText}
					</p>
				</div>
			</div>
		{/if}

		<div class="m-48 mt-8 flex-grow">
			<h1 class="text-darkText mt-24 text-6xl">Salad</h1>
			<h1 class="text-lightText mb-12 text-4xl">สลัด</h1>
		
			<div class="flex text-darkText mt-8 mb-4">
				<div class="flex flex-row justify-between w-full">
					<div class="pr-8">
						<p class=" font-extrabold">16. Som Tum</p>
						<p class="font-extralight">Seasonal green papaya, garlic, tomatoes, roasted peanuts, lime juice, bird’s eye chilli</p>
					</div>
					<div>
						<p>12.95</p>
					</div>
				</div>
			</div>
			<div class="flex text-darkText mb-4">
				<div class="flex flex-row justify-between w-full">
					<div class="pr-8">
						<p class=" font-extrabold">17. Yum Woon San (Salad Lettuce Wrap) </p>
						<p class="font-extralight">Glass noodles, minced chicken, shrimps, shallots, mint, lime juice, bird’s eye chilli</p>
					</div>
					<div>
						<p>13.95</p>
					</div>
				</div>
			</div>
			<div class="flex text-darkText mb-4">
				<div class="flex flex-row justify-between w-full">
					<div class="pr-8">
						<p class=" font-extrabold">18. Yum Ta-Lay</p>
						<p class="font-extralight">Shrimp, bay scallops and squid tossed with fresh lime, fish sauce and bird’s eye chilli</p>
					</div>
					<div>
						<p>14.95</p>
					</div>
				</div>
			</div>
			<div class="flex text-darkText mb-4">
				<div class="flex flex-row justify-between w-full">
					<div class="pr-8">
						<p class=" font-extrabold">19. Pla Goong </p>
						<p class="font-extralight">Spicy tiger prawns, lemongrass, shallots, fish sauce, lime juice and Thai spices</p>
					</div>
					<div>
						<p>14.95</p>
					</div>
				</div>
			</div>
		</div>


		{#if arrow}
			<div
				class="absolute bottom-56 left-1/4 flex -translate-x-1/2 transform flex-col items-center"
			>
				<div use:scrollTo={goTo} class="text-lightText hover:text-darkText">
					<p>
						{arrowText}
					</p>
				</div>
			</div>
		{/if}
	

		
	</div>

	<div class="w-1/2 flex-auto">
		<img src={image} class="h-full object-cover" alt="" />
	</div>
</section>

<section use:scrollRef={thisRef} id="salad" class="relative flex min-h-screen snap-start snap-normal">
	<div class="bg-tertiary flex w-6/12 flex-auto flex-col font-serif text-[#000000]">
		{#if prevArrow}
			<div class="absolute top-32 left-1/4 flex -translate-x-1/2 transform flex-col items-center">
				<div use:scrollTo={goBack} class="text-lightText hover:text-darkText">
					<p>
						{prevArrowText}
					</p>
				</div>
			</div>
		{/if}

		<div class="m-48 mt-8 flex-grow">
			<h1 class="text-darkText mt-24 text-6xl">Salad</h1>
			<h1 class="text-lightText mb-12 text-4xl">สลัด</h1>
		
			<div class="flex text-darkText mt-8 mb-4">
				<div class="flex flex-row justify-between w-full">
					<div class="pr-8">
						<p class=" font-extrabold">20. Yum Pla Meuk</p>
						<p class="font-extralight">Squids with lime juice, shallots, fish sauce and bird’s eye chilli</p>
					</div>
					<div>
						<p>14.50</p>
					</div>
				</div>
			</div>
			<div class="flex text-darkText mb-4">
				<div class="flex flex-row justify-between w-full">
					<div class="pr-8">
						<p class=" font-extrabold">21. Yum Neuua </p>
						<p class="font-extralight">Strip loin beef, lime juice, onions, scallions and Thai chilli</p>
					</div>
					<div>
						<p>14.50</p>
					</div>
				</div>
			</div>
			<div class="flex text-darkText mb-4">
				<div class="flex flex-row justify-between w-full">
					<div class="pr-8">
						<p class=" font-extrabold">22. Larb</p>
						<p class="font-extralight">Minced chicken or beef, with shallots, lime juice and roasted chilli</p>
					</div>
					<div>
						<p>13.50</p>
					</div>
				</div>
			</div>
			
		</div>


		{#if arrow}
			<div
				class="absolute bottom-56 left-1/4 flex -translate-x-1/2 transform flex-col items-center"
			>
				<div use:scrollTo={goTo} class="text-lightText hover:text-darkText">
					<p>
						{arrowText}
					</p>
				</div>
			</div>
		{/if}
	

		
	</div>

	<div class="w-1/2 flex-auto">
		<img src={image} class="h-full object-cover" alt="" />
	</div>
</section>

<section use:scrollRef={thisRef} id="curry" class="relative snap-start snap-normal flex min-h-screen">
	<div class="bg-tertiary flex w-6/12 flex-auto flex-col font-serif text-[#000000]">
		{#if prevArrow}
			<div class="absolute top-32 left-1/4 flex -translate-x-1/2 transform flex-col items-center">
				<div use:scrollTo={goBack} class="text-lightText hover:text-darkText">
					<p>
						{prevArrowText}
					</p>
				</div>
			</div>
		{/if}

		<div class="m-48 mt-8 flex-grow">
			<h1 class="text-darkText mt-24 text-6xl">Curry</h1>
			<h1 class="text-lightText mb-12 text-4xl">แกง</h1>
		
			<div class="flex text-darkText mt-8 mb-4">
				<div class="flex flex-row justify-between w-full">
					<div class="pr-8">
						<p class=" font-extrabold"> </p>
						<p class="font-extralight"> </p>
					</div>
					<div>
						<p> </p>
					</div>
				</div>
			</div>
			<div class="flex text-darkText  mb-4">
				<div class="flex flex-row justify-between w-full">
					<div class="pr-8">
						<p class=" font-extrabold"> </p>
						<p class="font-extralight"> </p>
					</div>
					<div>
						<p> </p>
					</div>
				</div>
			</div>
			<div class="flex text-darkText  mb-4">
				<div class="flex flex-row justify-between w-full">
					<div class="pr-8">
						<p class=" font-extrabold"> </p>
						<p class="font-extralight"> </p>
					</div>
					<div>
						<p> </p>
					</div>
				</div>
			</div>
			<div class="flex text-darkText mb-4">
				<div class="flex flex-row justify-between w-full">
					<div class="pr-8">
						<p class=" font-extrabold"> </p>
						<p class="font-extralight"> </p>
					</div>
					<div>
						<p> </p>
					</div>
				</div>
			</div>
			<div class="flex text-darkText mb-4">
				<div class="flex flex-row justify-between w-full">
					<div class="pr-8">
						<p class=" font-extrabold"> </p>
						<p class="font-extralight"> </p>
					</div>
					<div>
						<p> </p>
					</div>
				</div>
			</div>
			
		</div>


		{#if arrow}
			<div
				class="absolute bottom-56 left-1/4 flex -translate-x-1/2 transform flex-col items-center"
			>
				<div use:scrollTo={goTo} class="text-lightText hover:text-darkText">
					<p>
						{arrowText}
					</p>
				</div>
			</div>
		{/if}
	

		
	</div>

	<div class="w-1/2 flex-auto">
		<img src={image} class="h-full object-cover" alt="" />
	</div>
</section>

<section use:scrollRef={thisRef} id="vegetables" class="relative snap-start snap-normal flex min-h-screen">
	<div class="bg-tertiary flex w-6/12 flex-auto flex-col font-serif text-[#000000]">
		{#if prevArrow}
			<div class="absolute top-32 left-1/4 flex -translate-x-1/2 transform flex-col items-center">
				<div use:scrollTo={goBack} class="text-lightText hover:text-darkText">
					<p>
						{prevArrowText}
					</p>
				</div>
			</div>
		{/if}

		<div class="m-48 mt-8 flex-grow">
			<h1 class="text-darkText mt-24 text-6xl">Vegetables</h1>
			<h1 class="text-lightText mb-12 text-4xl">ผัก</h1>
		
			<div class="flex text-darkText mt-8 mb-4">
				<div class="flex flex-row justify-between w-full">
					<div class="pr-8">
						<p class=" font-extrabold">44. Tofu Phat Bai Ga-Phrao</p>
						<p class="font-extralight">Stir-fried soft tofu with seasonal vegetables, white button mushrooms, chilli paste and holy basil</p>
					</div>
					<div>
						<p>17.95</p>
					</div>
				</div>
			</div>
			<div class="flex text-darkText mb-4">
				<div class="flex flex-row justify-between w-full">
					<div class="pr-8">
						<p class=" font-extrabold">45. Phat Phak Ruaam Mit </p>
						<p class="font-extralight">Stir-fried seasonal vegetables, white button mushrooms and tofu with your favourite sauce (Black Bean, Thai Peanut Sauce, Garlic, Oyster or Wild Bangkok Delight)</p>
					</div>
					<div>
						<p>17.95</p>
					</div>
				</div>
			</div>
			<div class="flex text-darkText mb-4">
				<div class="flex flex-row justify-between w-full">
					<div class="pr-8">
						<p class=" font-extrabold">46. Ruaam Mit Phat Bai Horapa </p>
						<p class="font-extralight">Seasonal vegetables, mushrooms, pressed tofu, bean sprouts, with house basil and garlic</p>
					</div>
					<div>
						<p>17.95</p>
					</div>
				</div>
			</div>
			<div class="flex text-darkText mb-4">
				<div class="flex flex-row justify-between w-full">
					<div class="pr-8">
						<p class=" font-extrabold">47. Thuaa Phat Phrik Khing</p>
						<p class="font-extralight">Stir-fried green beans, kaffir lime leaves, basil, in House Spicy Sauce</p>
					</div>
					<div>
						<p>17.95</p>
					</div>
				</div>
			</div>
			
		</div>


		{#if arrow}
			<div
				class="absolute bottom-56 left-1/4 flex -translate-x-1/2 transform flex-col items-center"
			>
				<div use:scrollTo={goTo} class="text-lightText hover:text-darkText">
					<p>
						{arrowText}
					</p>
				</div>
			</div>
		{/if}
	

		
	</div>

	<div class="w-1/2 flex-auto">
		<img src={image} class="h-full object-cover" alt="" />
	</div>
</section>

<section use:scrollRef={thisRef} id="vegetables" class="relative snap-start snap-normal flex min-h-screen">
	<div class="bg-tertiary flex w-6/12 flex-auto flex-col font-serif text-[#000000]">
		{#if prevArrow}
			<div class="absolute top-32 left-1/4 flex -translate-x-1/2 transform flex-col items-center">
				<div use:scrollTo={goBack} class="text-lightText hover:text-darkText">
					<p>
						{prevArrowText}
					</p>
				</div>
			</div>
		{/if}

		<div class="m-48 mt-8 flex-grow">
			<h1 class="text-darkText mt-24 text-6xl">Desserts</h1>
			<h1 class="text-lightText mb-12 text-4xl">ขนม</h1>
		
			<div class="flex text-darkText mt-8 mb-4">
				<div class="flex flex-row justify-between w-full">
					<div class="pr-8">
						<p class=" font-extrabold">Fresh Mango Sticky Rice (Seasonal)</p>
						
					</div>
					<div>
						<p>7</p>
					</div>
				</div>
			</div>
			<div class="flex text-darkText mb-4">
				<div class="flex flex-row justify-between w-full">
					<div class="pr-8">
						<p class=" font-extrabold">Brown Sticky Rice with Vanilla Ice-Cream</p>
						
					</div>
					<div>
						<p>7</p>
					</div>
				</div>
			</div>
			<div class="flex text-darkText mb-4">
				<div class="flex flex-row justify-between w-full">
					<div class="pr-8">
						<p class=" font-extrabold">Deep-Fried Banana with Vanilla Ice-Cream</p>
						
					</div>
					<div class="">
						<p>7</p>
					</div>
				</div>
			</div>
			<div class="flex text-darkText mb-4">
				<div class="flex flex-row justify-between w-full">
					<div class="pr-8">
						<p class=" font-extrabold">Green Tea Ice-Cream</p>
						
					</div>
					<div>
						<p>6</p>
					</div>
				</div>
			</div>
			<div class="flex text-darkText mb-4">
				<div class="flex flex-row justify-between w-full">
					<div class="pr-8">
						<p class=" font-extrabold">Mango Ice-Cream</p>
						
					</div>
					<div>
						<p>6</p>
					</div>
				</div>
			</div>
			
		</div>


		{#if arrow}
			<div
				class="absolute bottom-56 left-1/4 flex -translate-x-1/2 transform flex-col items-center"
			>
				<div use:scrollTo={goTo} class="text-lightText hover:text-darkText">
					<p>
						{arrowText}
					</p>
				</div>
			</div>
		{/if}
	

		
	</div>

	<div class="w-1/2 flex-auto">
		<img src={image} class="h-full object-cover" alt="" />
	</div>
</section>



</div>