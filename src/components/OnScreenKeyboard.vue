<script setup lang="ts">
import type { Glyph, GlyphSet } from '../typings/glyphs';
enum ArrowDirections {
	Left, Right
}

const props = defineProps<{
	glyphSet: GlyphSet,
}>();
const emit = defineEmits<{
	input: [glyph: Glyph],
	backspace: [],
	space: [],
	delete: [],
	arrow: [direction: ArrowDirections],
}>();


self.addEventListener('keydown', function(event) {
	if (this.document.activeElement instanceof HTMLElement && this.document.activeElement.className !== 'input-area') this.document.activeElement.blur();
	const key = event.key;
	if (event.isComposing) return;
	if (key === 'Backspace') emit('backspace');
	else if (key === 'Delete') emit('delete');
	else if (key === 'ArrowLeft') emit('arrow', ArrowDirections.Left);
	else if (key === 'ArrowRight') emit('arrow', ArrowDirections.Right);
	else if (key === ' ') emit('space');
	else {
		const glyph = props.glyphSet.glyphs.find(g => g.mappedCharacters.includes(props.glyphSet.id === 2 ? event.key : event.key.toUpperCase()));
		if (glyph) emit('input', glyph);
	}
});
</script>

<template>
	<div class="keyboard">
		<button v-for="glyph in props.glyphSet.glyphs" :key="glyph.id" @click="emit('input', glyph)">
			{{ glyph.mappedCharacters[0] }}
		</button>
		<button @click="emit('space')" class="specialKey spacebar" aria-label="spacebar"/>
		<button @click="emit('backspace')" class="specialKey" aria-label="backspace">
			《
		</button>
		<button @click="emit('arrow', ArrowDirections.Left)" class="specialKey" aria-label="left arrow">
			←
		</button>
		<button @click="emit('arrow', ArrowDirections.Right)" class="specialKey" aria-label="right arrow">
			→
		</button>
	</div>
</template>

<style scoped>
.keyboard {
	width: 1000px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
}

@media only screen and (max-width: 1200px) {
	.keyboard {
		width: 97%;
	}
}

button {
	font-family: v-bind('props.glyphSet.font');
	font-size: 1.5rem;
	margin: 3px;
	padding: 5px;
	border-radius: 12px;
	border: 5px solid rgb(52, 52, 52);
	background-color: white;
	color: black;
	cursor: pointer;
	min-width: 50px;
	min-height: 80px;
	-webkit-transition: all 200ms linear;
	-moz-transition: all 200ms linear;
	-ms-transition: all 200ms linear;
	-o-transition: all 200ms linear;
	transition: all 200ms linear;
	-webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

@media only screen and (max-width: 700px) {
	button {
		font-size: 1.1rem;
		min-width: 30px;
		min-height: 55px;
		margin: 2px;
		padding: 3px;
		border-radius: 8px;
		border: 3px solid rgb(52, 52, 52);
	}

	.keyboard {
		justify-content: space-between;
	}
}

button:hover {
	border-color: rgb(164, 161, 161)
}

.specialKey {
	font-family: Splatfont2;
	max-width: 125px;
	flex-grow: 1;
}

.spacebar {
	flex-grow: 2;
	max-width: 200px
}
</style>