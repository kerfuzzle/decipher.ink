<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
	titleContent: string;
}>();

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const fonts = ['SplatoonAlterna', 'SplatoonBold', 'SplatoonBubble', 'SplatoonHalfmoon', 'SplatoonRunic', 'SplatoonSerif', 'SplatoonSign', 'SplatoonSquare'];
let id = 0;
const titleLetters = ref(props.titleContent.split('').map(char => {
	return { id: id++, char: char, font: 'Splatfont2' };
}));

let isTranslating = false;
function translateTitle(intoCipher: boolean) {
	let target = 'splatfont2';
	if (intoCipher) target = fonts[Math.floor(Math.random() * fonts.length)];
	let iterations = 0;
	if (isTranslating) return;
	isTranslating = true;
	const interval = setInterval(() => {
		for (let i = 0; i < titleLetters.value.length; i++) {
			const letter = titleLetters.value[i];
			if (i < iterations) {
				letter.char = props.titleContent[i];
				letter.font = target;
			}
			else {
				letter.char = alphabet[Math.floor(Math.random() * 26)];
			}
		}
		if (iterations >= props.titleContent.length) {
			clearInterval(interval);
			isTranslating = false;
		}
		iterations += 1;
	}, 35);
}


defineExpose({
	translateTitle,
});
</script>

<template>
	<div class="title" @mouseenter="translateTitle(true)" @mouseleave="translateTitle(false)">
		<div class="titleLetter" v-for="letter in titleLetters" :key="letter.id" :style="`font-family: ${letter.font}, Splatfont2;`">
			{{letter.char}}
		</div>
	</div>
</template>

<style scoped>
.title {
	font-family: Splatfont2;
	text-align: center;
}

.titleLetter {
	display: inline;
}
</style>
