<script>
	export let id = '';
	export let title = '';
	export let thaiTitle = '';
	export let pCol1 = '';
	export let pCol2 = '';
	export let pCol3 = '';
	export let previousSection = '';
	export let nextSection = '';
	export let prevTitle = '';
	export let nextTitle = '';
	export let menuItems = [];
	export let imagePath = '/webp/menuBg.webp';
	export let mobilePath = '/webp/menuBgMobile.webp';

	import { scrollTo } from 'svelte-scrolling';
	
	// Group menu items by their subheaders
	function groupItemsBySubheader(items) {
		const grouped = [];
		let currentGroup = null;
		
		items.forEach(item => {
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
</script>

<section
	{id}
	class="bg-tertiary relative flex h-fit snap-start snap-normal flex-col sm:flex-row"
>
	<div class="flex sm:hidden">
		<img src={mobilePath} class="w-screen object-cover" alt="" />
	</div>
	<div class="text-darkText font-instrument flex flex-col items-center justify-center sm:w-1/2">
		{#if previousSection}
			<div class="mt-6 md:mt-12">
				<div
					use:scrollTo={{ ref: previousSection, offset: -64 }}
					class="font-DMSans text-lightText hover:text-darkText"
				>
					<p>{prevTitle}</p>
				</div>
			</div>
		{/if}

		<div class="mx-8 mt-12 mb-12 flex flex-col sm:mx-16 sm:my-16 md:my-24 xl:my-36">
			<h1 class="text-darkText mb-4 text-6xl">{title}</h1>
			<h1 class="text-lightText mb-12 text-4xl">{thaiTitle}</h1>
			
			<!-- Menu Categories and Items -->
			{#each groupedMenuItems as group, groupIndex}
				<!-- Subheader -->
				{#if group.subheader}
					<div class="font-DMSans flex mb-4 mt-8 {groupIndex === 0 ? 'mt-4' : ''}">
						<div class="flex-grow text-xl font-semibold text-darkText">{group.subheader}</div>
						
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
								{#if group.groupPrice1}<div class="w-10 text-right">{group.groupPrice1}</div>{/if}
								{#if group.groupPrice2}<div class="w-10 text-right">{group.groupPrice2}</div>{/if}
								{#if group.groupPrice3}<div class="w-10 text-right">{group.groupPrice3}</div>{/if}
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
							<div class="pr-4 sm:pr-8 sm:flex-grow">
								<p class="font-medium">
									{item.name}
									{#if item.mild}<img src="/spiceMild.svg" alt="Mild Spice" class="inline-block h-4 w-4" />{/if}
									{#if item.medium}<img src="/spiceMedium.svg" alt="Medium Spice" class="inline-block h-4 w-4" />{/if}
									{#if item.hot}<img src="/spiceHot.svg" alt="Hot Spice" class="inline-block h-4 w-4" />{/if}
									{#if item.veryHot}<img src="/spiceVeryHot.svg" alt="Very Hot Spice" class="inline-block h-4 w-4" />{/if}
									{#if item.tag}<span class="font-semibold text-[#D08111]">{item.tag}</span>{/if}
								</p>
								{#if item.description}
									<p class="text-lightText text-sm whitespace-pre-line">{item.description}</p>
								{/if}
								{#if item.region}
									<p class="text-lightText text-sm whitespace-pre-line">{item.region}</p>
								{/if}
								{#if item.extras}
									<p class="font-light italic whitespace-pre-line">{item.extras}</p>
								{/if}
							</div>

							<!-- Right side: Prices -->
							<div class="flex font-medium mt-1 sm:mt-0">
								{#if hasMultiplePrices(item)}
									<div class="flex space-x-6">
										{#if pCol1 && item.p1 !== undefined}<div class="w-10 text-right">{item.p1}</div>{/if}
										{#if pCol2 && item.p2 !== undefined}<div class="w-10 text-right">{item.p2}</div>{/if}
										{#if pCol3 && item.p3 !== undefined}<div class="w-10 text-right">{item.p3}</div>{/if}
										{#if group.groupPrice1 !== undefined}<div class="w-10 text-right">{item.p1}</div>{/if}
										{#if group.groupPrice2 !== undefined}<div class="w-10 text-right">{item.p2}</div>{/if}
										{#if group.groupPrice3 !== undefined}<div class="w-10 text-right">{item.p3}</div>{/if}
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
				<div
					use:scrollTo={{ ref: nextSection, offset: -64 }}
					class="font-DMSans text-lightText hover:text-darkText"
				>
					<p>{nextTitle}</p>
				</div>
			</div>
		{/if}
	</div>

	<div class="hidden w-1/2 flex-auto sm:flex">
		<img src={imagePath} class="h-full w-full object-cover" alt="" />
	</div>
</section>