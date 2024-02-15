<script setup lang="ts">
import type { GlyphSet } from '@/typings/glyphs';
import { computed, inject, ref, watch, type Ref } from 'vue';

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
const selectedGlyphset = inject<Ref<GlyphSet>>('selectedGlyphset');
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
</script>

<template>
	<div :class="['word', { 'has-permutations': props.hasPermutations && props.permutations.length > 1 }]" @mouseenter="menuOpen = true" @mouseleave="menuOpen = false">
		<div v-for="(char, index) in selectedPermutation" :key="index" :class="char === '|' ? 'caret' : 'character'">
			<div v-if="char === '|'" class="blinking-cursor"/>
			<div v-else :class="{ 'multi-glyph': isOverlap(char) }">
				{{ char }}
			</div>
		</div>
		<div v-if="hasPermutations" :class="['permutation-list', { 'active' : menuOpen && props.hasPermutations && props.permutations.length > 1 }]">
			<div style="font-size: 15px;">{{ props.permutations.length }} possible permutations</div>
			<div v-for="(permutation, index) in permutations" :key="index" @click="selectedPermutationIndex = index; menuOpen = false" class="permutation">
				{{ permutation }}
			</div>
		</div>
	</div>
</template>

<style>
.word {
	padding-top: 10px;
	padding-left: 5px;
	padding-right: 5px;
	display: flex;
	position: relative;
}


.word.has-permutations:hover {
	border: 1px transparent;
	border-radius: 10px;
	background: rgba(54, 54, 54, 0.15);
	cursor: pointer;
}

.permutation-list {
	min-width: 100%;
	max-height: 20rem;
	overflow: hidden;
	overflow-y: scroll;
	text-align: center;
	position: absolute;
	margin-top: 4rem;
	margin-left: -5px;
	padding: 3px;
	background: white;
	border-radius: 3px;
	transform: translate3d(0, -30px, 0);
	opacity: 0;
	transition: 0.25s all ease-in-out;
	visibility: hidden;
	z-index: 1;
}

.permutation-list.active {
	transform: translate3d(0, 0, 0);
	opacity: 1;
	visibility: visible;
	box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.4);
}

.permutation {
	cursor: pointer;
	font-size: 25px;
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
	display: flex;
}

.multi-glyph {
	color: rgb(58, 12, 205);
}

.blinking-cursor {
	margin: 7px -2px;
	width: 2px;
	height: 40px;
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