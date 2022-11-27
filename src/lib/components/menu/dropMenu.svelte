<script lang="ts">
	import { fade } from 'svelte/transition';

	export let open: boolean;
	export let hasDividers = false;
</script>

{#if open}
	<ul
		class="z-10 w-full 
    bg-secondary rounded 
    {hasDividers && 'divide-y border-solid'}"
		in:fade={{ duration: 250 }}
		out:fade={{ duration: 250 }}
	>
		<slot />
	</ul>
{/if}
