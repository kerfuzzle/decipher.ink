<script setup lang="ts">
import { computed, ref } from 'vue';
import TranslatedWord from './TranslatedWord.vue';

defineExpose({
	getCurrentText,
});
const props = withDefaults(defineProps<{
	words: string[][];
	font: string;
	caretPosition?: number,
	hasPermutations?: boolean
}>(), { hasPermutations: false });

const translatedWords = ref<InstanceType<typeof TranslatedWord>[] | null>(null);
const localCaretPosition = computed(() => {
	let sum = 0;
	if (props.caretPosition !== undefined) {
		for (let i = 0; i < props.words.length; i++) {
			let length = 0;
			if (props.words[i].length) length = props.words[i][0].length;
			sum += length;
			if (sum >= props.caretPosition) return { wordIndex: i, position: length - (sum - props.caretPosition) };
			sum++;
		}
	}
	return { wordIndex: undefined, position: undefined };
});
function getCurrentText() {
	return translatedWords.value?.map(t => t.getCurrentSelectedPermutation()).join(' ');
}
</script>

<template>
	<div class="textArea">
		<TranslatedWord v-for="(word, index) in words" :key="index" :caret-position="localCaretPosition.wordIndex === index ? localCaretPosition.position : undefined" :permutations="word" :has-permutations="hasPermutations" ref="translatedWords"/>
	</div>
</template>

<style scoped>

input {
	font-family: SplatoonSquare;
}

.textArea {
	font-family: v-bind('props.font'), Splatfont2;
	display: flex;
	column-gap: 15px;
	font-size: 50px;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	max-width: 900px;
	margin-bottom: 50px;
	min-height: 20vh;
	color: black;
	background-image: url('/respawnIconBackground.png');
	background-size: 225px;
	border: 10px solid rgb(151, 151, 151);
	border-top: 35px solid rgb(151, 151, 151);
	border-radius: 5px;
}
</style>