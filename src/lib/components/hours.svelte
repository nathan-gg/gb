<script lang="ts">
	import { scrollTo, scrollRef, scrollElement, setGlobalOptions } from 'svelte-scrolling';
	import { cubicInOut } from 'svelte/easing';

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
		ifPage2 = false,
		isScrolling = false, // Accept the shared scrolling state
		container = null, // Accept container reference from parent
		class: className = '' // Accept additional classes from parent
	} = $props();
</script>

<section
	use:scrollRef={thisRef}
	id={thisRef}
	data-scroll-ref={thisRef}
	class=" bg-tertiary relative flex min-h-[calc(100vh-4rem)] flex-col xl:flex-row {className}"
>
	<div class="flex xl:hidden">
		<img src="/webp/m-contact2.webp" class="w-screen object-cover" alt="" />
	</div>
	<div class="text-darkText font-instrument flex flex-col items-start justify-start xl:w-1/2">
		<div class="mx-8 my-12 flex w-full flex-col items-start sm:ml-16 xl:my-24">
			<div class=" mb-4 flex flex-col">
				<h1 class="text-darkText mb-1 text-6xl w-4/5 sm:w-full">{title}</h1>
				<h1 class="text-lightText mb-12 text-2xl">{thaiTitle}</h1>

				<div class="font-MonaSans flex w-full flex-col font-medium">
					<h3 class="text-2xl">Hours</h3>
					<div class="flex gap-x-4 text-[1rem] xl:justify-between xl:gap-x-0">
						<div class="text-darkText hidden flex-col font-medium xl:flex">
							<p>Monday</p>
							<p>Tuesday</p>
							<p>Wednesday</p>
							<p>Thursday</p>
						</div>
						<div class="text-darkText flex flex-col font-medium xl:hidden">
							<p>Mon</p>
							<p>Tues</p>
							<p>Weds</p>
							<p>Thurs</p>
						</div>
						<div class="text-darkText flex flex-col font-normal">
							<p>Closed</p>
							<p>5-10PM</p>
							<p>5-10PM</p>
							<p>5-10PM</p>
						</div>
						<div class="text-darkText hidden flex-col font-medium xl:flex">
							<p>Friday</p>
							<p>Saturday</p>
							<p>Sunday</p>
						</div>
						<div class="text-darkText flex flex-col font-medium xl:hidden">
							<p>Fri</p>
							<p>Sat</p>
							<p>Sun</p>
						</div>
						<div class="text-darkText flex flex-col font-normal">
							<p>5-10:30PM</p>
							<p>5-10:30PM</p>
							<p>5-10PM</p>
						</div>
					</div>
					<h3 class="mt-8 text-2xl">Location</h3>
					<a
						class="text-lightText font-normal hover:underline"
						href="https://www.google.com/maps/dir//4623+Kingsway,+Burnaby,+BC+V5H+2B3/@49.2291765,-123.0835327,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54867658ed9537d5:0x9e538cb3bbfb2f7f!2m2!1d-123.0011323!2d49.2292058?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"
					>
						4623 Kingsway, Burnaby, BC V5H 2B3
					</a>
				</div>
			</div>
			<div class="mb-16 w-4/5 xl:mb-0 xl:w-3/5">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.489428938644!2d-123.00370722343598!3d49.229209274539144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867658ed9537d5%3A0x9e538cb3bbfb2f7f!2sGreen%20Basil!5e0!3m2!1sen!2sca!4v1745227762274!5m2!1sen!2sca"
					title="The location of Green Basil Thai Restaurant is 4623 Kingsway, Burnaby, BC V5H 2B3"
					class="mt-2 h-[300px] w-full rounded border-0"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</div>
	</div>

	<div class="hidden w-1/2 flex-auto xl:flex">
		<img src="/webp/contact2.webp" class="h-full w-full object-cover" alt="" />
	</div>
</section>
