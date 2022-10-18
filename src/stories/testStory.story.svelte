<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	import TestComponents from '$lib/testComponents.svelte';

	export let Hst: Hst;
</script>

<Hst.Story>
	<TestComponents/>
</Hst.Story>
