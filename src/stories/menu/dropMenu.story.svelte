<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	import DropMenu from '$lib/components/menu/dropMenu.svelte';

	export let Hst: Hst;

	let open = true;
	let hasDividers = true;
</script>

<Hst.Story title="menu/DropMenu">
	<svelte:fragment slot="controls">
		<Hst.Checkbox bind:value={open} title="Open" />
		<Hst.Checkbox bind:value={hasDividers} title="Has Dividers" />
	</svelte:fragment>
	<DropMenu open={open} hasDividers={hasDividers}>
		<li>test</li>
		<li>test</li>
		<li>test</li>
		<li>test</li>
		<li>test</li>
	</DropMenu>
</Hst.Story>
