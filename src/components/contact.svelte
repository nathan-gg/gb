<script lang="ts">
	import { scrollTo, scrollRef, scrollElement, setGlobalOptions } from 'svelte-scrolling';
	import { cubicInOut } from 'svelte/easing';

	let activeTab: 'general' | 'application' = 'general';

	let generalForm = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		message: ''
	};

	let applicationForm = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		position: [],
		resume: null as FileList | null,
		message: ''
	};

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

	// Helper functions for programmatic scrolling that use the parent container
	function scrollPrev() {
		if (goBack) {
			// Use the element's ID or a ref
			const targetElement =
				document.getElementById(goBack) || document.querySelector(`[data-scroll-ref="${goBack}"]`);

			if (targetElement && container) {
				// Manual scroll within container with 64px offset
				container.scrollTo({
					top: targetElement.offsetTop - 64, // Add 64px offset
					behavior: 'smooth'
				});
			} else {
				// Fallback to svelte-scrolling's method
				scrollElement(goBack);
			}
		}
	}

	function scrollNext() {
		if (goTo) {
			// Use the element's ID or a ref
			const targetElement =
				document.getElementById(goTo) || document.querySelector(`[data-scroll-ref="${goTo}"]`);

			if (targetElement && container) {
				// Manual scroll within container with 64px offset
				container.scrollTo({
					top: targetElement.offsetTop - 64, // Add 64px offset
					behavior: 'smooth'
				});
			} else {
				// Fallback to svelte-scrolling's method
				scrollElement(goTo);
			}
		}
	}

	async function sendEmail(formData: any, formType: string) {
		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify({
					...createEmailTemplate(formType, formData),
					access_key: 'fde62125-4609-4617-98ce-76bf3ef7159e'
				})
			});

			if (response.ok) {
				alert('Message sent successfully!');
				resetForm(formType);
			} else {
				alert('Failed to send message. Please try again.');
			}
		} catch (error) {
			console.error('Error sending email:', error);
			alert('Failed to send message. Please try again.');
		}
	}

	function resetForm(formType: string) {
		if (formType === 'general') {
			generalForm = {
				firstName: '',
				lastName: '',
				email: '',
				phone: '',
				message: ''
			};
		} else {
			applicationForm = {
				firstName: '',
				lastName: '',
				email: '',
				phone: '',
				position: [],
				resume: null as FileList | null,
				message: ''
			};
		}
	}

	function handleGeneralSubmit(event: Event) {
		event.preventDefault();
		sendEmail(generalForm, 'general');
	}

	function handleApplicationSubmit(event: Event) {
		event.preventDefault();
		sendEmail(applicationForm, 'application');
	}

	function setActiveTab(tab: 'general' | 'application') {
		activeTab = tab;
	}
</script>

<section
	use:scrollRef={thisRef}
	id={thisRef}
	data-scroll-ref={thisRef}
	class=" bg-tertiary snap-align-start relative flex min-h-screen flex-col sm:flex-row {className}"
>
	<div class="flex sm:hidden">
		{#if ifPage1}
			<img src="/webp/m-contact1.webp" class="w-screen object-cover" alt="" />
		{:else}
			<img src="/webp/m-contact2.webp" class="w-screen object-cover" alt="" />
		{/if}
	</div>
	<div class=" text-darkText font-instrument flex flex-col items-center justify-center sm:w-1/2">
		{#if prevArrow}
			<div class="mt-6 md:mt-12">
				<button
					onclick={scrollPrev}
					class=" font-DMSans text-lightText hover:text-darkText hover:cursor-pointer"
				>
					<p>
						{prevArrowText}
					</p>
				</button>
			</div>
		{/if}
		<!-- <div class="mx-8 mt-12 mb-12 flex flex-col sm:mx-16 sm:my-16 md:my-24 xl:mx-48 xl:my-36"> -->
		<div class="mx-16 my-16 mt-12 flex w-full flex-col items-center md:my-24">
			<div class="mx-8 mb-4 flex flex-col sm:mx-16 xl:mx-48">
				<h1 class="text-darkText mb-4 text-6xl">{title}</h1>
				<h1 class="text-lightText mb-12 text-4xl">{thaiTitle}</h1>

				<p class="text-darkText font-DMSans">
					{@html body}
				</p>

				{#if ifPage1}
					<form
						action="https://api.web3forms.com/submit"
						method="POST"
						class="font-DMSans font-lightText flex flex-col"
					>
						<div class="mt-8 grid grid-cols-2 grid-rows-2">
							<input
								type="text"
								placeholder="First Name"
								class="border-darkText mt-1 mr-1 mb-1 rounded-md border-1 p-1"
							/>
							<input
								type="text"
								placeholder="Last Name"
								class="border-darkText mt-1 mb-1 ml-1 rounded-md border-1 p-1"
							/>
							<input
								type="text"
								placeholder="Email"
								class="border-darkText mt-1 mr-1 mb-1 rounded-md border-1 p-1"
							/>
							<input
								type="text"
								placeholder="Phone Number"
								class="border-darkText mt-1 mb-1 ml-1 rounded-md border-1 p-1"
							/>
						</div>
						<div class="">
							<textarea
								placeholder="Message"
								class=" border-darkText my-1 h-48 w-full rounded-md border-1 p-1"
							></textarea>
						</div>
						<div>
							<button type="submit" class="bg-darkText text-tertiary rounded border-0 p-2">
								<a href="mailto:info@greenbasilthai.com">Submit</a></button
							>
						</div>
					</form>
				{/if}
				{#if ifPage2}
					<div class="font-DMSans flex w-full flex-col font-black">
						<h3 class="text-2xl">Hours</h3>
						<div class="text-md flex justify-between sm:text-sm">
							<div class="text-darkText hidden flex-col font-medium sm:flex">
								<p>Monday</p>
								<p>Tuesday</p>
								<p>Wednesday</p>
								<p>Thursday</p>
							</div>
							<div class="text-darkText flex flex-col font-medium sm:hidden">
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
							<div class="text-darkText hidden flex-col font-medium sm:flex">
								<p>Friday</p>
								<p>Saturday</p>
								<p>Sunday</p>
							</div>
							<div class="text-darkText flex flex-col font-medium sm:hidden">
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
				{/if}
			</div>
			{#if ifPage2}
				<div class="mb-16 w-4/5 sm:mb-0 xl:w-3/5">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.489428938644!2d-123.00370722343598!3d49.229209274539144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867658ed9537d5%3A0x9e538cb3bbfb2f7f!2sGreen%20Basil!5e0!3m2!1sen!2sca!4v1745227762274!5m2!1sen!2sca"
						title="The location of Green Basil Thai Restaurant is 4623 Kingsway, Burnaby, BC V5H 2B3"
						class="mt-2 h-[300px] w-full rounded border-0"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			{/if}
		</div>

		{#if arrow}
			<div class="mb-6 md:mb-12">
				<button
					onclick={scrollNext}
					class=" font-DMSans text-lightText hover:text-darkText hover:cursor-pointer"
				>
					<p>
						{arrowText}
					</p>
				</button>
			</div>
		{/if}

		<!-- {#if topArrow}
			<div
				class="mb-6 md:mb-12"
			>
				<div use:scrollTo={{ ref: (goTo), offset:-64 }} class="font-DMSans text-lightText hover:text-darkText">
					<p >
						{topArrowText}
					</p>
				</div>
			</div>
		{/if} -->
	</div>

	<div class="hidden w-1/2 flex-auto sm:flex">
		{#if ifPage1}
			<img src="/webp/contact1.webp" class="h-full w-full object-cover" alt="" />
		{:else}
			<img src="/webp/contact2.webp" class="h-full w-full object-cover" alt="" />
		{/if}
	</div>
</section>
