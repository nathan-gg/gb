<script lang="ts">
	let { title, thaiTitle, image } = $props();

	let ddHover = $state(false);
	let ueHover = $state(false);

	function toggleUE() {
		ueHover = !ueHover;
	}
	function toggleDD() {
		ddHover = !ddHover;
	}
</script>

<section class="relative flex h-fit flex-col sm:flex-row">
	<div class="flex sm:hidden">
		<img src="/webp/orderOnlineMobile.webp" class="w-screen object-cover" alt="" />
	</div>
	<div class="bg-tertiary text-darkText font-instrument flex flex-col justify-center sm:w-1/2">
		<div class=" mx-8 mt-16 mb-16 flex flex-col sm:mx-16 md:mx-24 xl:mx-54">
			<h1 class="text-darkText mb-4 text-6xl">{title}</h1>
			<h1 class="text-lightText mb-12 text-4xl">{thaiTitle}</h1>

			<p class="font-DMSans">
				Order through our phone number <a href="tel:+1 6045007542" class="underline"
					>+1 (604) 439-1919</a
				> for exceptional and fast delivery service. We offer free in-house delivery for any order above
				$25 within a 5 km radius.
			</p>
			<p class="font-DMSans mt-8">
				We also deliver through <span class=" font-[1000]">Doordash</span> and
				<span class="font-[1000]">Uber Eats</span>, which can be accessed with the affiliate links
				below.
			</p>

			<div class="mt-8 mb-12 sm:mb-0">
				<a
					href="https://www.doordash.com/store/green-basil-thai-restaurant-burnaby-58614/?srsltid=AfmBOoou1HkBW-Q12dcFiteG44mF3P0Gls_6HFlLqFnofOfltMakDq-v"
					class="border-darkText mb-4 flex place-content-center rounded-xl border-2 bg-transparent p-4 hover:border-[#C90202] hover:bg-[#C90202]"
					target="_blank"
					onmouseenter={toggleDD}
					onmouseleave={toggleDD}
				>
					{#if ddHover}
						<img src="../doordashLogo.svg" class="" alt="Doordash Logo" />
					{:else}
						<img src="../greenDoordashLogo.svg" class="" alt="Doordash Logo" />
					{/if}
				</a>

				<a
					href="https://www.ubereats.com/ca/store/green-basil-thai-restaurant/6GoYWudYTTOVt7vlqeq6lA?srsltid=AfmBOooHHudVtUcDEbOKDV21TsulpJrJloqXuDdf2yK1pqjne35NN0ZH"
					class=" border-darkText flex place-content-center rounded-xl border-2 bg-transparent p-4 text-white hover:border-black hover:bg-black"
					target="_blank"
					onmouseenter={toggleUE}
					onmouseleave={toggleUE}
				>
					{#if ueHover}
						<img src="../uberEatsLogo.svg" class="" alt="Uber Eats Logo" />
					{:else}
						<img src="../greenUberEatsLogo.svg" class="" alt="Uber Eats Logo" />
					{/if}
				</a>
			</div>
		</div>
	</div>

	<div class="hidden w-1/2 flex-auto sm:flex">
		<img src="/webp/orderOnline1.webp" class="h-full w-full object-cover" alt="" />
	</div>
</section>
