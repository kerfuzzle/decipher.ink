<script setup lang="ts">
import { computed, ref, watch } from 'vue';

defineExpose({
	getCurrentSelectedPermutation,
});
const props = defineProps<{
	caretPosition: number | undefined;
	permutations: string[];
}>();

const selectedPermutationIndex = ref(0);
const menuOpen = ref(false);
const selectedPermutation = computed(() => {
	if (!props.permutations.length) return;
	// console.log(selectedPermutationIndex.value, props.permutations);
	const charArray = props.permutations[selectedPermutationIndex.value].split('');
	if (props.caretPosition) charArray.splice(props.caretPosition, 0, '|');
	return charArray;
});

watch(props, () => {
	selectedPermutationIndex.value = 0;
});

function getCurrentSelectedPermutation() {
	return selectedPermutation.value?.join('');
}
</script>

<template>
	<div class="word" @click="menuOpen = true" @mouseleave="menuOpen = false">
		<div v-for="(char, index) in selectedPermutation" :key="index" :class="char === '|' ? 'caret' : 'character'">
			<div v-if="char === '|'" class="blinking-cursor"/>
			<div v-else>
				{{ char }}
			</div>
		</div>
		<div class="permutation-list" v-show="menuOpen">
			<div v-for="(permutation, index) in permutations" :key="index" @click="selectedPermutationIndex = index" class="permutation">
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
}


.word:hover {
	border: 1px transparent;
	border-radius: 10px;
	background: rgba(54, 54, 54, 0.15);
	backdrop-filter: blur(3px);
}

.permutation-list {
	position: absolute;
	padding: 3px;
	background: rgba(54, 54, 54, 0.15);
	border-radius: 3px;
}

.permutation {
	cursor: pointer;
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

.multiGlpyh {
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