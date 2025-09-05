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
		<img src="/webp/m-contact1.webp" class="w-screen object-cover" alt="" />
	</div>
	<div class=" text-darkText font-instrument flex flex-col items-center justify-center sm:w-1/2">
		<div class="mx-16 my-16 mt-12 flex w-full flex-col items-center md:my-24">
			<div class="mx-8 mb-4 flex flex-col sm:mx-16 xl:mx-48">
				<h1 class="text-darkText mb-4 text-6xl">{title}</h1>
				<h1 class="text-lightText mb-12 text-4xl">{thaiTitle}</h1>

				<p class="text-darkText font-MonaSans">
					{@html body}
				</p>

				<form
					action="https://api.web3forms.com/submit"
					method="POST"
					class="font-MonaSans font-lightText flex flex-col"
				>
					<div class="mt-8 grid grid-cols-2 grid-rows-2">
						<input
							type="text"
							placeholder="First Name"
							class="border-darkText mt-1 mr-1 mb-1 rounded-[5px] border-1 p-1"
						/>
						<input
							type="text"
							placeholder="Last Name"
							class="border-darkText mt-1 mb-1 ml-1 rounded-[5px] border-1 p-1"
						/>
						<input
							type="text"
							placeholder="Email"
							class="border-darkText mt-1 mr-1 mb-1 rounded-[5px] border-1 p-1"
						/>
						<input
							type="text"
							placeholder="Phone Number"
							class="border-darkText mt-1 mb-1 ml-1 rounded-[5px] border-1 p-1"
						/>
					</div>
					<div class="">
						<textarea
							placeholder="Message"
							class=" border-darkText my-1 h-48 w-full rounded-[5px] border-1 p-1"
						></textarea>
					</div>
					<div>
						<button
							type="submit"
							class="bg-darkText text-tertiary rounded border-0 p-2 transition duration-100 hover:scale-105"
						>
							<a href="mailto:info@greenbasilthai.com">Submit</a></button
						>
					</div>
				</form>

				
			</div>
		</div>
	</div>

	<div class="hidden w-1/2 flex-auto sm:flex">
		<img src="/webp/contact1.webp" class="h-full w-full object-cover" alt="" />
	</div>
</section>
