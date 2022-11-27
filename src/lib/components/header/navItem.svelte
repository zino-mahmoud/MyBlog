<script context="module" lang="ts">
	let selectedNavItem:HTMLAnchorElement|undefined;
</script>

<script lang="ts">
	import type { IconData } from '$lib/models/iconPath';
	import Icon from '$lib/components/util/icon.svelte';
	import { Align } from '$lib/../enums/Align';

	export let iconData: IconData;
	export let text: string;
	export let navLink: string;
	export let align = Align.CENTER;
	
	let anchor:HTMLAnchorElement|undefined;
	let selected = false;
	let alignmentClass: string;
	$: {
		alignmentClass = `justify-${align}`;
		console.log(selected);
	}

	function clearSelection() {
		console.log("clearSelection")
		if(selectedNavItem && selectedNavItem !== anchor) selected = false;
		else selected = true;
		selectedNavItem = anchor;
	}
</script>

<li class="p-1 m-1 relative bg-secondary">
	<a bind:this={anchor}
		href={navLink}
		on:click={clearSelection}
		class="font-mono font-semibold text-lg
        flex flex-row items-center space-x-1 {alignmentClass}
        text-white fill-white
        cursor-pointer
        focus:outline-none focus:before:opacity-100 focus:before:w-full focus:after:opacity-100 focus:after:w-full
        before:absolute before:opacity-0 before:w-0 before:h-0.5 before:contents-[''] before:bg-white before:transition-all before:duration-300
        before:left-0 before:top-0 before:hover:opacity-100 before:hover:w-full
        after:absolute after:opacity-0 after:w-0 after:h-0.5 after:contents-[''] after:bg-white after:transition-all after:duration-300
        after:right-0 after:bottom-0 after:hover:opacity-100 after:hover:w-full
        {selected && 'before:opacity-100 before:w-full after:opacity-100 after:w-full'}"
	>
		<Icon size={32} iconData={iconData} />
		<span>
			{text}
		</span>
	</a>
</li>

<svelte:options accessors />
