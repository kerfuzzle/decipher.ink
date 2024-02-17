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
	<div :class="['popover', { 'active': popoverVisible}]"><slot/></div>
</template>

<style scoped>
.popover {
	background-color: white;
	color: black;
	border-radius: 5px;
	padding: 5px;
	position: absolute;
	transform: translate3d(0, 0, 0);
	opacity: 0;
	transition: 0.25s all ease-in-out;
	height: 0px;
}

.popover.active {
	height: auto;
	transform: translate3d(0, -3lh, 0);
	opacity: 1;
}</style>