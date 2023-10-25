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
		<select v-if="!props.disableGlyphsetSelector" v-model="selectedScriptId" @change="emit('updateGlpyhset', selectedScriptId)">
			<option v-for="[key, value] of glyphSets" :key="key" :value="key">{{ value.name }}</option>
		</select>
		<span v-else>{{ props.title }}</span> <span class="translatedTitle">{{ props.title }}</span>
	</div>
	<div class="windowTitleRight">&#xE067; &#xE063; &#xE066;</div>
</div>
</template>

<style scoped>

select {
	font-family: Splatfont2;
	border: none;
	outline: none;
}
option {
	font-family: Splatfont2;
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
	color: rgb(109, 109, 109);
	font-family: v-bind('props.font');
}
</style>