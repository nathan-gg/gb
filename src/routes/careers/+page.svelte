<script lang="ts">
	import Careers from '$lib/components/careers.svelte';

	const careers = {
		thisRef: 'Careers',
		goTo: 'Server',
		title: 'Careers',
		thaiTitle: 'อาชีพ',
		body: 'Green Basil Thai Restaurant (GBTR) promotes a fun, respectful and encouraging work environment. We acknowledge the importance of quality staff because this will become our primary success factor. Thus, we welcome energetic, responsible and positive team players to join us. Join the team and send your resume to <a href="mailto:textinfo@greenbasilthai.com" target="_blank" class="focus: font-bold focus:underline hover:underline">textinfogreenbasilthai.com</a>.',
		arrowText: 'Servers',
		image: '/webp/identityHead.webp'
	};
</script>

<Careers
	thisRef={careers.thisRef}
	goTo={careers.goTo}
	title={careers.title}
	thaiTitle={careers.thaiTitle}
	body={careers.body}
	arrowText={careers.arrowText}
	image={careers.image}
/>


