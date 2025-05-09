<script>
	let {
		id = '',
		title = '',
		thaiTitle = '',
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
					top: targetElement.offsetTop,
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
					top: targetElement.offsetTop,
					behavior: 'smooth'
				});
			} else {
				// Fallback to svelte-scrolling's method
				scrollElement(nextSection);
			}
		}
	}

	
</script>

<section {id} class="bg-tertiary relative flex h-fit snap-start snap-normal flex-col sm:flex-row">


	{#if isFooter}
		<div class="bottom-0 z-50 snap-end snap-normal">
			<Footer />
		</div>
	{:else}
		<!-- Mobile View -->
		<div class="sm:hidden flex">
			<img src={mobilePath} class="w-screen object-cover" alt="" />
		</div>
		<div class="sm:hidden w-full bg-tertiary text-darkText text-xs">
			<div class="flex flex-col items-center py-4">
				{#if previousSection}
					<button onclick={scrollPrev} class="text-lightText hover:text-darkText mb-2">
						{prevTitle}
					</button>
				{/if}
			
			</div>
			<!-- Header for mobile view -->
			<div class="w-full pt-8 pb-2 px-12">
				<h1 class="text-darkText text-3xl mb-0 font-instrument">{title}</h1>
				<h2 class="text-lightText text-xl  font-instrument">{thaiTitle}</h2>
			</div>
			
			<!-- Menu Content for Mobile -->
			<div class="px-12 py-4 font-DMSans text-sm">
				{#each groupedMenuItems as group, groupIndex}
					<!-- Category Header -->
					{#if group.subheader}
						<!-- <div class="mt-6 mb-2 text-xl font-bold text-darkText pb-1">
							{group.subheader}
						</div> -->
						
						<div class="font-DMSans mt-8 mb-4 flex {groupIndex === 0 ? 'mt-4' : ''}">
							<div class="text-darkText flex-grow font-semibold">{group.subheader}</div>

							{#if pCol1 || pCol2 || pCol3}
								<!-- Price column headers -->
								<div class="flex ">
									<div class="flex space-x-6">
										{#if pCol1}<div class="w-10 text-right ">{pCol1}</div>{/if}
										{#if pCol2}<div class="w-10 text-right">{pCol2}</div>{/if}
										{#if pCol3}<div class="w-10 text-right">{pCol3}</div>{/if}
									</div>
								</div>
							{:else if group.groupPrice1 || group.groupPrice2 || group.groupPrice3}
								<!-- Price column headers -->
								<div class="flex font-extrabold">
									<div class="flex space-x-2">
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
					
					<!-- Menu Items -->
					{#each group.items as item, i}
						<div class="mb-4 text-xs">
							<div class="flex justify-between">
								<div class="font-medium text-darkText">
									
									{#if item.name}
										{item.name}
									{:else if !item.name && item.extras}
										<span class="text-lightText italic  w-3/4">{item.extras}</span>
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
								{#if hasMultiplePrices(item)}
									<div class="flex space-x-2 ">
										{#if pCol1 && item.p1 !== undefined}<div class="text-right text-darkText">{item.p1}</div>{/if}
										{#if pCol2 && item.p2 !== undefined}<div class="text-right text-darkText">{item.p2}</div>{/if}
										{#if pCol3 && item.p3 !== undefined}<div class="text-right text-darkText">{item.p3}</div>{/if}
										{#if group.groupPrice1 !== undefined}<div class="text-right text-darkText">{item.p1}</div>{/if}
										{#if group.groupPrice2 !== undefined}<div class="text-right text-darkText">{item.p2}</div>{/if}
										{#if group.groupPrice3 !== undefined}<div class="text-right text-darkText">{item.p3}</div>{/if}
									</div>
								{:else}
									<div class="text-right text-darkText">{item.price}</div>
								{/if}
							</div>
							
							<!-- Item description and details -->
							{#if item.description}
								<p class="text-lightText w-3/4">{item.description}</p>
							{/if}
							{#if item.region}
								<p class="text-lightText ">{item.region}</p>
							{/if}
							{#if item.name && item.extras}
								<p class="text-lightText italic  w-3/4">{item.extras}</p>
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
					<button onclick={scrollNext} class="text-lightText hover:text-darkText">
						{nextTitle}
					</button>
				{/if}
			</div>
		</div>
		
		<!-- Desktop View (unchanged) -->
		<div class="text-darkText font-instrument hidden sm:flex sm:flex-col sm:items-center sm:justify-center sm:w-1/2">
			{#if previousSection}
				<div class="mt-6 md:mt-12">
					<button
						onclick={scrollPrev}
						class="font-DMSans text-lightText hover:text-darkText hover:cursor-pointer"
					>
						<p>
							{prevTitle}
						</p>
					</button>
				</div>
			{/if}

			<div class="mx-8 mt-12 mb-12 flex flex-col sm:mx-36 sm:my-16 md:my-24 xl:my-36">
				<h1 class="text-darkText mb-4 text-6xl">{title}</h1>
				<h1 class="text-lightText mb-12 text-4xl">{thaiTitle}</h1>

				<!-- Menu Categories and Items -->
				{#each groupedMenuItems as group, groupIndex}
					<!-- Subheader -->
					{#if group.subheader}
						<div class="font-DMSans mt-8 mb-4 flex {groupIndex === 0 ? 'mt-4' : ''}">
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
						<div class="font-DMSans mb-6 flex">
							<div class="flex w-full flex-col sm:flex-row sm:justify-between">
								<!-- Left side: Item name, description, extras -->
								<div class="pr-4 sm:flex-grow sm:pr-8 ">
									<p class="font-medium ">
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
										<p class="text-lightText text-sm whitespace-pre-line">{item.description}</p>
									{/if}
									{#if item.region}
										<p class="text-lightText text-sm whitespace-pre-line">{item.region}</p>
									{/if}
									{#if item.extras}
										<p class="font-light whitespace-pre-line italic">{item.extras}</p>
									{/if}
								</div>

								<!-- Right side: Prices -->
								<div class="mt-1 flex font-medium sm:mt-0">
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
				<div class="mb-6 md:mb-12">
					<button
						onclick={scrollNext}
						class="font-DMSans text-lightText hover:text-darkText hover:cursor-pointer"
					>
						<p>
							{nextTitle}
						</p>
					</button>
				</div>
			{/if}
		</div>
		<div class="hidden w-1/2 flex-auto sm:flex ">
			<img src={imagePath} class="h-full w-full object-cover" alt="" />
		</div>
	{/if}
</section>