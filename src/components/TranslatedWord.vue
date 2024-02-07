<script setup lang="ts">
import { computed, ref, watch } from 'vue';

const props = defineProps<{
	caretPosition: number | undefined;
	permutations: string[];
}>();
const selectedPermutationIndex = ref(0);

watch(props.permutations, () => {
	selectedPermutationIndex.value = 0;
});

const selectedPermutation = computed(() => {
	if (!props.permutations.length) return;
	const charArray = props.permutations[selectedPermutationIndex.value].split('');
	if (props.caretPosition) charArray.splice(props.caretPosition, 0, '|');
	console.log(charArray);
	return charArray;
});
</script>

<template>
	<div class="word">
		<div v-for="(char, index) in selectedPermutation" :key="index" :class="char === '|' ? 'caret' : 'character'">
			<div v-if="char === '|'" class="blinking-cursor"/>
			<div v-else>
				{{ char }}
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
}


.word:hover {
	border: 1px transparent;
	border-radius: 10px;
	background: rgba(54, 54, 54, 0.15);
	backdrop-filter: blur(3px);
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
	justify-content: center;
}

.missing-character {
	color: red;
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
</style>