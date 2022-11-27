<script lang="ts">
	import NavItem from '$lib/components/header/navItem.svelte';
	import { IconData } from '$lib/models/iconPath';
	import IconedButton from '$lib/components/button/iconedButton.svelte';
	import DropMenu from '$lib/components/menu/dropMenu.svelte';

	let mobileMenuOpen = false;

	function triggerMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<!--<div class="w-full flex flex-row justify-end">-->
<div class="w-full flex flex-col sm:flex-row">
	<div class="w-fit ml-auto sm:hidden flex">
		<IconedButton
			iconData={mobileMenuOpen ? IconData.X : IconData.MENU}
			on:click={triggerMobileMenu}
		/>
	</div>
	<div class="sm:hidden flex">
		<DropMenu open={mobileMenuOpen}>
			<slot/>
		</DropMenu>
	</div>
	<ul class="hidden sm:flex flex-row">
		<slot/>
	</ul>
</div>
