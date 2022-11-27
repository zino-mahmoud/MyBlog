<script lang="ts">
	import Icon from '$lib/components/util/icon.svelte';
	import type { IconData } from '$lib/models/iconPath';
	import { createEventDispatcher } from 'svelte';

	export let iconData: IconData;
	export let rounded = false;
	export let iconSize = 32;

	$: {
		sizeClass = `w-[${iconSize}]`;
	}

	const dispatch = createEventDispatcher();

	let sizeClass: string;

	function onClick() {
		dispatch('click');
	}
</script>

<button
	on:click={onClick}
	class="{sizeClass} h-min m-1 {rounded ? 'rounded-full' : 'rounded-lg'} 
              inline-flex items-center
              fill-accent border border-accent 
              hover:bg-accent hover:fill-white 
              focus:ring-1 focus:outline-none focus:ring-white"
>
	<Icon size={iconSize} iconData={iconData} />
</button>
