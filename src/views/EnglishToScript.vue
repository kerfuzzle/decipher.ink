<script setup lang="ts">
import WindowTitleBar from '@/components/WindowTitleBar.vue';
import { SquareScript } from '@/glyphSets/squareScript';
import { glyphSets } from '@/glyphSets/glyphSets';
import domtoimage from 'dom-to-image';
import { ref } from 'vue';
import DownloadButton from '@/components/DownloadButton.vue';
import PopoverAlert from '@/components/PopoverAlert.vue';

const currentText = ref('');
const selectedGlyphset = ref(SquareScript);
const textContainer = ref<HTMLDivElement | null>(null);
const backgroundColour = ref('#FFFFFF');
const textColour = ref('#000000');
const transparentBackground = ref(false);
const saveImagePopover = ref<InstanceType<typeof PopoverAlert> | null>(null);
const copyImagePopover = ref<InstanceType<typeof PopoverAlert> | null>(null);


function captureImage(saveToDisk: boolean) {
	if (!textContainer.value) return;
	domtoimage.toBlob(textContainer.value, { bgcolor: transparentBackground.value ? undefined : backgroundColour.value }).then(blob => {
		if (saveToDisk) {
			const a = document.createElement('a');
			a.href = URL.createObjectURL(blob);
			a.download = `${selectedGlyphset.value.name.replace(' ', '')}_${currentText.value.substring(0, 10).replace(/ /g, '_')}.png`;
			a.click();
			URL.revokeObjectURL(a.href);
			a.remove();
		}
		else {
			navigator.clipboard.write([
				new ClipboardItem({
					'image/png': blob,
				}),
			]);
		}
	});
}

function updateGlyphset(id: number) {
	selectedGlyphset.value = glyphSets.get(id) || SquareScript;
}
</script>

<template>
	<div class="window">
		<WindowTitleBar :title="selectedGlyphset.name" :font="selectedGlyphset.font" :disable-copy-button="true" @update-glyphset="updateGlyphset" :disable-clear-button="true"/>
		<div :class="['output-area', { 'transparency-checkerboard': transparentBackground }]">
			<div class="text-container" ref="textContainer">
				{{ currentText }}
			</div>
		</div>
		<div class="options-box">
			<div class="label-group">
				<label for="backgroundColour">Background Colour</label>
				<input id="backgroundColour" type="color" :disabled='transparentBackground' v-model="backgroundColour"/>
			</div>
			<div class="label-group">
				<label for="textColour">Text Colour</label>
				<input id="textColour" type="color" v-model="textColour"/>
			</div>
			<div class="label-group">
				<label for="transparentToggle">Transparent Background</label>
				<input id="transparentToggle" type="checkbox" v-model="transparentBackground"/>
			</div>
			<PopoverAlert ref="saveImagePopover">Saving Image!</PopoverAlert>
			<DownloadButton class="button" @click="captureImage(true); saveImagePopover?.showPopover()" file-format=".png">Save Image</DownloadButton>
			<PopoverAlert ref="copyImagePopover">Copied Image!</PopoverAlert>
			<DownloadButton class="button" @click="captureImage(false); copyImagePopover?.showPopover()">Copy Image</DownloadButton>
		</div>
	</div>
	<div class="window">
		<WindowTitleBar class="titleBar" title="Input" font="Splatfont2" :disable-copy-button="true" :disable-glyphset-selector="true" @clear="currentText = ''"/>
		<textarea class="input-area" autofocus="true" spellcheck="false" v-model="currentText"/>
	</div>

</template>

<style scoped>
.window {
	width: 1200px;
	margin: 1.5rem 0;
}


@media only screen and (max-width: 1200px) {
	.window {
		width: 95vw;
	}
}

.output-area {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 25vh;
	overflow-y: scroll;
	font-size: 2rem;
	user-select: none;
	line-height: 3rem;
	background-color: transparent;
	border: 10px solid rgb(151, 151, 151);
	border-top: 0px;
	font-family: v-bind('selectedGlyphset.font'), Splatfont2;
	color: v-bind(textColour);
	background-color: v-bind(backgroundColour);
}

.transparency-checkerboard {
	background: -webkit-linear-gradient(45deg, rgba(0, 0, 0, 0.0980392) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.0980392) 75%, rgba(0, 0, 0, 0.0980392) 0), -webkit-linear-gradient(45deg, rgba(0, 0, 0, 0.0980392) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.0980392) 75%, rgba(0, 0, 0, 0.0980392) 0), white;
	background: -moz-linear-gradient(45deg, rgba(0, 0, 0, 0.0980392) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.0980392) 75%, rgba(0, 0, 0, 0.0980392) 0), -moz-linear-gradient(45deg, rgba(0, 0, 0, 0.0980392) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.0980392) 75%, rgba(0, 0, 0, 0.0980392) 0), white;
	background: linear-gradient(45deg, rgba(0, 0, 0, 0.0980392) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.0980392) 75%, rgba(0, 0, 0, 0.0980392) 0), linear-gradient(45deg, rgba(0, 0, 0, 0.0980392) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.0980392) 75%, rgba(0, 0, 0, 0.0980392) 0), white;
	background-repeat: repeat, repeat;
	background-position: 0px 0px, 15px 15px;
	background-size: 30px 30px, 30px 30px;
}

.options-box {
	color: black;
	background: rgb(151, 151, 151);
	border-radius: 0 0 5px 5px;
	font-size: 0.7rem;
	padding: 15px;
	display: flex;
	flex-wrap: wrap;
	row-gap: 5px;
	justify-content: space-around;
	align-items: center;
}

.label-group {
	font-size: 0.9rem;
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 10px;
}

.label-group > label {
	margin: 0px 5px;
}

@media only screen and (max-width: 750px) {
	.button {
		margin: 0 10px;
		flex-grow: 2;
	}
}
@media only screen and (max-width: 600px) {
	.button {
		width: 100%;
	}
}

.text-container {
	line-height: 0.75lh;
	text-align: center;
	max-width: 100%;
}

.input-area {
	resize: none;
	width: 100%;
	min-height: 25vh;
	border: 10px solid rgb(151, 151, 151);
	border-top: 0px;
	border-radius: 0 0 5px 5px;
	text-align: center;
	word-break: break-all;
	font-size: 1.5rem;
	font-family: Splatfont2;
	background-size: 225px;
	background-image: url('/respawnIconBackground.png');
	@supports (background-image: url('/respawnIconBackground.webp')) {
		background-image: url('/respawnIconBackground.webp');
	}
	@supports (background-image: url('/respawnIconBackground.avif')) {
		background-image: url('/respawnIconBackground.avif');
	}
}

input:focus, textarea:focus {
	outline: none;
}

#transparentToggle {
	accent-color: rgb(58, 12, 205);
	width: 20px;
	height: 20px;
}
</style>