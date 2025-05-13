<script lang="ts">
	import { scrollRef } from 'svelte-scrolling';

	let { thisRef, title, body, thaiTitle, image } = $props();

	let curTab = $state(0);
</script>

<section use:scrollRef={thisRef} class=" bg-tertiary relative flex h-fit flex-col sm:flex-row">
	<div class="flex sm:hidden">
		{#if curTab === 0}
			<img src="/webp/careersFoodRunnerMobile.webp" class="w-screen object-cover" alt="" />
		{:else if curTab === 1}
			<img src="/webp/careersServerMobile.webp" class="w-screen object-cover" alt="" />
		{:else if curTab === 2}
			<img src="/webp/careersFoodRunnerMobile.webp" class="w-screen object-cover" alt="" />
		{:else if curTab === 3}
			<img src="/webp/careersFoodRunnerMobile.webp" class="w-screen object-cover" alt="" />
		{:else if curTab === 4}
			<img src="/webp/careersKitchenHelperMobile.webp" class="w-screen object-cover" alt="" />
		{/if}
	</div>

	<div class=" text-darkText font-instrument flex flex-col items-center justify-center sm:w-1/2">
		<div class="mx-8 mt-12 mb-12 flex flex-col sm:mx-16 sm:my-16 md:my-24 xl:mx-54 xl:my-36">
			<!-- <h1 class="text-darkText mb-4 text-6xl">{title}</h1>
			<h1 class="text-lightText mb-12 text-4xl">{thaiTitle}</h1> -->

			{#if curTab === 0}
				<h1 class=" text-darkText mb-4 text-6xl">Our Careers</h1>
				<h1 class="text-lightText mb-12 text-4xl">อาชีพ</h1>
			{:else if curTab === 1}
				<h1 class=" text-darkText mb-4 text-6xl">Server</h1>
				<h1 class="text-lightText mb-12 text-4xl">บริกร</h1>
			{:else if curTab === 2}
				<h1 class=" text-darkText mb-4 text-6xl">Food Runner</h1>
				<h1 class="text-lightText mb-12 text-4xl">พนักงานเดินอาหาร</h1>
			{:else if curTab === 3}
				<h1 class=" text-darkText mb-4 text-6xl">Driver</h1>
				<h1 class="text-lightText mb-12 text-4xl">คนขับ</h1>
			{:else if curTab === 4}
				<h1 class=" text-darkText mb-4 text-6xl">Kitchen Helper</h1>
				<h1 class="text-lightText mb-12 text-4xl">ผู้ช่วยครัว</h1>
			{/if}
			<div
				class="font-DMSans flex flex-wrap justify-center sm:inline-flex lg:flex-nowrap lg:justify-star leading-4"
			>
				<button onclick={() => (curTab = 0)} class="hover:cursor-pointer">
					{#if curTab === 0}
						<p class="text-darkText mr-4 mb-8">Our Careers</p>
					{:else if curTab != 0}
						<p class="text-lightText mr-4 mb-8">Our Careers</p>
					{/if}
				</button>
				<button onclick={() => (curTab = 1)} class="hover:cursor-pointer">
					{#if curTab === 1}
						<p class="text-darkText mx-4 mb-8">Server</p>
					{:else if curTab != 1}
						<p class="text-lightText mx-4 mb-8">Server</p>
					{/if}
				</button>
				<button onclick={() => (curTab = 2)} class="hover:cursor-pointer">
					{#if curTab === 2}
						<p class="text-darkText mx-4 mb-8">Food Runner</p>
					{:else if curTab != 2}
						<p class="text-lightText mx-4 mb-8">Food Runner</p>
					{/if}
				</button>
				<button onclick={() => (curTab = 3)} class="hover:cursor-pointer">
					{#if curTab === 3}
						<p class="text-darkText mx-4 mb-8">Driver</p>
					{:else if curTab != 3}
						<p class="text-lightText mx-4 mb-8">Driver</p>
					{/if}
				</button>
				<button onclick={() => (curTab = 4)} class="hover:cursor-pointer">
					{#if curTab === 4}
						<p class="text-darkText mx-4 mb-8">Kitchen Helper</p>
					{:else if curTab != 4}
						<p class="text-lightText mx-4 mb-8">Kitchen Helper</p>
					{/if}
				</button>
			</div>

			<div class="">
				{#if curTab === 0}
					<p class="text-darkText font-sans">
						Green Basil Thai Restaurant (GBTR) promotes a fun, respectful and encouraging work
						environment. We acknowledge the importance of quality staff because this will become our
						primary success factor. Thus, we welcome energetic, responsible and positive team
						players to join us.
					</p>
					<p class="text-darkText mt-4 font-sans">
						Join the team and send your resume to <a
							href="mailto:textinfo@greenbasilthai.com"
							target="_blank"
							class="focus: font-bold underline focus:underline">textinfogreenbasilthai.com</a
						>.
					</p>
				{:else if curTab === 1}
					<p class="text-darkText font-sans">
						A server at Green Basil plays a vital role in delivering an exceptional dining
						experience. This position involves warmly welcoming guests, guiding them through the
						menu, and ensuring their needs are met with attentiveness and care. Servers are
						responsible for taking accurate orders, coordinating with the kitchen staff, and
						maintaining a clean and inviting dining area. The focus is on creating a friendly and
						professional atmosphere that reflects the restaurant's commitment to authentic Thai
						cuisine and outstanding customer service.
					</p>
				{:else if curTab === 2}
					<p class="text-darkText font-sans">
						A food runner at Green Basil plays ensures seamless service and guest satisfaction. This
						position involves efficiently delivering dishes from the kitchen to the dining area
						while maintaining attention to detail and presentation. Food runners collaborate closely
						with servers and kitchen staff to ensure orders are accurate and delivered promptly.
						They also assist in maintaining the cleanliness and organization of the dining space. As
						a representative of Green Basil, this position helps uphold the restaurant's commitment
						to outstanding service.
					</p>
				{:else if curTab === 3}
					<p class="text-darkText font-sans">
						A driver at Green Basil ensures that orders reach our customers in a timely and
						professional manner. This role involves carefully handling food orders, planning
						efficient delivery routes, and maintaining excellent communication with both the
						restaurant team and customers. Drivers are responsible for ensuring orders are accurate
						and delivered promptly while presenting a friendly demeanor. They are a testament to the
						restaurant’s commitment to quality service and customer satisfaction, bringing the
						flavours of Green Basil directly to customers’ doors.
					</p>
				{:else if curTab === 4}
					<p class="text-darkText font-sans">
						A kitchen helper at Green Basil is a cornerstone of smooth kitchen operations and
						delicious meals. Assisting our kitchen staff with food preparation, organizing
						ingredients, ensuring the kitchen remains clean and orderly are the main
						responsibilities involved. Kitchen helpers will also handle tasks like washing dishes,
						maintaining equipment, and ensuring to adhere to health and safety standards. Kitchen
						helpers contribute to the restaurant's elegant, inviting atmosphere.
					</p>
				{/if}
			</div>
		</div>
	</div>

	<div class="hidden w-1/2 flex-auto sm:flex">
		{#if curTab === 0}
			<img src="/webp/identityHead.webp" class="h-full w-full object-cover" alt="" />
		{:else if curTab === 1}
			<img src="/webp/careersServer.webp" class="h-full w-full object-cover" alt="" />
		{:else if curTab === 2}
			<img src="/webp/careersFoodRunner.webp" class="h-full w-full object-cover" alt="" />
		{:else if curTab === 3}
			<img src="/webp/identityHead.webp" class="h-full w-full object-cover" alt="" />
		{:else if curTab === 4}
			<img src="/webp/careersKitchenHelper.webp" class="h-full w-full object-cover" alt="" />
		{/if}
	</div>
</section>
