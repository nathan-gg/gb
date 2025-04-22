<script>

	import Reservations from '/src/components/order.svelte';

	const reservations = {
		title: 'Order Online',
		thaiTitle: 'สั่งซื้อออนไลน์',
		image: '/webp/orderOnline.webp'
	};
</script>


<Reservations

	title={reservations.title}
	thaiTitle={reservations.thaiTitle}
	image={reservations.image}

/>