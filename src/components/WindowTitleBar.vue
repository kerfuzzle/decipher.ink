<script setup lang="ts">
import { ref } from 'vue';
import { glyphSets } from '../glyphSets/glyphSets';
import PopoverAlert from './PopoverAlert.vue';

const props = withDefaults(defineProps<{
	title: string,
	font: string,
	warningMessage?: string,
	disableGlyphsetSelector?: boolean,
	disableCopyButton?: boolean,
}>(), { disableGlyphsetSelector: false, disableCopyButton: false });
const emit = defineEmits<{
	updateGlyphset: [id: number],
	copy: [],
}>();

const selectedScriptId = ref(0);
const copyPopover = ref<InstanceType<typeof PopoverAlert> | null>(null);
</script>

<template>
<div class="titleBar">
	<div class="windowTitleLeft">
		<div v-if="!props.disableGlyphsetSelector" class="select">
			<select v-model="selectedScriptId" @change="emit('updateGlyphset', selectedScriptId)" aria-label="selected script">
				<option v-for="[key, value] of glyphSets" :key="key" :value="key">{{ value.name }}</option>
			</select>
			&#9660;
		</div>
		<span v-else>{{ props.title }}</span>
		<span class="translatedTitle">{{ props.title }}</span>
	</div>
	<div class="windowTitleRight">
		<slot></slot>
		<button v-if="!props.disableCopyButton" @click="emit('copy'); copyPopover?.showPopover()">
			<PopoverAlert ref="copyPopover">Copied Successfully</PopoverAlert>
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

.titleBar {
	z-index: 1;
	display: flex;
	justify-content: space-between;
	background-color: rgb(151, 151, 151);
	padding: 3px 10px;
	border-radius: 5px 5px 0px 0px;
}

button {
	border: none;
	background: none;
	border-radius: 3px;
	cursor: pointer;
	font-family: inherit;
	line-height: 0.75rem;
	color: black;
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
	color: black;
}

.select {
	display: inline;
}

option {
	font-family: Splatfont2, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.windowTitleLeft, .windowTitleRight {
	color: rgb(37, 37, 37);
	font-size: 1rem;
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

@media only screen and (max-width: 600px) {
	.windowTitleRight > div {
		display: none;
	}
}
</style>