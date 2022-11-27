<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	import Icon from '$lib/components/util/icon.svelte';
	import { IconData } from '$lib/models/iconPath';

	export let Hst: Hst;

	let size = 32;

	let iconData = IconData.HOUSE;
	let iconOptions: { label: string; value: string }[] = [];
	Object.keys(IconData).forEach((key, index) => {
		iconOptions.push({
			label: key,
			value: Object.values(IconData)[index].path,
		});
	});
</script>

<Hst.Story title="util/Icon">
	<svelte:fragment slot="controls">
		<Hst.Number bind:value={size} title="Size" />
		<Hst.Select bind:value={iconData.path} title="IconPath" options={iconOptions} />
	</svelte:fragment>

	<Icon size={size} iconData={iconData} />
</Hst.Story>
