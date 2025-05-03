<script>
	import '../app.css';
	import Header from '../components/head.svelte';
	import Footer from '../components/footer.svelte';
	let { children } = $props();
	import { page } from '$app/stores';
	import ViewTransition from '../components/navigation.svelte';
</script>

<svelte:head>
	<link rel="icon" href="iconLogo.svg" type="image/x-icon" />
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

	<title>Green Basil Thai</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<!-- <meta name="" content={''} /> This is for SEO -->
</svelte:head>

<div class="cursor-custom overflow-x-clip">
	<ViewTransition />

	{#if $page.url.pathname !== '/'}
		<div class="sticky top-0 z-50">
			<Header />
		</div>
	{/if}

	{@render children()}
	<!-- {#if $page.url.pathname !== '/' && $page.url.pathname !== '/full-menu' && $page.url.pathname !== '/home'} -->
	{#if $page.url.pathname !== '/' && $page.url.pathname !== '/full-menu' && $page.url.pathname !== '/home' && $page.url.pathname !== '/identity' && $page.url.pathname !== '/contact' }
		<div class="bottom-0 z-50">
			<Footer />
		</div>
	{/if}
</div>
