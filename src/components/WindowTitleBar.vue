<script setup lang="ts">
import { ref } from 'vue';
import { glyphSets } from '../glyphSets/glyphSets';

const props = withDefaults(defineProps<{
	title: string,
	font: string,
	disableGlyphsetSelector?: boolean,
}>(), { disableGlyphsetSelector: false });
const emit = defineEmits<{
	updateGlpyhset: [id: number],
}>();

const selectedScriptId = ref(0);
</script>

<template>
<div class="titleBar">
	<div class="windowTitleLeft">
		<div v-if="!props.disableGlyphsetSelector" class="select">
			<select v-model="selectedScriptId" @change="emit('updateGlpyhset', selectedScriptId)">
				<option v-for="[key, value] of glyphSets" :key="key" :value="key">{{ value.name }}</option>
			</select>
			&#9660;
		</div>
		<span v-else>{{ props.title }}</span>
		<span class="translatedTitle">{{ props.title }}</span>
	</div>
	<div class="windowTitleRight">&#xE067; &#xE063; &#xE066;</div>
</div>
</template>

<style scoped>

*,
*::before,
*::after {
	box-sizing: border-box;
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
	text-align: right;
}

.translatedTitle {
	margin-left: 15px;
	color: rgb(109, 109, 109);
	font-family: v-bind('props.font'), Splatfont2;;
}
</style>