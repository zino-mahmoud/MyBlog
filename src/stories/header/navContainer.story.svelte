<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	import NavContainer from '$lib/components/header/navContainer.svelte';
	import NavItem from '$lib/components/header/navItem.svelte';
	import { IconData } from '$lib/models/iconPath';

	export let Hst: Hst;
</script>

<Hst.Story title="header/NavContainer">
	<NavContainer>
		<NavItem iconData={IconData.HOUSE} text="Home" navLink="#" />
		<NavItem iconData={IconData.PERSON} text="About" navLink="#" />
		<NavItem iconData={IconData.EMAIL} text="Contact" navLink="#"/>
	</NavContainer>
</Hst.Story>
