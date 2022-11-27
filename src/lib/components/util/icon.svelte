<script lang="ts">
	import type { IconData } from '$lib/models/iconPath';

	export let size: number;
	export let iconData: IconData;
</script>

<svg xmlns="http://www.w3.org/2000/svg" height="{size}px" width="{size}px" viewBox="0 0 48 48"
	><path d={iconData.path} /></svg
>
<span class="sr-only">{iconData.description}</span>
