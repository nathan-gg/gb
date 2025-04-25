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

	let curTab = $state(0);
</script>

<section use:scrollRef={thisRef} class="relative flex min-h-[calc(100vh-4rem)]">
	<div class="bg-tertiary flex w-6/12 flex-auto flex-col font-serif text-[#000000]">
		{#if prevArrow}
			<div class="absolute top-32 left-1/4 flex -translate-x-1/2 transform flex-col items-center">
				<div use:scrollTo={{ ref: (goBack), offset:-64 }} class="text-lightText hover:text-darkText">
					<p>
						{prevArrowText}
					</p>
				</div>
			</div>
		{/if}

		<div class="m-48 flex-grow">
			<h1 class="text-darkText mt-24 text-6xl">{title}</h1>
			<h1 class="text-lightText mb-12 text-4xl">{thaiTitle}</h1>

			<div class="">
				<p class="text-darkText font-sans">
					{@html body}
				</p>
			</div>

			{#if ifPage1}
				<div class="font-DMSans flex flex-col font-thin">
					<div class="mt-8 grid grid-cols-2 grid-rows-2">
						<input
							type="text"
							placeholder="First Name"
							class="border-darkText mt-1 mr-1 mb-1 rounded-md border-2 p-1"
						/>
						<input
							type="text"
							placeholder="Last Name"
							class="border-darkText mt-1 mb-1 ml-1 rounded-md border-2 p-1"
						/>
						<input
							type="text"
							placeholder="Email"
							class="border-darkText mt-1 mr-1 mb-1 rounded-md border-2 p-1"
						/>
						<input
							type="text"
							placeholder="Phone Number"
							class="border-darkText mt-1 mb-1 ml-1 rounded-md border-2 p-1"
						/>
					</div>
					<div class="">
						<textarea
							placeholder="Message"
							class=" border-darkText my-1 h-48 w-full rounded-md border-2 p-1"
						></textarea>
					</div>
					<div>
						<button class="bg-darkText text-tertiary rounded border-0 p-2">Submit</button>
					</div>
				</div>
			{/if}
			{#if ifPage2}
				<div class="font-DMSans flex flex-col font-black">
					<h3 class="text-2xl">Hours</h3>
					<div class="grid grid-cols-4">
						<div class="text-darkText flex flex-col font-medium">
							<p>Monday</p>
							<p>Tuesday</p>
							<p>Wednesday</p>
							<p>Thursday</p>
						</div>
						<div class="text-darkText flex flex-col font-thin">
							<p>Closed</p>
							<p>5-10PM</p>
							<p>5-10PM</p>
							<p>5-10PM</p>
						</div>
						<div class="text-darkText flex flex-col font-medium">
							<p>Friday</p>
							<p>Saturday</p>
							<p>Sunday</p>
						</div>
						<div class="text-darkText flex flex-col font-thin">
							<p>5-10:30PM</p>
							<p>5-10:30PM</p>
							<p>5-10PM</p>
						</div>
					</div>
					<h3 class="mt-8 text-2xl">Location</h3>
					<a
						class="text-lightText font-thin hover:underline"
						href="https://www.google.com/maps/dir//4623+Kingsway,+Burnaby,+BC+V5H+2B3/@49.2291765,-123.0835327,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54867658ed9537d5:0x9e538cb3bbfb2f7f!2m2!1d-123.0011323!2d49.2292058?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"
					>
						4623 Kingsway, Burnaby, BC V5H 2B3
					</a>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.489428938644!2d-123.00370722343598!3d49.229209274539144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867658ed9537d5%3A0x9e538cb3bbfb2f7f!2sGreen%20Basil!5e0!3m2!1sen!2sca!4v1745227762274!5m2!1sen!2sca"
						title="The location of Green Basil Thai Restaurant is 4623 Kingsway, Burnaby, BC V5H 2B3"
						class="h-[300px] rounded border-0"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			{/if}
		</div>

		{#if arrow}
			<div
				class="absolute bottom-32 left-1/4 flex -translate-x-1/2 transform flex-col items-center"
			>
				<div use:scrollTo={{ ref: (goTo), offset:-64 }} class="text-lightText hover:text-darkText">
					<p>
						{arrowText}
					</p>
				</div>
			</div>
		{/if}
	</div>

	<div class="w-6/12 flex-auto">
		<img src={image} class="h-full object-cover" alt="" />
	</div>
</section>
