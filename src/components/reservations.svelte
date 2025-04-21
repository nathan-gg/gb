<script lang="ts">
	let { title, thaiTitle, image } = $props();

	let curTab = $state(0);
</script>

<section class="relative flex h-screen">
	<div class="flex w-6/12 flex-auto flex-col bg-[#E8E3DA] font-serif text-[#000000]">
		<div class="m-48 flex-grow">
			<h1 class="text-darkText mt-24 text-6xl">{title}</h1>
			<h1 class="text-lightText mb-12 text-4xl">{thaiTitle}</h1>

			<div class="font-DMSans text-darkText">
				<p class="mb-4">
					We understand that plans can change. If you need to cancel or modify your reservation,
					please review our policy below:
				</p>
				<ul class="list-disc ml-4 mb-4">
					<li class="mb-4">
						Cancellations must be made at least 24 hours in advance to avoid any cancellation fees.
					</li>
					<li class="mb-4">
						Same-day cancellations or no-shows may be subject to a charge of $X per person to
						compensate for lost seating.
					</li>
					<li class="mb-4">
						For larger parties (6 or more), we require at least 48 hours' notice for cancellations.
					</li>
					<li class="mb-4">
						To cancel or modify your reservation, please call us at <a
							href="tel:+1 6045007542"
							class="underline">+1 (604) 439-1919</a
						>
						or email us at
						<a href="mailto:info@greenbasilthai.com" class="underline">info@greenbasilthai.com</a>.
					</li>
				</ul>
				<p>We appreciate your understanding and look forward to welcoming you soon!</p>
			</div>
		</div>
	</div>

	<div class="w-6/12 flex-auto">
		<img src={image} class="h-full object-cover" alt="" />
	</div>
</section>
