<script lang="ts">
	import { onMount } from 'svelte';
	import { scrollTo, scrollRef, scrollElement, setGlobalOptions } from 'svelte-scrolling';
	import { cubicInOut } from 'svelte/easing';

	import { Dropdown } from 'flowbite';
	import type { DropdownOptions, DropdownInterface } from 'flowbite';
	import type { InstanceOptions } from 'flowbite';

	let dropdown: DropdownInterface | null = null;
	let positionDropdown: DropdownInterface | null = null; // Add second dropdown instance

	// Initialize dropdowns only in browser
	onMount(() => {
		// First dropdown (tab selector)
		const targetEl: HTMLElement | null = document.getElementById('dropdownMenu');
		const triggerEl: HTMLElement | null = document.getElementById('dropdownButton');

		if (targetEl && triggerEl) {
			const options: DropdownOptions = {
				placement: 'bottom',
				triggerType: 'click',
				offsetSkidding: 0,
				offsetDistance: 10,
				delay: 300,
				onHide: () => {
					console.log('dropdown has been hidden');
				},
				onShow: () => {
					console.log('dropdown has been shown');
				},
				onToggle: () => {
					console.log('dropdown has been toggled');
				}
			};

			const instanceOptions: InstanceOptions = {
				id: 'dropdownMenu',
				override: true
			};

			dropdown = new Dropdown(targetEl, triggerEl, options, instanceOptions);
		}

		// Second dropdown (position selector)
		const positionTargetEl: HTMLElement | null = document.getElementById('dropdownMenuPositions');
		const positionTriggerEl: HTMLElement | null =
			document.getElementById('dropdownButtonPositions');

		if (positionTargetEl && positionTriggerEl) {
			const positionOptions: DropdownOptions = {
				placement: 'bottom',
				triggerType: 'click',
				offsetSkidding: 0,
				offsetDistance: 2,
				delay: 300,
				onHide: () => {
					console.log('position dropdown has been hidden');
				},
				onShow: () => {
					console.log('position dropdown has been shown');
				},
				onToggle: () => {
					console.log('position dropdown has been toggled');
				}
			};

			const positionInstanceOptions: InstanceOptions = {
				id: 'dropdownMenuPositions',
				override: true
			};

			positionDropdown = new Dropdown(
				positionTargetEl,
				positionTriggerEl,
				positionOptions,
				positionInstanceOptions
			);
		}

		// Cleanup function
		return () => {
			if (dropdown) {
				dropdown.hide();
			}
			if (positionDropdown) {
				positionDropdown.hide();
			}
		};
	});

	// Use $state() for reactive variables in Svelte 5
	let activeTab = $state<'general' | 'application'>('general');

	let generalForm = $state({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		message: ''
	});

	let applicationForm = $state({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		position: [] as string[], // Fix typing
		resume: null as FileList | null,
		message: ''
	});

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
		isScrolling = false,
		container = null,
		class: className = ''
	} = $props();

	let activePosition = $state<'server' | 'foodRunner' | 'driver' | 'kitchenHelper'>('server');

	function scrollPrev() {
		if (goBack) {
			const targetElement =
				document.getElementById(goBack) || document.querySelector(`[data-scroll-ref="${goBack}"]`);

			if (targetElement && container) {
				container.scrollTo({
					top: targetElement.offsetTop - 64,
					behavior: 'smooth'
				});
			} else {
				scrollElement(goBack);
			}
		}
	}

	function scrollNext() {
		if (goTo) {
			const targetElement =
				document.getElementById(goTo) || document.querySelector(`[data-scroll-ref="${goTo}"]`);

			if (targetElement && container) {
				container.scrollTo({
					top: targetElement.offsetTop - 64,
					behavior: 'smooth'
				});
			} else {
				scrollElement(goTo);
			}
		}
	}

	function resetForm(formType: string) {
		if (formType === 'general') {
			generalForm.firstName = '';
			generalForm.lastName = '';
			generalForm.email = '';
			generalForm.phone = '';
			generalForm.message = '';
		} else {
			applicationForm.firstName = '';
			applicationForm.lastName = '';
			applicationForm.email = '';
			applicationForm.phone = '';
			applicationForm.position = [];
			applicationForm.resume = null;
			applicationForm.message = '';
		}
	}

	function handleGeneralSubmit(event: Event) {
		event.preventDefault();
		// sendEmail(generalForm, 'general');
	}

	function handleApplicationSubmit(event: Event) {
		event.preventDefault();
		// sendEmail(applicationForm, 'application');
	}

	function setActiveTab(tab: 'general' | 'application') {
		activeTab = tab;
		// Close dropdown after selection
		if (dropdown) {
			dropdown.hide();
		}
	}

	function setActivePosition(position: 'server' | 'foodRunner' | 'driver' | 'kitchenHelper') {
		activePosition = position;
		// Update the form position array
		applicationForm.position = [position];
		// Close dropdown after selection
		if (positionDropdown) {
			positionDropdown.hide();
		}
	}

	// Helper function to get position display name
	function getPositionDisplayName(position: string): string {
		switch (position) {
			case 'server':
				return 'Server';
			case 'foodRunner':
				return 'Food Runner';
			case 'driver':
				return 'Driver';
			case 'kitchenHelper':
				return 'Kitchen Helper';
			default:
				return 'Select Position';
		}
	}
</script>

<section
	use:scrollRef={thisRef}
	id={thisRef}
	data-scroll-ref={thisRef}
	class="bg-tertiary relative flex min-h-[calc(100vh-4rem)] flex-col xl:flex-row {className}"
>
	<div class="flex xl:hidden">
		<img src="/webp/m-contact1.webp" class="w-screen object-cover" alt="" />
	</div>
	<div class="text-darkText font-instrument flex flex-col items-start justify-start xl:w-1/2">
		<div class="mx-8 my-12 flex w-full flex-col items-start xl:my-24 xl:ml-16">
			<div class="mr-16 mb-4 flex flex-col xl:mr-48">
				<h1 class="text-darkText mb-1 w-4/5 text-6xl sm:w-full">{title}</h1>
				<h1 class="text-lightText mb-12 text-2xl">{thaiTitle}</h1>

				<p class="text-darkText font-MonaSans mb-8">
					{@html body}
				</p>

				<!-- Wrap the dropdown in a relative container -->
				<div class="relative">
					<button
						id="dropdownButton"
						data-dropdown-toggle="dropdownMenu"
						class="border-darkText bg-tertiary font-MonaSans mt-1 mr-1 mb-1 flex w-full items-center justify-between rounded-[5px] border-1 p-2"
						type="button"
					>
						{activeTab === 'general' ? 'General' : 'Apply'}
						<svg
							class="ms-3 h-2.5 w-2.5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 10 6"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m1 1 4 4 4-4"
							/>
						</svg>
					</button>

					<!-- Dropdown menu - now positioned absolutely within the relative container -->
					<div
						id="dropdownMenu"
						class="bg-tertiary text-darkText border-darkText font-MonaSans absolute right-0 left-0 z-10 hidden w-full rounded-[5px] border"
					>
						<ul class="text-darkText py-2 text-[1rem]" aria-labelledby="dropdownButton">
							<li>
								<button
									class="block w-full px-4 py-2 text-left {activeTab === 'general'
										? 'font-semibold'
										: ''}"
									onclick={() => setActiveTab('general')}
									type="button"
								>
									I have an inquiry.
								</button>
							</li>
							<li>
								<button
									class="block w-full px-4 py-2 text-left {activeTab === 'application'
										? 'font-semibold'
										: ''}"
									onclick={() => setActiveTab('application')}
									type="button"
								>
									I want to apply for a position.
								</button>
							</li>
						</ul>
					</div>
				</div>

				{#if activeTab === 'general'}
					<form
						action="https://api.web3forms.com/submit"
						method="POST"
						class="font-MonaSans font-lightText flex flex-col"
						id="general"
					>
						<input type="hidden" name="access_key" value="fde62125-4609-4617-98ce-76bf3ef7159e" />
						<div class="mt-8 grid grid-cols-2 grid-rows-2">
							<input
								type="text"
								name="First Name"
								placeholder="First Name"
								bind:value={generalForm.firstName}
								class="border-darkText bg-tertiary mt-1 mr-1 mb-1 rounded-[5px] border-1"
							/>
							<input
								type="text"
								name="Last Name"
								placeholder="Last Name"
								bind:value={generalForm.lastName}
								class="border-darkText bg-tertiary mt-1 mb-1 ml-1 rounded-[5px] border-1"
							/>
							<input
								type="text"
								name="Email Address"
								placeholder="Email Address"
								bind:value={generalForm.email}
								class="border-darkText bg-tertiary mt-1 mr-1 mb-1 rounded-[5px] border-1"
							/>
							<input
								type="text"
								name="Phone Number"
								placeholder="Phone Number"
								bind:value={generalForm.phone}
								class="border-darkText bg-tertiary mt-1 mb-1 ml-1 rounded-[5px] border-1"
							/>
						</div>
						<div class="">
							<textarea
								placeholder="Message"
								name="message"
								bind:value={generalForm.message}
								class="border-darkText text-darkText bg-tertiary my-1 h-48 w-full rounded-[5px] border-1"
							></textarea>
						</div>
						<input type="hidden" name="redirect" value="https://web3forms.com/success" />
						<button
							type="submit"
							class="border-darkText hover:bg-darkText text-darkText hover:text-tertiary rounded-[5px] border-2 p-2 transition duration-300 xl:px-5.5 xl:py-2"
							>Submit
						</button>
					</form>
				{:else if activeTab === 'application'}
					<form
						action="https://api.web3forms.com/submit"
						method="POST"
						class="font-MonaSans font-lightText flex flex-col"
						id="application"
					>
						<input type="hidden" name="access_key" value="fde62125-4609-4617-98ce-76bf3ef7159e" />
						<div class="mt-8 grid grid-cols-2 grid-rows-3 gap-x-2">
							<input
								type="text"
								name="First Name"
								placeholder="First Name"
								bind:value={applicationForm.firstName}
								class="border-darkText bg-tertiary mt-1 mr-1 mb-1 rounded-[5px] border-1"
							/>
							<input
								type="text"
								name="Last Name"
								placeholder="Last Name"
								bind:value={applicationForm.lastName}
								class="border-darkText bg-tertiary mt-1 mb-1 ml-1 rounded-[5px] border-1"
							/>
							<input
								type="text"
								name="Email Address"
								placeholder="Email Address"
								bind:value={applicationForm.email}
								class="border-darkText bg-tertiary mt-1 mr-1 mb-1 rounded-[5px] border-1"
							/>
							<input
								type="text"
								name="Phone Number"
								placeholder="Phone Number"
								bind:value={applicationForm.phone}
								class="border-darkText bg-tertiary mt-1 mb-1 ml-1 rounded-[5px] border-1"
							/>

							<!-- Position Dropdown - Fixed -->
							<div class="relative w-full mt-1 mb-1 mr-1 bg-tertiary">
								<button
									id="dropdownButtonPositions"
									data-dropdown-toggle="dropdownMenuPositions"
									class="border-darkText bg-tertiary flex w-full items-center justify-between rounded-[5px] border-1 p-2"
									type="button"
								>
									<span>{getPositionDisplayName(activePosition)}</span>
									<svg
										class="h-2.5 w-2.5"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 10 6"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="m1 1 4 4 4-4"
										/>
									</svg>
								</button>

								<!-- Position Dropdown menu -->
								<div
									id="dropdownMenuPositions"
									class="bg-tertiary text-darkText border-darkText font-MonaSans absolute right-0 left-0 z-10 hidden w-full rounded-[5px] border"
								>
									<ul
										class="text-darkText py-2 text-[1rem]"
										aria-labelledby="dropdownButtonPositions"
									>
										<li>
											<button
												class="block w-full px-4 py-2 text-left {activePosition === 'server'
													? 'font-semibold'
													: ''}"
												onclick={() => setActivePosition('server')}
												type="button"
											>
												Server
											</button>
										</li>
										<li>
											<button
												class="block w-full px-4 py-2 text-left {activePosition === 'foodRunner'
													? 'font-semibold'
													: ''}"
												onclick={() => setActivePosition('foodRunner')}
												type="button"
											>
												Food Runner
											</button>
										</li>
										<li>
											<button
												class="block w-full px-4 py-2 text-left {activePosition === 'driver'
													? 'font-semibold'
													: ''}"
												onclick={() => setActivePosition('driver')}
												type="button"
											>
												Driver
											</button>
										</li>
										<li>
											<button
												class="block w-full px-4 py-2 text-left {activePosition === 'kitchenHelper'
													? 'font-semibold'
													: ''}"
												onclick={() => setActivePosition('kitchenHelper')}
												type="button"
											>
												Kitchen Helper
											</button>
										</li>
									</ul>
								</div>

								<!-- Hidden input for form submission -->
								<input type="hidden" name="position" value={activePosition} />
							</div>

							<input
								type="file"
								name="resume"
								accept=".pdf,.doc,.docx"
								bind:files={applicationForm.resume}
								class="border-darkText bg-tertiary file:bg-tertiary file:text-darkText w-full my-1 rounded-[5px] border-1 p-1 pl-5 file:rounded-[5px] file:border file:p-1 ml-1 file:text-[1rem] file:font-normal"
							/>
						</div>
						<div class="">
							<textarea
								placeholder="Message"
								name="message"
								bind:value={applicationForm.message}
								class="border-darkText text-darkText bg-tertiary my-1 h-48 w-full rounded-[5px] border-1 p-1"
							></textarea>
						</div>
						<input type="hidden" name="redirect" value="https://web3forms.com/success" />
						<button
							type="submit"
							class="border-darkText hover:bg-darkText text-darkText hover:text-tertiary rounded-[5px] border-2 p-2 transition duration-300 xl:px-5.5 xl:py-2"
							>Submit Application
						</button>
					</form>
				{/if}
			</div>
		</div>
	</div>

	<div class="hidden w-1/2 flex-auto xl:flex">
		<img src="/webp/contact1.webp" class="h-full w-full object-cover" alt="" />
	</div>
</section>
