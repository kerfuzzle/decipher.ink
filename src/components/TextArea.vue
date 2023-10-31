<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
	text: string;
	font: string;
	caretPosition?: number,
}>();

const content = computed(() => {
	const charArray = props.text.split('').map(char => { return { char: char, id: 0, isCaret: false };});
	if (props.caretPosition !== undefined && props.text.length > 0) charArray.splice(props.caretPosition, 0, { char: '|', id: 0, isCaret: true });
	charArray.forEach((item, index) => item.id = index);
	return charArray;
});
</script>

<template>
	<div class="textArea">
		<div v-for="char in content" :key="char.id" :class="char.isCaret ? 'caret' : 'character'">
			<div v-if="char.isCaret" class="blinking-cursor"/>
			<div v-else>
				{{ char.char }}
			</div>
		</div>
	</div>
</template>

<style scoped>

input {
	font-family: SplatoonSquare;
}

.textArea {
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
	background-size: 150px;
	border: 10px solid rgb(151, 151, 151);
	border-top: 35px solid rgb(151, 151, 151);
	border-radius: 5px;
}

.caret, .character {
	font-family: v-bind('props.font');
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