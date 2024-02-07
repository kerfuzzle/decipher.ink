<script setup lang="ts">
import TranslatedWord from './TranslatedWord.vue';

const props = defineProps<{
	words: string[][];
	font: string;
	caretPosition?: number,
}>();
</script>

<template>
	<div class="textArea">
		<TranslatedWord v-for="(word, index) in words" :key="index" :caret-position="0" :permutations="word"/>
	</div>
</template>

<style scoped>

input {
	font-family: SplatoonSquare;
}

.textArea {
	font-family: v-bind('props.font'), Splatfont2;
	display: flex;
	font-size: 50px;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	width: 50vw;
	margin-bottom: 50px;
	min-height: 20vh;
	color: black;
	background-image: url('/respawnIconBackground.png');
	background-size: 225px;
	border: 10px solid rgb(151, 151, 151);
	border-top: 35px solid rgb(151, 151, 151);
	border-radius: 5px;
}

.textArea > * {
	margin-right: 15px;
}

.textArea > *:last-child {
	margin-right: 0px;
}
</style>