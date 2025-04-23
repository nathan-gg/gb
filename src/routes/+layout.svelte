<script>
	import '../app.css';
	import Header from '../components/head.svelte';
	import Footer from '../components/footer.svelte';
	let { children } = $props();
	import { page } from '$app/stores';
</script>

<svelte:head>
	<link rel="icon" href="iconLogo.svg" type="image/x-icon">
	<title>Green Basil Thai</title>
	<!-- <meta name="" content={''} /> This is for SEO -->
</svelte:head>

<!-- <div class="cursor-custom">
<div class="sticky top-0 z-50">
	<Header />	
</div>

{@render children()}
<div class="bottom-0 z-50">
	<Footer />	
</div>

</div> -->

<div class="cursor-custom">
	{#if $page.url.pathname !== '/'}
	  <div class="sticky top-0 z-50">
		<Header />
	  </div>
	{/if}
  
	<!-- This is where your page content goes -->
	{@render children()}
  
	{#if $page.url.pathname !== '/'}
	  <div class="bottom-0 z-50">
		<Footer />
	  </div>
	{/if}
  </div>
