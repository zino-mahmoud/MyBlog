<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	import IconedButton from '$lib/components/button/iconedButton.svelte';
	import { IconData } from '$lib/models/iconPath';
	import { logEvent } from 'histoire/client';

	export let Hst: Hst;

	let iconData = IconData.MENU;
	let iconOptions: { label: string; value: string }[] = [];
	Object.keys(IconData).forEach((key, index) => {
		iconOptions.push({
			label: key,
			value: Object.values(IconData)[index].path,
		});
	});

	let rounded = false;
</script>

<Hst.Story title="button/IconedButton">
	<svelte:fragment slot="controls">
		<Hst.Select bind:value={iconData.path} title="IconData" options={iconOptions} />
		<Hst.Checkbox bind:value={rounded} title="Rounded" />
	</svelte:fragment>
	<IconedButton
		iconData={iconData}
		rounded={rounded}
		on:click={(event) => logEvent('click', event)}
	/>
</Hst.Story>
