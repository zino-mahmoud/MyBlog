<script lang="ts">
	import { Color } from "$lib/../enums/color";
	import type { IconPath } from "src/enums/iconPath";

    export let size:number
    export let iconPath:IconPath
    export let color:Color = Color.ACCENT

    let fillColorClass:string

    $: {
        fillColorClass = `fill-${color}`
    }
</script>

<svg class="{fillColorClass}" xmlns="http://www.w3.org/2000/svg" height="{size}px" width="{size}px" viewBox="0 0 48 48"><path d={iconPath}/></svg>