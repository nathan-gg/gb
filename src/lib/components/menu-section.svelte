<script>
	// At the top of your script section
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	// Add a reactive effect that fires when this is the last section and becomes visible
	$effect(() => {
		// Check if this is the last section (no nextSection)
		if (!nextSection) {
			// Add intersection observer to detect when this section is visible
			const observer = new IntersectionObserver(
				(entries) => {
					if (entries[0].isIntersecting) {
						// Dispatch an event to notify parent that last section is visible
						dispatch('lastSectionVisible', true);
					}
				},
				{ threshold: 0 }
			); // Trigger when 50% of the element is visible

			// Get the section element
			const sectionElement = document.getElementById(id);
			if (sectionElement) {
				observer.observe(sectionElement);
			}

			return () => {
				// Clean up observer
				if (sectionElement) observer.unobserve(sectionElement);
			};
		}
	});

	let {
		id = '',
		title = '',
		thaiTitle = '',
		sectionDetails = '',
		pCol1 = '',
		pCol2 = '',
		pCol3 = '',
		isFooter = '',
		previousSection = '',
		nextSection = '',
		prevTitle = '',
		nextTitle = '',
		menuItems = [],
		imagePath = '/webp/menuBg.webp',
		mobilePath = '/webp/menuBgMobile.webp',
		isScrolling,
		container,
		sHead = ''
	} = $props();

	import { scrollTo, scrollElement } from 'svelte-scrolling';
	import Footer from '../components/footer.svelte';

	// Group menu items by their subheaders
	function groupItemsBySubheader(items) {
		const grouped = [];
		let currentGroup = null;

		items.forEach((item) => {
			// If this item is a subheader, create a new group
			if (item.isSubheader) {
				currentGroup = {
					subheader: item.name,
					groupPrice1: item.gP1,
					groupPrice2: item.gP2,
					groupPrice3: item.gP3,
					items: []
				};
				grouped.push(currentGroup);
			} else if (currentGroup) {
				// Add item to current group
				currentGroup.items.push(item);
			} else {
				// If no group exists yet, create a default one
				currentGroup = {
					subheader: '',
					items: [item]
				};
				grouped.push(currentGroup);
			}
		});

		return grouped;
	}

	// Process the menu items into grouped format
	const groupedMenuItems = groupItemsBySubheader(menuItems);

	// Function to determine if an item has multiple price columns
	function hasMultiplePrices(item) {
		return item.p1 !== undefined || item.p2 !== undefined || item.p3 !== undefined;
	}

	// Function to calculate price column widths based on the number of columns
	function getPriceColWidth() {
		let numCols = 0;
		if (pCol1) numCols++;
		if (pCol2) numCols++;
		if (pCol3) numCols++;

		return numCols > 0 ? `w-${numCols * 10}` : '';
	}

	// Helper functions for programmatic scrolling that use the parent container
	function scrollPrev() {
		if (previousSection) {
			// Use the element's ID or a ref
			const targetElement =
				document.getElementById(previousSection) ||
				document.querySelector(`[data-scroll-ref="${previousSection}"]`);

			if (targetElement && container) {
				// Manual scroll within container
				container.scrollTo({
					top: targetElement.offsetTop - 64,
					behavior: 'smooth'
				});
			} else {
				// Fallback to svelte-scrolling's method
				scrollElement(previousSection);
			}
		}
	}

	function scrollNext() {
		if (nextSection) {
			// Use the element's ID or a ref
			const targetElement =
				document.getElementById(nextSection) ||
				document.querySelector(`[data-scroll-ref="${nextSection}"]`);

			if (targetElement && container) {
				// Manual scroll within container
				container.scrollTo({
					top: targetElement.offsetTop + 64,
					behavior: 'smooth'
				});
			} else {
				// Fallback to svelte-scrolling's method
				scrollElement(nextSection);
			}
		}
	}
</script>

<section {id} class="bg-blue relative flex h-fit snap-start snap-normal flex-col xl:flex-row">
	{#if isFooter}
		<div class="bottom-0 z-50 snap-end snap-normal">
			<Footer />
		</div>
	{:else}
		<!-- Mobile View -->
		<div class="flex xl:hidden">
			<img src="/webp/{mobilePath}.webp" class="w-screen object-cover" alt="The {title} Section." />
		</div>
		<div class="bg-tertiary text-darkText w-full text-[1rem] xl:hidden">
			<div class="flex flex-col items-center py-4">
				{#if previousSection}
					<button onclick={scrollPrev} class="text-lightText hover:text-darkText transition duration-300 mb-2">
						{prevTitle}
					</button>
				{/if}
			</div>
			<!-- Header for mobile view -->
			<div class="mx-8 mt-12 mb-12 flex flex-col xl:mx-16">
				<h1 class="text-darkText mb-1 w-4/5 text-6xl sm:w-full font-instrument">{title}</h1>
				<h1 class="text-lightText mb-12 text-2xl">{thaiTitle}</h1>
				{#if sectionDetails}
					<p class="text-lightText font-instrument text-xl  xl:text-5xl">
						{sectionDetails}
					</p>
				{/if}
			</div>

			<!-- Menu Content for Mobile -->
			<div class="font-MonaSans text-[1rem]  xl:text-3xl mx-8 mt-12 mb-12  xl:mx-16">
				{#each groupedMenuItems as group, groupIndex}
					<!-- Category Header -->
					{#if group.subheader}
						<!-- <div class="mt-6 mb-2 text-xl font-bold text-darkText pb-1">
							{group.subheader}
						</div> -->

						<div class="font-MonaSans mt-8 mb-4 flex {groupIndex === 0 ? 'mt-4' : ''}">
							<!-- {#if group.subheader !== title} -->
							<p
								class="text-darkText w-4/5 flex-grow text-xl font-semibold whitespace-pre-line xl:text-3xl"
							>
								{group.subheader}
							</p>
							<!-- {/if} -->

							{#if pCol1 || pCol2 || pCol3}
								<!-- Price column headers -->
								<div class="flex">
									<div class="flex space-x-6">
										{#if pCol1}<div class="w-fit text-center">{pCol1}</div>{/if}
										{#if pCol2}<div class="w-fit text-center">{pCol2}</div>{/if}
										{#if pCol3}<div class="w-fit text-center">{pCol3}</div>{/if}
									</div>
								</div>
							{:else if group.groupPrice1 || group.groupPrice2 || group.groupPrice3}
								<!-- Price column headers -->
								<!-- <div class="flex text-[1rem] font-extrabold">
									<div class="flex">
										{#if group.groupPrice1}<div class="w-fit text-center">
												{group.groupPrice1}
											</div>{/if}
										{#if group.groupPrice2}<div class="mx-1 w-fit text-center">
												{group.groupPrice2}
											</div>{/if}
										{#if group.groupPrice3}<div class="w-fit text-center">
												{group.groupPrice3}
											</div>{/if}
									</div>
								</div> -->
							{/if}
						</div>
					{/if}

					<!-- Menu Items -->
					{#each group.items as item, i}
						<div class="text-[1rem] mb-4 xl:text-xl">
							<div class="flex justify-between">
								<div class="text-darkText font-medium">
									{#if item.name}
										{item.name}
									{:else if !item.name && item.extras}
										<p class="text-lightText whitespace-pre-line italic">{item.extras}</p>
									{/if}
									{#if item.mild}<img
											src="/spiceMild.svg"
											alt="Mild Spice"
											class="inline-block h-4 w-4"
										/>{/if}
									{#if item.medium}<img
											src="/spiceMedium.svg"
											alt="Medium Spice"
											class="inline-block h-4 w-4"
										/>{/if}
									{#if item.hot}<img
											src="/spiceHot.svg"
											alt="Hot Spice"
											class="inline-block h-4 w-4"
										/>{/if}
									{#if item.veryHot}<img
											src="/spiceVeryHot.svg"
											alt="Very Hot Spice"
											class="inline-block h-4 w-4"
										/>{/if}
									{#if item.tag}<span class="font-semibold text-[#D08111]">{item.tag}</span>{/if}
								</div>

								<!-- Item prices -->
								<!-- {#if hasMultiplePrices(item)}
									<div class="flex space-x-2 ">
										{#if pCol1 && item.p1 !== undefined}<div class="text-center text-darkText">{item.p1}</div>{/if}
										{#if pCol2 && item.p2 !== undefined}<div class="text-center text-darkText">{item.p2}</div>{/if}
										{#if pCol3 && item.p3 !== undefined}<div class="text-center text-darkText">{item.p3}</div>{/if}
										{#if group.groupPrice1 !== undefined}<div class="text-center text-darkText">{item.p1}</div>{/if}
										{#if group.groupPrice2 !== undefined}<div class="text-center text-darkText">{item.p2}</div>{/if}
										{#if group.groupPrice3 !== undefined}<div class="text-center text-darkText">{item.p3}</div>{/if}
									</div>
								{:else}
									<div class="text-right text-darkText">{item.price}</div>
								{/if} -->
							</div>

							<!-- Item description and details -->
							{#if item.description}
								<p class="text-lightText whitespace-pre-line">{item.description}</p>
							{/if}
							{#if item.region}
								<p class="text-lightText whitespace-pre-line">{item.region}</p>
							{/if}
							{#if item.name && item.extras}
								<p class="text-lightText whitespace-pre-line italic">{item.extras}</p>
							{/if}
							{#if hasMultiplePrices(item)}
								<div class="flex space-x-2">
									{#if group.groupPrice1 !== undefined && item.p1 !== ''}
										<div class="text-darkText text-center">
											<span class="font-bold">{group.groupPrice1}</span>
											- <span class="">{item.p1}</span>
										</div>
									{/if}
									{#if group.groupPrice2 !== undefined && item.p2 !== ''}
										<div class="text-darkText text-center">
											<span class="font-bold">{group.groupPrice2}</span>
											- <span class="">{item.p2}</span>
										</div>
									{/if}
									{#if group.groupPrice3 !== undefined && item.p3 !== ''}
										<div class="text-darkText text-center">
											<span class="font-bold">{group.groupPrice3}</span>
											- <span class="y">{item.p3}</span>
										</div>
									{/if}
								</div>
							{:else}
								<div class=" text-darkText font-bold">{item.price}</div>
							{/if}
						</div>
					{/each}

					<!-- Add additional spacing between groups -->
					{#if groupIndex < groupedMenuItems.length - 1}
						<div class="mb-4"></div>
					{/if}
				{/each}
			</div>

			<!-- Navigation for mobile -->
			<div class="flex flex-col items-center py-4">
				{#if nextSection}
					<button onclick={scrollNext} class="text-lightText hover:text-darkText mb-12 xl:mb-0 transition duration-300">
						{nextTitle}
					</button>
				{/if}
			</div>
		</div>

		<!-- Desktop View (unchanged) -->
		<div
			class="text-darkText font-instrument hidden xl:flex xl:w-1/2 xl:flex-col "
		>
			{#if previousSection}
				<div class="mt-6 xl:mt-12 w-full flex xl:justify-center xl:items-center">
					<button
						onclick={scrollPrev}
						class="font-MonaSans text-lightText hover:text-darkText  transition duration-300 hover:cursor-pointer"
					>
						<p>
							{prevTitle}
						</p>
					</button>
				</div>
			{/if}

			<div class="mx-8 mt-12 mb-12 flex flex-col xl:mx-16">
				<h1 class="text-darkText mb-1 w-4/5 text-6xl sm:w-full">{title}</h1>
			
				{#if sectionDetails}
					<h1 class="text-lightText mb-12 text-2xl">{thaiTitle}</h1>
					<p class="text-lightText font-MonaSans text-[1rem] mb-12">{sectionDetails}</p>
				{:else}
					<h1 class="text-lightText mb-12 text-2xl">{thaiTitle}</h1>
				{/if}

				<!-- Menu Categories and Items -->
				{#each groupedMenuItems as group, groupIndex}
					<!-- Subheader -->
					{#if group.subheader}
						<div class="font-MonaSans mt-8 mb-4 flex {groupIndex === 0 ? 'mt-4' : ''}">
							<div class="text-darkText flex-grow text-xl font-semibold">{group.subheader}</div>

							{#if pCol1 || pCol2 || pCol3}
								<!-- Price column headers -->
								<div class="flex font-medium">
									<div class="flex space-x-6">
										{#if pCol1}<div class="w-10 text-right">{pCol1}</div>{/if}
										{#if pCol2}<div class="w-10 text-right">{pCol2}</div>{/if}
										{#if pCol3}<div class="w-10 text-right">{pCol3}</div>{/if}
									</div>
								</div>
							{:else if group.groupPrice1 || group.groupPrice2 || group.groupPrice3}
								<!-- Price column headers -->
								<div class="flex font-medium">
									<div class="flex space-x-6">
										{#if group.groupPrice1}<div class="w-10 text-right">
												{group.groupPrice1}
											</div>{/if}
										{#if group.groupPrice2}<div class="w-10 text-right">
												{group.groupPrice2}
											</div>{/if}
										{#if group.groupPrice3}<div class="w-10 text-right">
												{group.groupPrice3}
											</div>{/if}
									</div>
								</div>
							{/if}
						</div>
					{/if}

					<!-- Items in this group -->
					{#each group.items as item, i}
						<div class="font-MonaSans mb-6 flex">
							<div class="flex w-full flex-col xl:flex-row xl:justify-between">
								<!-- Left side: Item name, description, extras -->
								<div class="pr-4 xl:flex-grow xl:pr-8">
									<p class="font-medium">
										{item.name}
										{#if item.mild}<img
												src="/spiceMild.svg"
												alt="Mild Spice"
												class="inline-block h-4 w-4"
											/>{/if}
										{#if item.medium}<img
												src="/spiceMedium.svg"
												alt="Medium Spice"
												class="inline-block h-4 w-4"
											/>{/if}
										{#if item.hot}<img
												src="/spiceHot.svg"
												alt="Hot Spice"
												class="inline-block h-4 w-4"
											/>{/if}
										{#if item.veryHot}<img
												src="/spiceVeryHot.svg"
												alt="Very Hot Spice"
												class="inline-block h-4 w-4"
											/>{/if}
										{#if item.tag}<span class="font-semibold text-[#D08111]">{item.tag}</span>{/if}
									</p>
									{#if item.description}
										<p class="text-lightText w-4/5 text-[1rem] whitespace-pre-line">
											{item.description}
										</p>
									{/if}
									{#if item.region}
										<p class="text-lightText text-[1rem] whitespace-pre-line">{item.region}</p>
									{/if}
									{#if item.extras}
										<p class="font-light whitespace-pre-line italic">{item.extras}</p>
									{/if}
								</div>

								<!-- Right side: Prices -->
								<div class="mt-1 flex font-medium xl:mt-0">
									{#if hasMultiplePrices(item)}
										<div class="flex space-x-6">
											{#if pCol1 && item.p1 !== undefined}<div class="w-10 text-right">
													{item.p1}
												</div>{/if}
											{#if pCol2 && item.p2 !== undefined}<div class="w-10 text-right">
													{item.p2}
												</div>{/if}
											{#if pCol3 && item.p3 !== undefined}<div class="w-10 text-right">
													{item.p3}
												</div>{/if}
											{#if group.groupPrice1 !== undefined}<div class="w-10 text-right">
													{item.p1}
												</div>{/if}
											{#if group.groupPrice2 !== undefined}<div class="w-10 text-right">
													{item.p2}
												</div>{/if}
											{#if group.groupPrice3 !== undefined}<div class="w-10 text-right">
													{item.p3}
												</div>{/if}
										</div>
									{:else}
										<div class="w-10 text-right">{item.price}</div>
									{/if}
								</div>
							</div>
						</div>
					{/each}
				{/each}
			</div>

			{#if nextSection}
				<div class="mb-6 xl:mb-12 flex xl:justify-center xl:items-center">
					<button
						onclick={scrollNext}
						class="font-MonaSans text-lightText  transition duration-300 hover:text-darkText hover:cursor-pointer"
					>
						<p>
							{nextTitle}
						</p>
					</button>
				</div>
			{/if}
		</div>
		<div class="hidden w-1/2 xl:flex">
			<img
				src="/webp/{imagePath}.webp"
				class=" h-full w-full overflow-hidden object-cover"
				alt="The {title} Section."
			/>
		</div>
	{/if}
</section>
