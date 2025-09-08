<script>

	import Reservations from '$lib/components/order.svelte';

	const reservations = {
		title: 'Order Online',
		thaiTitle: 'สั่งซื้อออนไลน์',
		image: '/webp/orderOnline1.webp'
	};
</script>


<Reservations

	title={reservations.title}
	thaiTitle={reservations.thaiTitle}
	image={reservations.image}

/>