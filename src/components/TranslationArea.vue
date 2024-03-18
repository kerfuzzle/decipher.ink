<script setup lang="ts">
import { computed, provide, ref } from 'vue';
import OnScreenKeyboard from './OnScreenKeyboard.vue';
import TextArea from './TextArea.vue';
import WindowTitleBar from './WindowTitleBar.vue';
import type { Glyph, GlyphSet } from '@/typings/glyphs';
import { glyphSets } from '@/glyphSets/glyphSets';
import { SquareScript } from '@/glyphSets/squareScript';
import { memoize } from '@/utils/memoize';
enum ArrowDirections {
	Left, Right
}

const currentText = ref('');
const caretPosition = ref(0);
const selectedGlyphset = ref(SquareScript);
provide('selectedGlyphset', selectedGlyphset);
const englishTextArea = ref<InstanceType<typeof TextArea> | null>(null);
const currentPermutations = computed(() => {
	return currentText.value.split(' ').map(word => {
		return recursePermutations(word, selectedGlyphset.value);
	});
});

const totalPermutations = computed(() => {
	let total = 0;
	currentPermutations.value.forEach(permutations => total += permutations.length);
	return total;
});


const recursePermutations = memoize((text: string, glyphSet: GlyphSet): string[] => {
	const newPermutations: string[] = [];
	const glyph = glyphSet.glyphs.find(g => g.mappedCharacters.includes(text.substring(0, 1)));
	const permutations: string[] = glyph?.mappedCharacters.map(newChar => replaceAt(text, 0, newChar)) || [];
	if (text.length === 1) return permutations;
	permutations.forEach(permutation => {
		recursePermutations(permutation.substring(1), glyphSet).forEach(newPermutation => {
			newPermutations.push(permutation.substring(0, 1) + newPermutation);
		});
	});
	return newPermutations;
});

function replaceAt(string: string, index: number, replacement: string) {
	return string.substring(0, index) + replacement + string.substring(index + replacement.length);
}

function registerInput(glyph: Glyph) {
	currentText.value = currentText.value.slice(0, caretPosition.value) + glyph.mappedCharacters[0] + currentText.value.slice(caretPosition.value);;
	moveCaret(1);
}

function moveCaret(positionChange: number) {
	caretPosition.value += positionChange;
	if (caretPosition.value < 0) caretPosition.value = 0;
	else if (caretPosition.value > currentText.value.length) caretPosition.value = currentText.value.length;
}

function registerSpace() {
	currentText.value = currentText.value.slice(0, caretPosition.value) + ' ' + currentText.value.slice(caretPosition.value);
	moveCaret(1);
}

function registerBackspace() {
	if (caretPosition.value === 0) return;
	currentText.value = currentText.value.slice(0, caretPosition.value - 1) + currentText.value.slice(caretPosition.value);
	moveCaret(-1);
}

function registerDelete() {
	if (caretPosition.value === currentText.value.length) return;
	currentText.value = currentText.value.slice(0, caretPosition.value) + currentText.value.slice(caretPosition.value + 1);
}

function registerArrow(direction: ArrowDirections) {
	if (direction === ArrowDirections.Left) moveCaret(-1);
	else if (direction === ArrowDirections.Right) moveCaret(1);
}

function updateGlyphset(id: number) {
	selectedGlyphset.value = glyphSets.get(id) || SquareScript;
	currentText.value = '';
	caretPosition.value = 0;
}

function copy() {
	const selectedText = englishTextArea.value?.getCurrentText();
	if (selectedText) navigator.clipboard.writeText(selectedText);
}

</script>

<template>
	<div class="translation-area">
		<div class="window">
			<WindowTitleBar title="English" font="Splatfont2" :disable-glyphset-selector='true' @copy="copy">
				{{ totalPermutations }}
			</WindowTitleBar>
			<TextArea :words="currentPermutations" title="English" font="Splatfont2" :has-permutations="true" ref="englishTextArea"/>
		</div>
		<div class="window">
			<WindowTitleBar :title="selectedGlyphset.name" :font="selectedGlyphset.font" @update-glyphset="updateGlyphset" :disable-copy-button="true"/>
			<TextArea :words="currentPermutations" :caret-position="caretPosition" :font="selectedGlyphset.font"/>
		</div>
		<OnScreenKeyboard :glyphSet="selectedGlyphset" @input="registerInput" @space="registerSpace" @backspace="registerBackspace" @delete="registerDelete" @arrow="registerArrow"/>
	</div>
</template>

<style scoped>
.translation-area {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin: 0.75rem 0;
}

.window {
	margin: 1rem 0;
}
</style>