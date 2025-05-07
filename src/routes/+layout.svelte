<script>
	import '../app.css';
	import Header from '../components/head.svelte';
	import Footer from '../components/footer.svelte';
	let { children } = $props();
	import { page } from '$app/stores';
	import ViewTransition from '../components/navigation.svelte';

	import { Spring } from 'svelte/motion';

	let coords = new Spring({ x: 50, y: 50 }, {
	stiffness: 0.1,
	damping: 0.25
});
	let size = new Spring(10);
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


<svg
	onmousemove={(e) => {
		coords.target = { x: e.clientX, y: e.clientY };
	}}
	onmousedown={() => (size.target = 30)}
	onmouseup={() => (size.target = 10)}
	role="presentation"
>
	<circle
	cx={coords.current.x}
	cy={coords.current.y}
	r={size.current}
	
></circle>



</svg>

<div class="controls">
	<label>
		<h3>stiffness ({coords.stiffness})</h3>
		<input
			bind:value={coords.stiffness}
			type="range"
			min="0.01"
			max="1"
			step="0.01"
		/>
	</label>

	<label>
		<h3>damping ({coords.damping})</h3>
		<input
			bind:value={coords.damping}
			type="range"
			min="0.01"
			max="1"
			step="0.01"
		/>
	</label>
</div>

<style>
	svg {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
	}

	circle {
		fill: #ff3e00;
	}

	.controls {
		position: absolute;
		top: 5em;
		right: 1em;
		width: 200px;
		user-select: none;
	}

	.controls input {
		width: 100%;
	}
</style>

