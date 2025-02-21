<script lang="ts">
	import '../app.css';
	import Nav from '../components/nav.svelte';
	let { children } = $props();
</script>

<div>
	<Nav />	
</div>


{@render children()}
