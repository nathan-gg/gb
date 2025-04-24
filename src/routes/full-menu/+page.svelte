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

	import Contact from '/src/components/full-menu.svelte';

	const message = {
		thisRef: 'Message',
		goTo: 'Info',
		title: 'Contact Us',
		thaiTitle: 'ติดต่อเรา',
		body: 'Fill out this contact form below to get in touch with us, or contact us through our email <a href="mailto:info@greenbasilthai.com" class="underline">info@greenbasilthai.com</a> or call our phone number at <a href="tel:+1 6045007542" class="underline" >+1 (604) 439-1919</a>.',
		arrowText: 'Info',
		image: '/webp/identityHead.webp'
	};

	const info = {
		thisRef: 'Info',
		goBack: 'Message',
		title: 'Hours & Location',
		thaiTitle: 'เวลาเปิดทำการเเละที่อยู่',
		body: '',
		prevArrowText: 'Contact Us',
		image: '/webp/identityMission.webp'
	};
</script>


<Contact
	thisRef={message.thisRef}
	goTo={message.goTo}
	title={message.title}
	thaiTitle={message.thaiTitle}
	body={message.body}


	arrowText={message.arrowText}
	image={message.image}
	ifPage1={true}
	ifPage2={false}
/>



