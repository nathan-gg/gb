<script>
	import { Label, Input } from 'flowbite-svelte';
	import { Button } from 'flowbite-svelte';
	import { Textarea } from 'flowbite-svelte';
	let textareaprops = {
		id: 'message',
		name: 'message',
		label: 'Your message',
		rows: 4,
		placeholder: 'Message:'
	};
</script>

<section class="inline-flex h-screen font-serif">
	<div class="text-[#000000 flex w-6/12 flex-auto flex-col bg-[#E8E3DA] font-serif">
		<div class="m-24">
			<h1 class="mt-24 mb-4 text-4xl text-[#E0B87A]">Contact Us</h1>

			<p class="mb-12 text-xl">
				Have questions or need assistance?<br />Contact us, we're happy to help!
			</p>

			<div class="grid grid-cols-2 grid-rows-2">
				<div class="mr-2 mb-6">
					<Input id="default-input" placeholder="First Name" />
				</div>
				<div class="mb-6 ml-2">
					<Input id="default-input" placeholder="Last Name" />
				</div>
				<div class="mr-2 mb-6">
					<Input id="default-input" placeholder="Email Address" />
				</div>
				<div class="mb-6 ml-2">
					<Input id="default-input" placeholder="Phone Number" />
				</div>
			</div>

			<div class="mb-2">
				<Textarea {...textareaprops} />
			</div>

			<Button size="lg" class="bg-white px-12 py-2 text-black focus:border-[#E0B87A]" href=""
				>Submit</Button
			>
		</div>
	</div>

	<div class="w-6/12 flex-auto">
		<img src="/webp/contactDoor.webp" class="h-full object-cover" alt="" />
	</div>
</section>
