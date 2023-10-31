<script setup lang="ts">
import { ref } from 'vue';
import OnScreenKeyboard from './OnScreenKeyboard.vue';
import TextArea from './TextArea.vue';
import WindowTitleBar from './WindowTitleBar.vue';
import type { Glyph } from '../typings/glyphs';
import { glyphSets } from '@/glyphSets/glyphSets';
import { SquareScript } from '@/glyphSets/squareScript';
enum ArrowDirections {
	Left, Right
}

const currentText = ref('');
const caretPosition = ref(0);
const selectedGlpyhset = ref(SquareScript);

function registerInput(glyph: Glyph) {
	currentText.value = currentText.value.slice(0, caretPosition.value) + glyph.mappedCharacters[0] + currentText.value.slice(caretPosition.value);
	moveCaret(1);
}

function moveCaret(positionChange: number) {
	caretPosition.value += positionChange;
	if (caretPosition.value < 0) caretPosition.value = 0;
	else if (caretPosition.value > currentText.value.length) caretPosition.value = currentText.value.length;
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

function updateGlpyhset(id: number) {
	selectedGlpyhset.value = glyphSets.get(id) || SquareScript;
}

</script>

<template>
	<div>
		<WindowTitleBar title="English" font="Splatfont2" :disable-glyphset-selector='true'/>
		<TextArea :text="currentText" title="English" font="Splatfont2"/>
	</div>
	<div>
		<WindowTitleBar :title="selectedGlpyhset.name" :font="selectedGlpyhset.font" @update-glpyhset="updateGlpyhset"/>
		<TextArea :text="currentText" :caret-position="caretPosition" :font="selectedGlpyhset.font"/>
	</div>
	<OnScreenKeyboard :glyphSet="selectedGlpyhset" @input="registerInput" @backspace="registerBackspace" @delete="registerDelete" @arrow="registerArrow"/>
</template>