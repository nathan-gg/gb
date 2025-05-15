<script>
	import { quintInOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	let { title, thaiTitle, image } = $props();

	let openSection = $state('');

	const menuCategories = [
		{
			id: 'dinner',
			name: 'Dinner',
			links: [
				{ text: 'Soups', href: '/full-menu#soups' },
				{ text: 'Appetizers', href: '/full-menu#appetizers' },
				{ text: 'Salads', href: '/full-menu#salad' },
				{ text: 'Curry', href: '/full-menu#curry' },
				{ text: 'Stir Fried', href: '/full-menu#stir-fried' },
				{ text: 'Noodles', href: '/full-menu#noodles' },
				{ text: 'Vegetables', href: '/full-menu#vegetables' },
				{ text: 'Rice', href: '/full-menu#rice' },
				{ text: 'Specialties', href: '/full-menu#specialties' },
				{ text: 'Desserts', href: '/full-menu#desserts' },
				{ text: 'Combinations', href: '/full-menu#combinations' }
			]
		},
		{
			id: 'hh',
			name: 'Happy Hour',
			links: [{ text: 'Happy Hour Menu', href: '/full-menu#happy-hour' }]
		},
		{
			id: 'bar',
			name: 'Bar',
			links: [
				{ text: 'Coffee, Tea & Soft Drinks', href: '/full-menu#ctsd' },
				{ text: 'Non-Spirited', href: '/full-menu#non-spirited' },
				{ text: 'Signature Cocktails', href: '/full-menu#signature-cocktails' },
				{ text: 'Classic Cocktails', href: '/full-menu#classic-cocktails' },
				{ text: 'Beer', href: '/full-menu#beer' },
				{ text: 'Cider', href: '/full-menu#cider' },
				{ text: 'Vodka', href: '/full-menu#vodka' },
				{ text: 'Gin', href: '/full-menu#gin' },
				{ text: 'Rum', href: '/full-menu#rum' },
				{ text: 'Tequila', href: '/full-menu#tequila' },
				{ text: 'Whisky', href: '/full-menu#whisky' },
				{ text: 'Scotch', href: '/full-menu#scotch' },
				{ text: 'Brandy', href: '/full-menu#brandy' },
				{ text: 'Aperitif & Digestif', href: '/full-menu#aperitif-digestif' },
				{ text: 'Vermouth & Liqueurs', href: '/full-menu#vermouth-liqueurs' },
				{ text: 'Specialty Coffee & Tea', href: '/full-menu#sct' }
			]
		},
		{
			id: 'wine',
			name: 'Wine',
			links: [
				{ text: 'Featured Wine', href: '/full-menu#featured-wine' },
				{ text: 'White Wines', href: '/full-menu#white-wines' },
				{ text: 'Rosé', href: '/full-menu#rose' },
				{ text: 'Red Wines', href: '/full-menu#red-wines' }
			]
		}
	];

	function toggle(sectionId) {
		openSection = openSection === sectionId ? '' : sectionId;
	}
</script>

<section class="flex min-h-screen w-screen flex-col sm:flex-row">
	<div class="flex sm:hidden">
		<img src="/webp/orderOnlineMobile.webp" class="w-screen object-cover" alt="" />
	</div>

	<div class="bg-tertiary text-darkText font-instrument flex flex-col items-center sm:w-1/2">
		<div class="mx-8 my-24 flex w-2/3 flex-col sm:w-1/4">
			<h1 class="text-darkText mb-4 text-6xl">{title}</h1>
			<h1 class="text-lightText mb-12 text-4xl">{thaiTitle}</h1>

			<div class="font-DMSans text-darkText group flex flex-col text-3xl">
				{#each menuCategories as section (section.id)}
					<button
						class="mt-4 text-left transition-opacity duration-200 group-hover:opacity-50 hover:!opacity-100 {openSection ===
						section.id
							? '!opacity-100'
							: ''}"
						onclick={() => toggle(section.id)}
					>
						{section.name}
					</button>

					{#if openSection === section.id}
						<div
							transition:slide={{ duration: 250, easing: quintInOut }}
							class="flex flex-col text-xl"
						>
							{#each section.links as link}
								<a
									href={link.href}
									class="mb-2 inline-block transition-opacity duration-200 group-hover:opacity-50 hover:!opacity-100"
								>
									{link.text}
								</a>
							{/each}
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>

	<div class="hidden w-1/2 flex-auto sm:flex">
		<img src="/webp/menuMain.webp" class="h-full w-full object-cover" alt="" />
	</div>
</section>
