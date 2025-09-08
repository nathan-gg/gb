<script>

	import Reservations from '$lib/components/reservations.svelte';

	const reservations = {
		title: 'Reservations',
		thaiTitle: 'ยืนยันการจอง',
		image: '/webp/reservations.webp'
	};
</script>


<Reservations

	title={reservations.title}
	thaiTitle={reservations.thaiTitle}
	image={reservations.image}

/>
