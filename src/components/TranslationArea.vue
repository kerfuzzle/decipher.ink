<script setup lang="ts">
import { computed, inject, provide, ref } from 'vue';
import OnScreenKeyboard from './OnScreenKeyboard.vue';
import TextArea from './TextArea.vue';
import WindowTitleBar from './WindowTitleBar.vue';
import type { Glyph, GlyphSet } from '@/typings/glyphs';
import { glyphSets } from '@/glyphSets/glyphSets';
import { SquareScript } from '@/glyphSets/squareScript';
import { memoize } from '@/utils/memoize';
import IconWarning from '@/assets/icons/IconWarning.vue';
import { screenWidthInjectionKey, selectedGlyphsetInjectionKey } from '@/utils/keys';
enum ArrowDirections {
	Left, Right
}

const currentText = ref('');
const caretPosition = ref(0);
const selectedGlyphset = ref(SquareScript);
provide(selectedGlyphsetInjectionKey, selectedGlyphset);
const screenWidth = inject(screenWidthInjectionKey);
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
	const glyph = glyphSet.glyphs.find(g => g.mappedCharacters[0] === text.charAt(0));
	if (text.length === 1) return glyph?.mappedCharacters || [];
	const permutations: string[] = glyph?.mappedCharacters.map(newChar => newChar + text.substring(1)) || [];
	permutations.forEach(permutation => {
		recursePermutations(permutation.substring(1), glyphSet).forEach(newPermutation => {
			newPermutations.push(permutation.charAt(0) + newPermutation);
		});
	});
	return newPermutations;
});

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
		<div v-if="totalPermutations > 8000" class="warning">
			<IconWarning v-if="screenWidth! > 600" width="60" height="60"/>
			<div>Warning: The high number of permutations ({{ totalPermutations }}) might cause this tab to become laggy and eventually crash.</div>
			<IconWarning v-if="screenWidth! > 1000" width="60" height="60"/>
		</div>
		<div class="window">
			<WindowTitleBar title="English" font="Splatfont2" :disable-glyphset-selector='true' @copy="copy" @clear="currentText = ''; caretPosition = 0"/>
			<TextArea :words="currentPermutations" title="English" font="Splatfont2" :has-permutations="true" ref="englishTextArea"/>
		</div>
		<div class="window">
			<WindowTitleBar :title="selectedGlyphset.name" :font="selectedGlyphset.font" @update-glyphset="updateGlyphset" :disable-copy-button="true" :disable-clear-button="true"/>
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

.warning {
	font-size: 0.75rem;
	text-align: center;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background-image: linear-gradient(45deg, #d0be08 25%, #bdad00 25%, #bdad00 50%, #d0be08 50%, #d0be08 75%, #bdad00 75%, #bdad00 100%);
	background-size: 56.57px 56.57px;
	padding: 15px;
	border-radius: 20px;
	width: 85%
}
</style>