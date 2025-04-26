<script lang="ts">
	import Header from '../components/head.svelte';
	import Footer from '../components/footer.svelte';

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

</script>


	<section id="salad" class=" bg-tertiary relative flex flex-col sm:flex-row h-fit">
		<div class="flex sm:hidden">
			<img src='/webp/careersKitchenHelperMobile.webp' class="w-screen object-cover" alt="" />
		</div>
		<div class="text-darkText flex sm:w-1/2 justify-center items-center flex-col font-instrument">
			
				<div
					class="mt-6 md:mt-12"
				>
					<div use:scrollTo={{ ref: 'appetizers', offset:-64 }} class=" font-DMSans text-lightText hover:text-darkText">
						<p >
							Appetizers
						</p>
					</div>
				</div>
			<div class="mx-8 sm:mx-16 xl:mx-50 mt-12 mb-12 sm:my-16 md:my-24  xl:my-36  flex flex-col">
				<h1 class="text-darkText text-6xl mb-4">Salads</h1>
				<h1 class="text-lightText mb-12 text-4xl">สลัด</h1>
	
				<div class="text-darkText font-DMSans mt-8 mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">16. Som Tum</p>
							<p class="font-light">
								Seasonal green papaya, garlic, tomatoes, roasted peanuts, lime juice, bird’s eye
								chilli
							</p>
						</div>
						<div>
							<p>12.95</p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">17. Yum Woon San (Salad Lettuce Wrap)</p>
							<p class="font-light">
								Glass noodles, minced chicken, shrimps, shallots, mint, lime juice, bird’s eye
								chilli
							</p>
						</div>
						<div>
							<p>13.95</p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">18. Yum Ta-Lay</p>
							<p class="font-light">
								Shrimp, bay scallops and squid tossed with fresh lime, fish sauce and bird’s eye
								chilli
							</p>
						</div>
						<div>
							<p>14.95</p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">19. Pla Goong</p>
							<p class="font-light">
								Spicy tiger prawns, lemongrass, shallots, fish sauce, lime juice and Thai spices
							</p>
						</div>
						<div>
							<p>14.95</p>
						</div>
					</div>
				</div>
			</div>
				
		
		
				<div
					class="mb-6 md:mb-12"
				>
					<div use:scrollTo={{ ref: (goTo), offset:-64 }} class=" font-DMSans text-lightText hover:text-darkText">
						<p >
							More Salads
						</p>
					</div>
				</div>
		</div>
	
		<div class="w-1/2 flex-auto sm:flex hidden">
			<img src='/webp/careersKitchenHelper.webp' class="h-full object-cover w-full" alt="" />
		</div>
	</section>

	<section id="salad2" class=" bg-tertiary relative flex flex-col sm:flex-row h-fit">
		<div class="flex sm:hidden">
			<img src='/webp/careersKitchenHelperMobile.webp' class="w-screen object-cover" alt="" />
		</div>
		<div class="text-darkText flex sm:w-1/2 justify-center items-center flex-col font-instrument">
			
				<div
					class="mt-6 md:mt-12"
				>
					<div use:scrollTo={{ ref: 'appetizers', offset:-64 }} class=" font-DMSans text-lightText hover:text-darkText">
						<p >
							Salads
						</p>
					</div>
				</div>
			<div class="mx-8 sm:mx-16 xl:mx-50 mt-12 mb-12 sm:my-16 md:my-24  xl:my-36  flex flex-col">
				<h1 class="text-darkText text-6xl mb-4">More Salads</h1>
				<h1 class="text-lightText mb-12 text-4xl">สลัด</h1>
	
				<div class="text-darkText font-DMSans mt-8 mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">20. Yum Pla Meuk</p>
							<p class="font-light">
								Squids with lime juice, shallots, fish sauce and bird’s eye chilli
							</p>
						</div>
						<div>
							<p>14.50</p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">21. Yum Neuua</p>
							<p class="font-light">
								Strip loin beef, lime juice, onions, scallions and Thai chilli
							</p>
						</div>
						<div>
							<p>14.50</p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">22. Larb</p>
							<p class="font-light">
								Minced chicken or beef, with shallots, lime juice and roasted chilli
							</p>
						</div>
						<div>
							<p>13.50</p>
						</div>
					</div>
				</div>
			</div>
				
		
		
				<div
					class="mb-6 md:mb-12"
				>
					<div use:scrollTo={{ ref: (goTo), offset:-64 }} class=" font-DMSans text-lightText hover:text-darkText">
						<p >
							Curry
						</p>
					</div>
				</div>
		</div>
	
		<div class="w-1/2 flex-auto sm:flex hidden">
			<img src='/webp/careersKitchenHelper.webp' class="h-full object-cover w-full" alt="" />
		</div>
	</section>

	<section id="curry" class=" bg-tertiary relative flex flex-col sm:flex-row h-fit">
		<div class="flex sm:hidden">
			<img src='/webp/careersKitchenHelperMobile.webp' class="w-screen object-cover" alt="" />
		</div>
		<div class="text-darkText flex sm:w-1/2 justify-center items-center flex-col font-instrument">
			
				<div
					class="mt-6 md:mt-12"
				>
					<div use:scrollTo={{ ref: 'appetizers', offset:-64 }} class=" font-DMSans text-lightText hover:text-darkText">
						<p >
							Salads
						</p>
					</div>
				</div>
			<div class="mx-8 sm:mx-16 xl:mx-50 mt-12 mb-12 sm:my-16 md:my-24  xl:my-36  flex flex-col">
				<h1 class="text-darkText text-6xl mb-4">Curry</h1>
				<h1 class="text-lightText mb-12 text-4xl">สลัด</h1>
	
				<div class="text-darkText font-DMSans mt-8 mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold"> </p>
							<p class="font-light">
								 
							</p>
						</div>
						<div>
							<p> </p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold"> </p>
							<p class="font-light">
								 
							</p>
						</div>
						<div>
							<p>  </p>
						</div>
					</div>
				</div>
				
			</div>
				
		
		
				<div
					class="mb-6 md:mb-12"
				>
					<div use:scrollTo={{ ref: (goTo), offset:-64 }} class=" font-DMSans text-lightText hover:text-darkText">
						<p >
							Stir Fried
						</p>
					</div>
				</div>
		</div>
	
		<div class="w-1/2 flex-auto sm:flex hidden">
			<img src='/webp/careersKitchenHelper.webp' class="h-full object-cover w-full" alt="" />
		</div>
	</section>

	<section id="stir-fried" class=" bg-tertiary relative flex flex-col sm:flex-row h-fit">
		<div class="flex sm:hidden">
			<img src='/webp/careersKitchenHelperMobile.webp' class="w-screen object-cover" alt="" />
		</div>
		<div class="text-darkText flex sm:w-1/2 justify-center items-center flex-col font-instrument">
			
				<div
					class="mt-6 md:mt-12"
				>
					<div use:scrollTo={{ ref: 'appetizers', offset:-64 }} class=" font-DMSans text-lightText hover:text-darkText">
						<p >
							Curry
						</p>
					</div>
				</div>
			<div class="mx-8 sm:mx-16 xl:mx-50 mt-12 mb-12 sm:my-16 md:my-24  xl:my-36  flex flex-col">
				<h1 class="text-darkText text-6xl mb-4">Stir-Fried</h1>
				<h1 class="text-lightText mb-12 text-4xl">สลัด</h1>
	
				<div class="text-darkText font-DMSans mt-8 mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">20. Yum Pla Meuk</p>
							<p class="font-light">
								Squids with lime juice, shallots, fish sauce and bird’s eye chilli
							</p>
						</div>
						<div>
							<p>14.50</p>
						</div>
					</div>
				</div>
			</div>

				<div
					class="mb-6 md:mb-12"
				>
					<div use:scrollTo={{ ref: (goTo), offset:-64 }} class=" font-DMSans text-lightText hover:text-darkText">
						<p >
							More Stir-Fried
						</p>
					</div>
				</div>
		</div>

		<div class="w-1/2 flex-auto sm:flex hidden">
			<img src='/webp/careersKitchenHelper.webp' class="h-full object-cover w-full" alt="" />
		</div>
	</section>

	<section id="stir-fried2" class=" bg-tertiary relative flex flex-col sm:flex-row h-fit">
		<div class="flex sm:hidden">
			<img src='/webp/careersKitchenHelperMobile.webp' class="w-screen object-cover" alt="" />
		</div>
		<div class="text-darkText flex sm:w-1/2 justify-center items-center flex-col font-instrument">
			
				<div
					class="mt-6 md:mt-12"
				>
					<div use:scrollTo={{ ref: 'appetizers', offset:-64 }} class=" font-DMSans text-lightText hover:text-darkText">
						<p >
							Stir-Fried
						</p>
					</div>
				</div>
			<div class="mx-8 sm:mx-16 xl:mx-50 mt-12 mb-12 sm:my-16 md:my-24  xl:my-36  flex flex-col">
				<h1 class="text-darkText text-6xl mb-4">More Stir-Fried</h1>
				<h1 class="text-lightText mb-12 text-4xl">สลัด</h1>
	
				<div class="text-darkText font-DMSans mt-8 mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">20. Yum Pla Meuk</p>
							<p class="font-light">
								Squids with lime juice, shallots, fish sauce and bird’s eye chilli
							</p>
						</div>
						<div>
							<p>14.50</p>
						</div>
					</div>
				</div>
			</div>

				<div
					class="mb-6 md:mb-12"
				>
					<div use:scrollTo={{ ref: (goTo), offset:-64 }} class=" font-DMSans text-lightText hover:text-darkText">
						<p >
							Noodles
						</p>
					</div>
				</div>
		</div>

		<div class="w-1/2 flex-auto sm:flex hidden">
			<img src='/webp/careersKitchenHelper.webp' class="h-full object-cover w-full" alt="" />
		</div>
	</section>

	<section id="noodles" class=" bg-tertiary relative flex flex-col sm:flex-row h-fit">
		<div class="flex sm:hidden">
			<img src='/webp/careersKitchenHelperMobile.webp' class="w-screen object-cover" alt="" />
		</div>
		<div class="text-darkText flex sm:w-1/2 justify-center items-center flex-col font-instrument">
			
				<div
					class="mt-6 md:mt-12"
				>
					<div use:scrollTo={{ ref: 'appetizers', offset:-64 }} class=" font-DMSans text-lightText hover:text-darkText">
						<p >
							Stir-Fried
						</p>
					</div>
				</div>
			<div class="mx-8 sm:mx-16 xl:mx-50 mt-12 mb-12 sm:my-16 md:my-24  xl:my-36  flex flex-col">
				<h1 class="text-darkText text-6xl mb-4">Noodles</h1>
				<h1 class="text-lightText mb-12 text-4xl">สลัด</h1>
	
				<div class="text-darkText font-DMSans mt-8 mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">39. Traditional Phat Thai </p>
							<p class="font-light">
								Rice noodles or egg noodles, with shrimps and bay scallops, roasted peanuts, egg, bean sprouts, scallions and lime, with a choice of tamarind sauce or tomato sauce
							</p>
						</div>
						<div>
							<p>16.50</p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">40. Phat See-Iw</p>
							<p class="font-light">
								Strip loin beef, lime juice, onions, scallions and Thai chilli
							</p>
						</div>
						<div>
							<p>16.50</p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">41. Mee-Krob Song Cuang</p>
							<p class="font-light">
								Stir-fried rice noodles with eggs, cabbage, seasonal vegetables, in aged dark Thai soy-sauce and white peppercorn, add seafood or prawns for $1.45
							</p>
						</div>
						<div>
							<p>16.50</p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">42. Phat Kee-Meow</p>
							<p class="font-light">
								Stir-fried rice noodles with house basil, onions, in chilli paste, add seafood or prawns for $1.45
							</p>
						</div>
						<div>
							<p>16.50</p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">43. Bamei Rommitr</p>
							<p class="font-light">
								Stir-fried egg noodles with cabbage, onions and seasonal vegetables, add seafood or prawns for $1.45
							</p>
						</div>
						<div>
							<p>16.50</p>
						</div>
					</div>
				</div>
			</div>
				
		
		
				<div
					class="mb-6 md:mb-12"
				>
					<div use:scrollTo={{ ref: (goTo), offset:-64 }} class=" font-DMSans text-lightText hover:text-darkText">
						<p >
							Vegetables
						</p>
					</div>
				</div>
		</div>
	
		<div class="w-1/2 flex-auto sm:flex hidden">
			<img src='/webp/careersKitchenHelper.webp' class="h-full object-cover w-full" alt="" />
		</div>
	</section>

	<section id="vegetables" class=" bg-tertiary relative flex flex-col sm:flex-row h-fit">
		<div class="flex sm:hidden">
			<img src='/webp/careersKitchenHelperMobile.webp' class="w-screen object-cover" alt="" />
		</div>
		<div class="text-darkText flex sm:w-1/2 justify-center items-center flex-col font-instrument">
			
				<div
					class="mt-6 md:mt-12"
				>
					<div use:scrollTo={{ ref: 'appetizers', offset:-64 }} class=" font-DMSans text-lightText hover:text-darkText">
						<p >
							Noodles
						</p>
					</div>
				</div>
			<div class="mx-8 sm:mx-16 xl:mx-50 mt-12 mb-12 sm:my-16 md:my-24  xl:my-36  flex flex-col">
				<h1 class="text-darkText text-6xl mb-4">Vegetables</h1>
				<h1 class="text-lightText mb-12 text-4xl">สลัด</h1>
	
				<div class="text-darkText font-DMSans mt-8 mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<div class="flex flex-nowrap">
								<p class=" font-bold">44. Tofu Phat Bai Ga-Phrao
								</p>
								<img src='/gfIcon.svg' class="ml-2" alt="Gluten Free Sign">
							</div>
							<p class="font-light">
								Stir-fried soft tofu with seasonal vegetables, white button mushrooms, chilli paste and holy basil
							</p>
						</div>
						<div>
							<p>17.95</p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">45. Phat Phak Ruaam Mit </p>
							<p class="font-light">
								Stir-fried seasonal vegetables, white button mushrooms and tofu with your favourite sauce (Black Bean, Thai Peanut Sauce, Garlic, Oyster or Wild Bangkok Delight)
							</p>
						</div>
						<div>
							<p>17.95</p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">46. Ruaam Mit Phat Bai Horapa </p>
							<p class="font-light">
								Seasonal vegetables, mushrooms, pressed tofu, bean sprouts, with house basil and garlic
							</p>
						</div>
						<div>
							<p>17.95</p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">47. Thuaa Phat Phrik Khing</p>
							<p class="font-light">
								Stir-fried green beans, kaffir lime leaves, basil, in House Spicy Sauce
							</p>
						</div>
						<div>
							<p>17.95</p>
						</div>
					</div>
				</div>
			</div>
				
		
		
				<div
					class="mb-6 md:mb-12"
				>
					<div use:scrollTo={{ ref: (goTo), offset:-64 }} class=" font-DMSans text-lightText hover:text-darkText">
						<p >
							Fried Rice
						</p>
					</div>
				</div>
		</div>
	
		<div class="w-1/2 flex-auto sm:flex hidden">
			<img src='/webp/careersKitchenHelper.webp' class="h-full object-cover w-full" alt="" />
		</div>
	</section>

	<section id="fried-rice" class=" bg-tertiary relative flex flex-col sm:flex-row h-fit">
		<div class="flex sm:hidden">
			<img src='/webp/careersKitchenHelperMobile.webp' class="w-screen object-cover" alt="" />
		</div>
		<div class="text-darkText flex sm:w-1/2 justify-center items-center flex-col font-instrument">
			
				<div
					class="mt-6 md:mt-12"
				>
					<div use:scrollTo={{ ref: 'appetizers', offset:-64 }} class=" font-DMSans text-lightText hover:text-darkText">
						<p >
							Vegetables
						</p>
					</div>
				</div>
			<div class="mx-8 sm:mx-16 xl:mx-50 mt-12 mb-12 sm:my-16 md:my-24  xl:my-36  flex flex-col">
				<h1 class="text-darkText text-6xl mb-4">Fried Rice</h1>
				<h1 class="text-lightText mb-12 text-4xl">สลัด</h1>
	
				<div class="text-darkText font-DMSans mt-8 mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">44. Tofu Phat Bai Ga-Phrao</p>
							<p class="font-light">
								Stir-fried soft tofu with seasonal vegetables, white button mushrooms, chilli paste and holy basil
							</p>
						</div>
						<div>
							<p>17.95</p>
						</div>
					</div>
				</div>
				
			</div>
				
		
		
				<div
					class="mb-6 md:mb-12"
				>
					<div use:scrollTo={{ ref: (goTo), offset:-64 }} class=" font-DMSans text-lightText hover:text-darkText">
						<p >
							More Fried Rice
						</p>
					</div>
				</div>
		</div>
	
		<div class="w-1/2 flex-auto sm:flex hidden">
			<img src='/webp/careersKitchenHelper.webp' class="h-full object-cover w-full" alt="" />
		</div>
	</section>

	<section id="fried-rice2" class=" bg-tertiary relative flex flex-col sm:flex-row h-fit">
		<div class="flex sm:hidden">
			<img src='/webp/careersKitchenHelperMobile.webp' class="w-screen object-cover" alt="" />
		</div>
		<div class="text-darkText flex sm:w-1/2 justify-center items-center flex-col font-instrument">
			
				<div
					class="mt-6 md:mt-12"
				>
					<div use:scrollTo={{ ref: 'appetizers', offset:-64 }} class=" font-DMSans text-lightText hover:text-darkText">
						<p >
							Fried Rice
						</p>
					</div>
				</div>
			<div class="mx-8 sm:mx-16 xl:mx-50 mt-12 mb-12 sm:my-16 md:my-24  xl:my-36  flex flex-col">
				<h1 class="text-darkText text-6xl mb-4">More Fried Rice</h1>
				<h1 class="text-lightText mb-12 text-4xl">สลัด</h1>
	
				<div class="text-darkText font-DMSans mt-8 mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">44. Tofu Phat Bai Ga-Phrao</p>
							<p class="font-light">
								Stir-fried soft tofu with seasonal vegetables, white button mushrooms, chilli paste and holy basil
							</p>
						</div>
						<div>
							<p>17.95</p>
						</div>
					</div>
				</div>
				
			</div>
				
		
		
				<div
					class="mb-6 md:mb-12"
				>
					<div use:scrollTo={{ ref: (goTo), offset:-64 }} class=" font-DMSans text-lightText hover:text-darkText">
						<p >
							Desserts
						</p>
					</div>
				</div>
		</div>
	
		<div class="w-1/2 flex-auto sm:flex hidden">
			<img src='/webp/careersKitchenHelper.webp' class="h-full object-cover w-full" alt="" />
		</div>
	</section>

	<section id="desserts" class=" bg-tertiary relative flex flex-col sm:flex-row h-fit">
		<div class="flex sm:hidden">
			<img src='/webp/careersKitchenHelperMobile.webp' class="w-screen object-cover" alt="" />
		</div>
		<div class="text-darkText flex sm:w-1/2 justify-center items-center flex-col font-instrument">
			
				<div
					class="mt-6 md:mt-12"
				>
					<div use:scrollTo={{ ref: 'appetizers', offset:-64 }} class=" font-DMSans text-lightText hover:text-darkText">
						<p >
							Fried-Rice
						</p>
					</div>
				</div>
			<div class="mx-8 sm:mx-16 xl:mx-50 mt-12 mb-12 sm:my-16 md:my-24  xl:my-36  flex flex-col">
				<h1 class="text-darkText text-6xl mb-4">Desserts</h1>
				<h1 class="text-lightText mb-12 text-4xl">สลัด</h1>
	
				<div class="text-darkText font-DMSans mt-8 mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">Fresh Mango Sticky Rice (Seasonal)</p>
							<p class="font-light">
								
							</p>
						</div>
						<div>
							<p>7</p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">Brown Sticky Rice with Vanilla Ice-Cream</p>
							<p class="font-light">
								
							</p>
						</div>
						<div>
							<p>7</p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">Deep-Fried Banana with Vanilla Ice-Cream</p>
							<p class="font-light">
								
							</p>
						</div>
						<div>
							<p>7</p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">Green Tea Ice-Cream</p>
							<p class="font-light">
								
							</p>
						</div>
						<div>
							<p>6</p>
						</div>
					</div>
				</div>
				<div class="text-darkText font-DMSans mb-4 flex">
					<div class="flex w-full flex-row justify-between">
						<div class="pr-8">
							<p class=" font-bold">Mango Ice-Cream</p>
							<p class="font-light">
								
							</p>
						</div>
						<div>
							<p>6</p>
						</div>
					</div>
				</div>
			</div>
				
		
		
				<div
					class="mb-6 md:mb-12"
				>
					<div use:scrollTo={{ ref: (goTo), offset:-64 }} class=" font-DMSans text-lightText hover:text-darkText">
						<p >
							Happy Hour
						</p>
					</div>
				</div>
		</div>
	
		<div class="w-1/2 flex-auto sm:flex hidden">
			<img src='/webp/careersKitchenHelper.webp' class="h-full object-cover w-full" alt="" />
		</div>
	</section>
	







