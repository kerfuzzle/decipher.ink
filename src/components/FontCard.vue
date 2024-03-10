<script setup lang="ts">
import type { GlyphSet } from '@/typings/glyphs';
import DownloadButton from './DownloadButton.vue';

const props = defineProps<{
	glyphSet: GlyphSet;
}>();

const overlappingSets = props.glyphSet.glyphs.filter(glyph => glyph.mappedCharacters.length > 1);
</script>

<template>
	<div class="card">
		<div class="title">{{ glyphSet.name }}</div>
		<div class="preview glyphFont">{{ glyphSet.name }}</div>
		<div class="description">{{ glyphSet.description }}</div>
		<div class="frostedBackground overlapping-set" v-if="overlappingSets.length">
			Overlapping Characters:
			<span v-for="(set, index) in overlappingSets" :key="index">
				<span class="glyphFont">{{ set.mappedCharacters[0] }}</span> → {{ set.mappedCharacters.join(', ') }}
			</span>
		</div>
		<div v-else class="frostedBackground overlapping-set">
			Overlapping Characters: None!
		</div>
		<div class="buttonGroup">
			<DownloadButton :href="glyphSet.downloadUrls.font" file-format=".ttf">Download Font</DownloadButton>
			<DownloadButton :href="glyphSet.downloadUrls.cipher" file-format=".png">Download Cipher</DownloadButton>
		</div>
	</div>
</template>

<style scoped>
.card {
	color: black;
	justify-content: center;
	align-items: flex-start;
	align-content: space-between;
	flex-wrap: wrap;
	display: flex;
	max-width: 45%;
	font-size: 0.8rem;
	margin: 15px;
	padding: 15px;
	border: 7px solid rgb(151, 151, 151);
	border-radius: 15px;
	-webkit-transition: 250ms linear;
	-ms-transition: 250ms linear;
	transition: 250ms linear;
	background-size: 225px;
	background-image: url('/respawnIconBackground.png');
	@supports (background-image: url('/respawnIconBackground.webp')) {
		background-image: url('/respawnIconBackground.webp');
	}
	@supports (background-image: url('/respawnIconBackground.avif')) {
		background-image: url('/respawnIconBackground.avif');
	}
}

.overlapping-set {
	width: 90%;
	margin: 15px 0;
	padding: 15px;
	align-items: center;
	justify-content: flex-start;
	display: flex;
	flex-wrap: wrap;
	border-radius: 15px;
}

.overlapping-set > * {
	margin: 0px 0.5rem;
}

.frostedBackground {
	background: rgba(96, 96, 96, 0.15);
	border: none;
	backdrop-filter: blur(3px);
	-webkit-backdrop-filter: blur(3px);
}

.glyphFont {
	font-family: v-bind('glyphSet.font'), Splatfont2;
}

.title {
	font-size: 1.6rem;
	margin-right: auto;
}

.preview {
	margin-left: auto;
	color: rgb(109, 109, 109);
	font-size:1.6rem;
}

.buttonGroup, .description {
	margin: 5px;
}

.buttonGroup {
	font-size: 0.8rem;
	width: 95%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
}
.buttonGroup > * {
	margin: 5px 10px;
	flex-grow: 2;
	max-width: 200px;
}

.description {
	max-width: 95%;
}

@media only screen and (max-width: 600px) {
	.buttonGroup > * {
		max-width: unset;
	}

	.title {
		margin-right: 0px;
		text-align: center;
		width: 100%;
	}

	.preview {
		margin-left: 0px;
		text-align: center;
		width: 100%;
	}
}

@media only screen and (max-width: 1200px) {
	.card {
		max-width: 95%;
	}
}
</style>