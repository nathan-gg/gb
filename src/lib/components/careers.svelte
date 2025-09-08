<script lang="ts">
	import { scrollRef } from 'svelte-scrolling';
	import { careersData } from '$lib/utils/data/careers';

	let { thisRef, title, body, thaiTitle, image } = $props();

	let curTab = $state(0);

	let activeTab = $state<'careersHome' | 'server' | 'expeditor' | 'driver' | 'chef'>('careersHome');

	function setActiveTab(tab: 'careersHome' | 'server' | 'expeditor' | 'driver' | 'chef') {
		activeTab = tab;
	}
</script>

<section
	use:scrollRef={thisRef}
	class="bg-tertiary relative flex min-h-[calc(100vh-4rem)] flex-col xl:flex-row"
>
	<div class="flex xl:hidden">
		{#if activeTab === 'careersHome'}
			<img
				src="/webp/m-careers.webp"
				class="w-screen object-cover"
				alt="A plate of rice with leaves around it"
			/>
		{:else if activeTab === 'server'}
			<img
				src="/webp/m-server.webp"
				class="w-screen object-cover"
				alt="A chef tying an apron around their waist"
			/>
		{:else if activeTab === 'expeditor'}
			<img
				src="/webp/m-expeditor.webp"
				class="w-screen object-cover"
				alt="A barista making a martini"
			/>
		{:else if activeTab === 'driver'}
			<img
				src="/webp/m-careersDriver.webp"
				class="w-screen object-cover"
				alt="A driver delivering food"
			/>
		{:else if activeTab === 'chef'}
			<img
				src="/webp/m-chef.webp"
				class="w-screen object-cover"
				alt="A chef tossing vegetables in a pan"
			/>
		{/if}
	</div>

	<div class="text-darkText font-instrument flex flex-col items-start justify-start xl:w-1/2">
		<div class="mx-8 my-12 flex w-full flex-col items-start sm:ml-16 xl:my-24">
			<h1 class="text-darkText mb-1 w-4/5 text-6xl sm:w-full">Careers</h1>
			<h1 class="text-lightText mb-14 text-2xl">อาชีพ</h1>
			<p class="font-MonaSans text-darkText mb-14 text-[1rem] w-3/4">
				Green Basil Thai Restaurant (GBTR) promotes a fun, respectful and encouraging work
				environment. We acknowledge the importance of quality staff because this will become our
				primary success factor. Thus, we welcome energetic, responsible and positive team players to
				join us. Join the team and send your resume to <a
					href="mailto:info@greenbasilthai.com"
					target="_blank"
					class="focus: font-bold underline focus:underline">info@greenbasilthai.com</a
				>. Click each job posting below to learn more.
			</p>
			<div
				class="font-MonaSans text-darkText group mb-14 flex flex-wrap items-start justify-start gap-2 gap-x-4 text-[1.5rem] leading-4 font-medium hover:cursor-pointer xl:inline-flex xl:flex-nowrap xl:justify-start max-w-3/4"
				role="tablist"
			>
				<button
					onclick={() => setActiveTab('careersHome')}
					class=" border-r-darkText border-r-2 py-2 pr-4 group-hover:opacity-50 hover:cursor-pointer hover:!opacity-100"
				>
					Careers
				</button>
				<button
					onclick={() => setActiveTab('server')}
					class=" py-2 pr-2 group-hover:opacity-50 hover:!opacity-100"
				>
					Server
				</button>
				<button
					onclick={() => setActiveTab('expeditor')}
					class=" py-2 pr-2 group-hover:opacity-50 hover:!opacity-100"
				>
					Expeditor
				</button>
				<button
					onclick={() => setActiveTab('driver')}
					class=" py-2 pr-2 group-hover:opacity-50 hover:!opacity-100"
					>Driver
				</button>
				<button
					onclick={() => setActiveTab('chef')}
					class="py-2 pr-2 group-hover:opacity-50 hover:!opacity-100"
				>
					Chef
				</button>
			</div>

			<div class="font-MonaSans mb-8 w-3/4">
				{#if activeTab === 'careersHome'}{:else if activeTab === 'server'}
					<p class=" ">
						A server at Green Basil plays a vital role in delivering an exceptional dining
						experience. This position involves warmly welcoming guests, guiding them through the
						menu, and ensuring their needs are met with attentiveness and care. Servers are
						responsible for taking accurate orders, coordinating with the kitchen staff, and
						maintaining a clean and inviting dining area. The focus is on creating a friendly and
						professional atmosphere that reflects the restaurant's commitment to authentic Thai
						cuisine and outstanding customer service.
					</p>
				{:else if activeTab === 'expeditor'}
					<p class="">
						An expeditor at Green Basil plays ensures seamless service and guest satisfaction. This
						position involves efficiently delivering dishes from the kitchen to the dining area
						while maintaining attention to detail and presentation. Expeditors collaborate closely
						with servers and kitchen staff to ensure orders are accurate and delivered promptly.
						They also assist in maintaining the cleanliness and organization of the dining space. As
						a representative of Green Basil, this position helps uphold the restaurant's commitment
						to outstanding service.
					</p>
				{:else if activeTab === 'driver'}
					<p class="">
						A driver at Green Basil ensures that orders reach our customers in a timely and
						professional manner. This role involves carefully handling food orders, planning
						efficient delivery routes, and maintaining excellent communication with both the
						restaurant team and customers. Drivers are responsible for ensuring orders are accurate
						and delivered promptly while presenting a friendly demeanor. They are a testament to the
						restaurant’s commitment to quality service and customer satisfaction, bringing the
						flavours of Green Basil directly to customers’ doors.
					</p>
				{:else if activeTab === 'chef'}
					<p class="">
						A chef at Green Basil is a cornerstone of smooth kitchen operations and delicious meals.
						Assisting our kitchen staff with food preparation, organizing ingredients, ensuring the
						kitchen remains clean and orderly are the main responsibilities involved. Chefs will
						also handle tasks like washing dishes, maintaining equipment, and ensuring to adhere to
						health and safety standards. Kitchen helpers contribute to the restaurant's elegant,
						inviting atmosphere.
					</p>
				{/if}
			</div>
			<a
				href="/contact"
				class="border-darkText hover:bg-darkText text-darkText hover:text-tertiary font-MonaSans rounded-[5px] border-2 p-2 transition duration-300 xl:px-5.5 xl:py-2"
				>Apply Now</a
			>
		</div>
	</div>

	<div class="hidden w-1/2 flex-auto xl:flex">
		{#if activeTab === 'careersHome'}
			<img
				src="/webp/careers.webp"
				class="h-full w-full object-cover"
				alt="A plate of rice with leaves around it"
			/>
		{:else if activeTab === 'server'}
			<img
				src="/webp/server.webp"
				class="h-full w-full object-cover"
				alt="A chef tying an apron around their waist"
			/>
		{:else if activeTab === 'expeditor'}
			<img
				src="/webp/expeditor.webp"
				class="h-full w-full object-cover"
				alt="A barista making a martini"
			/>
		{:else if activeTab === 'driver'}
			<img
				src="/webp/careersDriver.webp"
				class="h-full w-full object-cover"
				alt="A driver delivering food"
			/>
		{:else if activeTab === 'chef'}
			<img
				src="/webp/chef.webp"
				class="h-full w-full object-cover"
				alt="A chef cooking in a pan with a large flame coming upwards"
			/>
		{/if}
	</div>
</section>
