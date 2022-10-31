<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	import Icon from '$lib/util/icon.svelte';
	import { IconPath } from '$lib/../enums/iconPath';
	import { Color } from '$lib/../enums/color';

	export let Hst: Hst;
	let size = 48

	let iconPath = IconPath.HOUSE
	let iconOptions: { label: string; value: string; }[] = []
	Object.keys(IconPath).forEach((key, index) => {
		iconOptions.push({
			label: key,
			value: Object.values(IconPath)[index]
		})
	})

	let color = Color.PRIMARY
	let colorOptions: { label: string; value: string; }[] = []
	Object.keys(Color).forEach((key, index) => {
		colorOptions.push({
			label: key,
			value: Object.values(Color)[index]
		})
	})
</script>

<Hst.Story title="util/Icon">
	<svelte:fragment slot="controls">
		<Hst.Number bind:value={size} title="Size" />
		<Hst.Select bind:value={iconPath} title="IconPath" options={iconOptions}/>
		<Hst.Select bind:value={color} title="IconPath" options={colorOptions}/>
	</svelte:fragment>

	<Icon size={size} iconPath={iconPath} color={color}/>
</Hst.Story>
