<script setup lang="ts">
import { ref } from 'vue';
import { glyphSets } from '../glyphSets/glyphSets';
import PopoverAlert from './PopoverAlert.vue';

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
const copyPopover = ref<InstanceType<typeof PopoverAlert> | null>(null);
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
	position: relative;
	z-index: 1;
}

button {
	border: none;
	background: none;
	border-radius: 3px;
	cursor: pointer;
	font-family: inherit;
	line-height: 0.75rem;
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
	font-size: 1rem;
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