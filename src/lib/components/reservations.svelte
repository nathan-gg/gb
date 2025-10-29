<script lang="ts">
	let { title, thaiTitle, image } = $props();

	let curTab = $state(0);
</script>

<section class="bg-tertiary relative flex min-h-[calc(100vh-4rem)] flex-col xl:flex-row">
	<div class="flex xl:hidden">
		<img src="/webp/m-reservations.webp" class="w-screen object-cover" alt="" />
	</div>
	<div class="text-darkText font-instrument flex flex-col items-start justify-start xl:w-1/2">
		<div class="mx-8 my-12 flex w-3/4 flex-col items-start sm:ml-16 xl:my-24">
			<h1 class="text-darkText mb-1 w-4/5 text-6xl sm:w-full">{title}</h1>
			<h1 class="text-lightText mb-12 text-2xl">{thaiTitle}</h1>

			<div class="font-MonaSans text-darkText mb-12">
				<p class="mb-4">
					We understand that plans can change. If you need to cancel or modify your reservation,
					please review our policy below:
				</p>
				<ul class="mb-4 ml-4 list-disc">
					<li class="mb-4">
						Cancellations must be made at least 24 hours in advance to avoid any cancellation fees.
					</li>
					<li class="mb-4">
						Same-day cancellations or no-shows may result in a per-person charge to compensate for
						lost seating.
					</li>
					<li class="mb-4">
						For larger parties (6 or more), we require at least 48 hours' notice for cancellations.
					</li>
					<li class="mb-4">
						To cancel or modify your reservation, please call us at <a
							href="tel:+1 6044391919"
							class="underline">+1 (604) 439-1919</a
						>
						or email us at
						<a href="mailto:info@greenbasilthai.com" class="underline">info@greenbasilthai.com</a>.
					</li>
				</ul>
				<p>We appreciate your understanding and look forward to welcoming you soon!</p>
				<!-- <div>
					<button
						class="text-darkText border-darkText hover:text-tertiary hover:bg-darkText mt-4 rounded border-2 p-2 hover:border-transparent"
						>Make Reservation</button
					>
				</div> -->
			</div>
		</div>
	</div>
	<div class="hidden w-1/2 flex-auto xl:flex">
		<img src="/webp/reservations.webp" class="h-full w-full object-cover" alt="" />
	</div>
</section>
