<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	import NavItem from '$lib/header/navItem.svelte';

	export let Hst: Hst;
</script>

<Hst.Story title="header/NavItem">
	<NavItem />
</Hst.Story>
