<script>
	import '../app.css';
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="iconLogo.svg" type="image/x-icon">
	<title>Green Basil Thai</title>
	<!-- <meta name="" content={''} /> This is for SEO -->
</svelte:head>

<div class="sticky top-0 z-10">
	<Header />	
</div>

{@render children()}

<div class="bottom-0 z-10">
	<Footer />	
</div>
