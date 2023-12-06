<script setup lang="ts">
import type { GlyphSet } from '@/typings/glyphs';

const props = defineProps<{
	glyphSet: GlyphSet;
}>();
</script>

<template>
	<div class="container">
		<div class="title">{{ glyphSet.name }}</div>
		<div class="preview">{{ glyphSet.name }}</div>
		<div class="description">{{ glyphSet.description }}</div>
		<div>
			Overlapping Characters: A &#x21D4; B &#x21D4; C
		</div>
		<div class="buttonGroup">
			<a class="download" href="https://github.com/kerfuzzle" target="_blank" rel="noopener noreferrer">Download Font <span class="fileFormat">.tff</span></a>
			<a class="download" href="https://github.com/kerfuzzle"  target="_blank" rel="noopener noreferrer">Download Cipher <span class="fileFormat">.png</span></a>
		</div>
	</div>
</template>

<style scoped>
.container {
	color: black;
	justify-content: left;
	align-items: flex-start;
	display: flex;
	width: 40vw;
	background: url('/respawnIconBackground.png');
	background-size: 150px;
	margin: 15px;
	padding: 15px;
	border: 5px solid rgb(151, 151, 151);
	border-radius: 15px;
	-webkit-transition: 250ms linear;
	-ms-transition: 250ms linear;
	transition: 250ms linear;
}

.title {
	font-size: 40px;
	margin-right: auto;
}

.preview {
	margin-left: auto;
	color: rgb(109, 109, 109);
	font-family: v-bind('glyphSet.font'), Splatfont2;
	font-size: 40px;
}
.buttonGroup, .description {
	margin: 5px;
}

.download {
	align-self: flex-end;
	padding: 5px;
	border: 4px solid rgb(151, 151, 151);
	border-radius: 5px;
	margin: 5px 5px;
}

.fileFormat {
	padding: 2px 4px;
	background-color: rgb(151, 151, 151);
	backdrop-filter: blur(5px);
	border-radius: 5px;
	margin-left: 10px;
}
</style>