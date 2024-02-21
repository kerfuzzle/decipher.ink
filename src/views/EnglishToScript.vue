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
	<div>
		<WindowTitleBar :title="selectedGlyphset.name" :font="selectedGlyphset.font" :disable-copy-button="true" @update-glyphset="updateGlyphset"/>
		<div :class="['output-area', { 'transparency-checkerboard': transparentBackground }]">
			<div class="text-container" ref="textContainer">
				{{ currentText }}
			</div>
		</div>
	</div>
	<div class="options-box">
		<label for="backgroundColour">Background Colour</label>
		<input id="backgroundColour" type="color" :disabled='transparentBackground' v-model="backgroundColour"/>
		<label for="textColour">Text Colour</label>
		<input id="textColour" type="color" v-model="textColour"/>
		<label for="transparentToggle">Transparent Background</label>
		<input id="transparentToggle" type="checkbox" v-model="transparentBackground"/>
		<PopoverAlert ref="saveImagePopover">Saving Image!</PopoverAlert>
		<DownloadButton @click="captureImage(true); saveImagePopover?.showPopover()" file-format=".png">Save Image</DownloadButton>
		<PopoverAlert ref="copyImagePopover">Copied Image!</PopoverAlert>
		<DownloadButton @click="captureImage(false); copyImagePopover?.showPopover()">Copy Image</DownloadButton>
	</div>
	<div>
		<WindowTitleBar class="titleBar" title="Input" font="Splatfont2" :disable-copy-button="true" :disable-glyphset-selector="true"/>
		<textarea class="input-area" autofocus="true" spellcheck="false" v-model="currentText"/>
	</div>

</template>

<style>
.output-area {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50vw;
	min-height: 20vh;
	max-height: 30vh;
	overflow-y: scroll;
	font-size: 3rem;
	line-height: 5rem;
	word-break: break-all;
	background-color: transparent;
	border: 10px solid rgb(151, 151, 151);
	border-top: 35px solid rgb(151, 151, 151);
	border-radius: 5px 5px 0 0;
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
	width: 50vw;
	background: rgb(151, 151, 151);
	border-radius: 0 0 5px 5px;
	margin-bottom: 60px;
	font-size: 0.7rem;
	padding: 15px;
	display: flex;
	justify-content: space-around;
	align-items: center;
}

.text-container {
	line-height: 0.75lh;
	text-align: center;
	max-width: 100%;
}

.input-area {
	width: 50vw;
	resize: none;
	min-height: 20vh;
	border: 10px solid rgb(151, 151, 151);
	border-top: 35px solid rgb(151, 151, 151);
	border-radius: 5px;
	text-align: center;
	word-break: break-all;
	font-size: 1.5rem;
	font-family: Splatfont2;
	background-image: url('/respawnIconBackground.png');
	background-size: 225px;
}

input:focus, textarea:focus {
	outline: none;
}
</style>