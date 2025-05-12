<script>

	import Reservations from '/src/components/reservations.svelte';

	const reservations = {
		title: 'Confirm Your Reservation',
		thaiTitle: 'ยืนยันการจอง',
		image: '/webp/reservations.webp'
	};
</script>


<Reservations

	title={reservations.title}
	thaiTitle={reservations.thaiTitle}
	image={reservations.image}

/>
