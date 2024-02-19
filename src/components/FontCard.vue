<script setup lang="ts">
import type { GlyphSet } from '@/typings/glyphs';
import DownloadButton from './DownloadButton.vue';

const props = defineProps<{
	glyphSet: GlyphSet;
}>();

const overlappingSets = props.glyphSet.glyphs.filter(glyph => glyph.mappedCharacters.length > 1);
</script>

<template>
	<div class="container">
		<div class="title">{{ glyphSet.name }}</div>
		<div class="preview glyphFont">{{ glyphSet.name }}</div>
		<div class="description">{{ glyphSet.description }}</div>
		<div class="container frostedBackground" v-if="overlappingSets.length">
			Overlapping Characters:
			<span class="set" v-for="(set, index) in overlappingSets" :key="index">
				<span class="glyphFont">{{ set.mappedCharacters[0] }}</span> → {{ set.mappedCharacters.join(', ') }}
			</span>
		</div>
		<div v-else class="container frostedBackground">
			Overlapping Characters: None!
		</div>
		<div class="buttonGroup">
			<DownloadButton :href="glyphSet.downloadUrls.font" file-format=".ttf">Download Font</DownloadButton>
			<DownloadButton :href="glyphSet.downloadUrls.cipher" file-format=".png">Download Cipher</DownloadButton>
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
	background-size: 225px;
	margin: 15px;
	padding: 15px;
	border: 7px solid rgb(151, 151, 151);
	border-radius: 15px;
	-webkit-transition: 250ms linear;
	-ms-transition: 250ms linear;
	transition: 250ms linear;
}

.frostedBackground {
	background: rgba(96, 96, 96, 0.15);
	border: none;
	backdrop-filter: blur(3px);
}

.glyphFont {
	font-family: v-bind('glyphSet.font'), Splatfont2;
}

.set {
	padding: 0px 10px;
}

.title {
	font-size: 40px;
	margin-right: auto;
}

.preview {
	margin-left: auto;
	color: rgb(109, 109, 109);
	font-size: 40px;
}
.buttonGroup, .description {
	margin: 5px;
}

.buttonGroup > * {
	margin: 5px 10px;
}
</style>