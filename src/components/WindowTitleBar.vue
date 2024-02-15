<script setup lang="ts">
import { ref } from 'vue';
import { glyphSets } from '../glyphSets/glyphSets';

const props = withDefaults(defineProps<{
	title: string,
	font: string,
	disableGlyphsetSelector?: boolean,
	disableCopyButton?: boolean,
}>(), { disableGlyphsetSelector: false, disableCopyButton: false });
const emit = defineEmits<{
	updateGlyphset: [id: number],
	copy: [],
}>();

const selectedScriptId = ref(0);
const popoverVisible = ref(false);

function showCopyPopover() {
	popoverVisible.value = true;
	setTimeout(() => {
		popoverVisible.value = false;
	}, 2000);
}
</script>

<template>
<div class="titleBar">
	<div class="windowTitleLeft">
		<div v-if="!props.disableGlyphsetSelector" class="select">
			<select v-model="selectedScriptId" @change="emit('updateGlyphset', selectedScriptId)">
				<option v-for="[key, value] of glyphSets" :key="key" :value="key">{{ value.name }}</option>
			</select>
			&#9660;
		</div>
		<span v-else>{{ props.title }}</span>
		<span class="translatedTitle">{{ props.title }}</span>
	</div>
	<div class="windowTitleRight">
		<button v-if="!props.disableCopyButton" @click="emit('copy'); showCopyPopover()">
			<div :class="['popover', { 'active': popoverVisible}]">Copied Successfully</div>
			Copy Text
		</button>
		<div>&#xE067;</div>
		<div>&#xE063;</div>
		<div>&#xE066;</div>
	</div>
</div>
</template>

<style scoped>

*,
*::before,
*::after {
	box-sizing: border-box;
}

button {
	border: none;
	background: none;
	border-radius: 3px;
	cursor: pointer;
	font-family: inherit;
	line-height: 0.75rem;
}

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
}

select {
	font-family: Splatfont2;
	background-color: transparent;
	border: none;
	padding: 0 0 0 0;
	margin: 0;
	appearance: none;
	height: min-content;
	width: min-content;
	cursor: inherit;
	line-height: inherit;
	font-size: inherit;
	outline: none;
}

.select {
	display: inline;
}

option {
	font-family: Splatfont2, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.windowTitleLeft, .windowTitleRight {
	color: rgb(37, 37, 37);
	font-size: 20px;
	margin: -1.3em 10px;
	overflow: hidden;
	text-align: left;
	line-height: 1.2em;
}

.windowTitleRight {
	display: flex;
	justify-content: flex-end;
	column-gap: 10px;
}

.translatedTitle {
	margin-left: 15px;
	color: rgb(109, 109, 109);
	font-family: v-bind('props.font'), Splatfont2;;
}
</style>