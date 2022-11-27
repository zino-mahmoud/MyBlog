<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	import NavItem from '$lib/components/header/navItem.svelte';
	import { IconData } from '$lib/models/iconPath';
	import { Align } from '$lib/../enums/Align';

	export let Hst: Hst;

	let iconData = IconData.HOUSE;
	let iconOptions: { label: string; value: string }[] = [];
	Object.keys(IconData).forEach((key, index) => {
		iconOptions.push({
			label: key,
			value: Object.values(IconData)[index].path,
		});
	});

	let align = Align.CENTER;
	let alignmentOptions: { label: string; value: string }[] = [];
	Object.keys(Align).forEach((key, index) => {
		alignmentOptions.push({
			label: key,
			value: Object.values(Align)[index],
		});
	});

	let text = 'Home';
	let link = 'home';
	let selected = false;
</script>

<Hst.Story title="header/NavItem">
	<svelte:fragment slot="controls">
		<Hst.Select bind:value={iconData.path} title="IconPath" options={iconOptions} />
		<Hst.Select bind:value={align} title="Align" options={alignmentOptions} />
		<Hst.Text bind:value={text} title="Text" />
		<Hst.Text bind:value={link} title="Link" />
		<Hst.Checkbox bind:value={selected} title="Selected" />
	</svelte:fragment>

	<NavItem iconData={iconData} text={text} selected={selected} navLink={link} align={align} />
</Hst.Story>
