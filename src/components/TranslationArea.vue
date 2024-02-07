<script setup lang="ts">
import { computed, ref } from 'vue';
import OnScreenKeyboard from './OnScreenKeyboard.vue';
import TextArea from './TextArea.vue';
import WindowTitleBar from './WindowTitleBar.vue';
import type { Glyph, GlyphSet } from '../typings/glyphs';
import { glyphSets } from '@/glyphSets/glyphSets';
import { SquareScript } from '@/glyphSets/squareScript';
import { memoize } from '../utils/memoize';
enum ArrowDirections {
	Left, Right
}

const currentText = ref('');
const caretPosition = ref(0);
const selectedGlpyhset = ref(SquareScript);
const currentPermutations = computed(() => {
	return currentText.value.split(' ').map(word => {
		return recursePermutations(word, selectedGlpyhset.value);
	});
});


const recursePermutations = memoize((text: string, glpyhSet: GlyphSet): string[] => {
	const newPermutations: string[] = [];
	const glpyh = glpyhSet.glyphs.find(g => g.mappedCharacters.includes(text.substring(0, 1)));
	const permutations: string[] = glpyh?.mappedCharacters.map(newChar => replaceAt(text, 0, newChar)) || [];
	if (text.length === 1) return permutations;
	permutations.forEach(permutation => {
		recursePermutations(permutation.substring(1), glpyhSet).forEach(newPermutation => {
			newPermutations.push(permutation.substring(0, 1) + newPermutation);
		});
	});
	return newPermutations;
});

function replaceAt(string: string, index: number, replacement: string) {
	return string.substring(0, index) + replacement + string.substring(index + replacement.length);
}

function registerInput(glyph: Glyph) {
	currentText.value = currentText.value.slice(0, caretPosition.value) + glyph.mappedCharacters[0] + currentText.value.slice(caretPosition.value);
	currentPermutations.effect.run();
	console.log(currentPermutations.value);
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
	console.log(currentPermutations.value);
	if (direction === ArrowDirections.Left) moveCaret(-1);
	else if (direction === ArrowDirections.Right) moveCaret(1);
}

function updateGlpyhset(id: number) {
	selectedGlpyhset.value = glyphSets.get(id) || SquareScript;
}

</script>

<template>
	<div>
		<WindowTitleBar title="English" font="Splatfont2" :disable-glyphset-selector='true'/>
		<TextArea :words="currentPermutations" title="English" font="Splatfont2"/>
	</div>
	<div>
		<WindowTitleBar :title="selectedGlpyhset.name" :font="selectedGlpyhset.font" @update-glpyhset="updateGlpyhset"/>
		<TextArea :words="currentPermutations" :caret-position="caretPosition" :font="selectedGlpyhset.font"/>
	</div>
	<OnScreenKeyboard :glyphSet="selectedGlpyhset" @input="registerInput" @space="registerSpace" @backspace="registerBackspace" @delete="registerDelete" @arrow="registerArrow"/>
</template>