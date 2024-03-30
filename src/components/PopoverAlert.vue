<script setup lang="ts">
import { ref } from 'vue';

const popoverVisible = ref(false);

function showPopover() {
	popoverVisible.value = true;
	setTimeout(() => {
		popoverVisible.value = false;
	}, 2000);
}

defineExpose({
	showPopover,
});
</script>

<template>
	<div :class="['popover', { 'active': popoverVisible }]"><slot/></div>
</template>

<style scoped>
.popover {
	background-color: transparent;
	color: black;
	border-radius: 5px;
	padding: 5px;
	position: absolute;
	transform: translate3d(0, 0, 0);
	opacity: 0;
	transition: 0.25s all ease-in-out;
	pointer-events: none;
	z-index: 5;
}

.popover.active {
	background-color: white;
	transform: translate3d(0, -2lh, 0);
	box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.4);
	opacity: 1;
}
</style>