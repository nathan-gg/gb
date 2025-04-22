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

<section class="relative flex h-screen">
	<div class="flex w-6/12 flex-auto flex-col bg-tertiary font-serif text-darkText">
		<div class="mt-16 mx-48 flex flex-col">
			<h1 class="text-darkText mt-24 text-6xl">{title}</h1>
			<h1 class="text-lightText mb-12 text-4xl">{thaiTitle}</h1>

            <p>Order through our phone number <a
                href="tel:+1 6045007542"
                class="underline">+1 (604) 439-1919</a
            > for exceptional and fast delivery service. We offer free in-house delivery for any order above $25 within a 5 km radius. 

            </p>
            <p class="mt-8">
                We also deliver through <span class="font-[1000]">Doordash</span> and <span class="font-[1000]">Uber Eats</span>, which can be accessed with the affiliate links below.
            </p>

            <div class="mt-8 ">
            <a href="https://www.doordash.com/store/green-basil-thai-restaurant-burnaby-58614/?srsltid=AfmBOoou1HkBW-Q12dcFiteG44mF3P0Gls_6HFlLqFnofOfltMakDq-v" class="p-4 border-2 border-darkText hover:border-[#C90202] mb-4 bg-transparent hover:bg-[#C90202] rounded-xl flex place-content-center " target="_blank" onmouseenter={toggleDD} onmouseleave={toggleDD}>

                {#if ddHover}
                <img src="../doordashLogo.svg" class="" alt="Doordash Logo" />
                {:else}
                <img src="../greenDoordashLogo.svg" class="" alt="Doordash Logo" />
                {/if}
            </a>

            <a href="https://www.ubereats.com/ca/store/green-basil-thai-restaurant/6GoYWudYTTOVt7vlqeq6lA?srsltid=AfmBOooHHudVtUcDEbOKDV21TsulpJrJloqXuDdf2yK1pqjne35NN0ZH" class=" text-white bg-transparent border-darkText border-2 hover:border-black hover:bg-black p-4 rounded-xl flex place-content-center" target="_blank" onmouseenter={toggleUE} onmouseleave={toggleUE}>

                {#if ueHover}
                    <img src="../uberEatsLogo.svg" class="" alt="Uber Eats Logo" />
                {:else}
                    <img src="../greenUberEatsLogo.svg" class="" alt="Uber Eats Logo" />
                {/if}
            </a>
        </div>

      

			<!-- <div class="font-DMSans text-darkText">
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
			</div> -->
		</div>
	</div>

	<div class="w-6/12 flex-auto">
		<img src={image} class="h-full object-cover" alt="" />
	</div>
</section>
