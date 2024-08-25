<script setup lang="ts">
import { selectedGlyphsetInjectionKey } from '@/utils/keys';
import { computed, inject, ref, watch } from 'vue';

defineExpose({
	getCurrentSelectedPermutation,
});
const props = defineProps<{
	caretPosition: number | undefined;
	permutations: string[];
	hasPermutations: boolean;
}>();

const selectedPermutationIndex = ref(0);
const menuOpen = ref(false);
const selectedGlyphset = inject(selectedGlyphsetInjectionKey);
const selectedPermutation = computed(() => {
	if (!props.permutations.length) {
		if (props.caretPosition !== undefined) return ['|'];
		else return;
	};
	const charArray = props.permutations[selectedPermutationIndex.value].split('');
	if (props.caretPosition !== undefined) charArray.splice(props.caretPosition, 0, '|');
	return charArray;
});

watch(props, () => {
	selectedPermutationIndex.value = 0;
});

function getCurrentSelectedPermutation() {
	return selectedPermutation.value?.join('');
}

function isOverlap(char: string) {
	const overlap = selectedGlyphset?.value.glyphs.find(glyph => glyph.mappedCharacters.includes(char))?.mappedCharacters;
	if (!overlap) return false;
	else return overlap.length > 1;
}

function closeMenu() {
	menuOpen.value = false;
}

function openMenu() {
	menuOpen.value = true;
}
</script>

<template>
	<div :class="['word', { 'has-permutations': props.hasPermutations && props.permutations.length > 1 }]" @mouseenter="openMenu" @mouseleave="closeMenu" @click="menuOpen = !menuOpen" v-on-click-outside="closeMenu">
		<div v-for="(char, index) in selectedPermutation" :key="index" :class="char === '|' ? 'caret' : 'character'">
			<div v-if="char === '|'" class="blinking-cursor"/>
			<div v-else :class="{ 'multi-glyph': isOverlap(char) }">
				{{ char }}
			</div>
		</div>
		<div v-if="hasPermutations" :class="['permutation-list', { 'active' : menuOpen && props.hasPermutations && props.permutations.length > 1 }]">
			<div style="font-size: 15px; width: 100%">{{ props.permutations.length }} possible permutations</div>
			<div v-for="(permutation, index) in permutations" :key="index" @click="selectedPermutationIndex = index; menuOpen = false" class="permutation">
				{{ permutation }}
			</div>
		</div>
	</div>
</template>

<style>
.word {
	display: flex;
	padding: 3px;
	flex-wrap: wrap;
	font-size: 2rem;
	justify-content: center;
	position: relative;
	word-break: break-all;
	max-width: 100%;
	border-radius: 10px;
	transition: 0.25s background ease-in-out;
}


.word.has-permutations:hover {
	border: 1px transparent;
	background: rgba(54, 54, 54, 0.15);
	cursor: pointer;
}

@media (hover: none) {
	.word.has-permutations {
		border: 1px transparent;
		border-radius: 10px;
		background: rgba(54, 54, 54, 0.15);
	}
}

.permutation-list {
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	word-break: normal;
	resize: horizontal;
	min-width: min(120%, 100vw - 10px);
	max-width: min(400%, 100vw - 10px);
	max-height: 20rem;
	overflow-x: hidden;
	overflow-y: scroll;
	text-align: center;
	position: absolute;
	top: 1lh;
	padding: 3px;
	background: white;
	border-radius: 3px;
	transform: translate3d(0, -30px, 0);
	opacity: 0;
	transition: 0.25s transform ease-in-out, 0.25s opacity ease-in-out, 0.25s visibility ease-in-out;
	visibility: hidden;
	z-index: 2;
}

.permutation-list.active {
	transform: translate3d(0, 0, 0);
	opacity: 1;
	visibility: visible;
	box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.4);
}

.permutation {
	height: min-content;
	margin: 0 10px;
	box-shadow: 0 1px 0 0 rgba(54, 54, 54, 0.15);
	cursor: pointer;
	font-size: 1rem;
	transition: 0.1s box-shadow ease-in-out;
}

.permutation:hover {
	box-shadow: 0 3px 0 0 rgb(58, 12, 205);
}

.character {
	display: inline;
	width: min-content;
	height: min-content;
	line-height: 100%;
	margin: 2px;
}

.caret {
	display: inline;
	width: min-content;
	height: min-content;
}

.multi-glyph {
	color: rgb(58, 12, 205);
}

.blinking-cursor {
	width: 2px;
	height: 2rem;
	background-color: black;
	animation: blink 1s step-end infinite;
	-webkit-animation: blink 1s step-end infinite;
	-moz-animation: blink 1s step-end infinite;
	-ms-animation: blink 1s step-end infinite;
	-o-animation: blink 1s step-end infinite;
}

@keyframes blink {
	50% {
		opacity: 0;
	}
}

@-moz-keyframes blink {
	50% {
		opacity: 0;
	}
}

@-webkit-keyframes blink {
	50% {
		opacity: 0;
	}
}

@-ms-keyframes blink {
	50% {
		opacity: 0;
	}
}

@-o-keyframes blink {
	50% {
		opacity: 0;
	}
}

@keyframes fade-in {
	100% {
		opacity: 1;
	}
}

@-moz-keyframes fade-in {
	100% {
		opacity: 1;
	}
}

@-webkit-keyframes fade-in {
	100% {
		opacity: 1;
	}
}

@-ms-keyframes fade-in {
	100% {
		opacity: 1;
	}
}

@-o-keyframes fade-in {
	100% {
		opacity: 1;
	}
}
</style>