<script setup lang="ts">
import SocialsBar from './components/SocialsBar.vue';
import SocialsItem from './components/SocialsItem.vue';
import IconTwitter from './assets/icons/IconTwitter.vue';
import IconGitHub from './assets/icons/IconGitHub.vue';
import IconGit from './assets/icons/IconGit.vue';
import IconTumblr from './assets/icons/IconTumblr.vue';
import IconBlogger from './assets/icons/IconBlogger.vue';
import { ref } from 'vue';


const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const titleContent = 'decipher.ink';
const fonts = ['SplatoonAlterna', 'SplatoonBold', 'SplatoonBubble', 'SplatoonHalfmoon', 'SplatoonRunic', 'SplatoonSerif', 'SplatoonSign', 'SplatoonSquare'];
let id = 0;
const titleLetters = ref(titleContent.split('').map(char => {
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
				letter.char = titleContent[i];
				letter.font = target;
			}
			else {
				letter.char = alphabet[Math.floor(Math.random() * 26)];
			}
		}
		if (iterations >= titleContent.length) {
			clearInterval(interval);
			isTranslating = false;
		}
		iterations += 1;
	}, 35);
}
</script>

<template>
	<div class="container">
		<div class="title" @mouseenter="translateTitle(true)" @mouseleave="translateTitle(false)">
			<div class="titleLetter" v-for="letter in titleLetters" :key="letter.id" :style="`font-family: ${letter.font}`">
				{{letter.char}}
			</div>
		</div>
		<div class="description">
			A work in progress site for translating Splatoon scripts.
		</div>
		<div class="description subDescription">
			Follow development here
		</div>
	</div>
	<SocialsBar>
		<SocialsItem url="https://twitter.com/kerfuzzle_" name="@kerfuzzle_">
			<IconTwitter/>
		</SocialsItem>
		<SocialsItem url="https://github.com/kerfuzzle" name="kerfuzzle">
			<IconGitHub/>
		</SocialsItem>
		<SocialsItem url="https://github.com/kerfuzzle/decipher.ink" name="repository">
			<IconGit/>
		</SocialsItem>
	</SocialsBar>
	<div class = "container">
		<div class="description subDescription">
			The cool people that deciphered these scripts
		</div>
		<SocialsBar>
			<SocialsItem url="https://twitter.com/ardnin_" name="@ardnin_">
				<IconTwitter/>
			</SocialsItem>
			<SocialsItem url="https://twitter.com/rassicas" name="@rassicas">
				<IconTwitter/>
			</SocialsItem>
			<SocialsItem url="https://twitter.com/cosmo_splt" name="@cosmo_splt">
				<IconTwitter/>
			</SocialsItem>
			<SocialsItem url="https://twitter.com/splattershot_jr" name="@splattershot_jr">
				<IconTwitter/>
			</SocialsItem>
			<SocialsItem url="https://jacebeleren.tumblr.com/" name="jacebeleren">
				<IconTumblr/>
			</SocialsItem>
			<SocialsItem url="https://inklanguage.blogspot.com/" name="alalehaz">
				<IconBlogger/>
			</SocialsItem>
		</SocialsBar>
	</div>
	<div class="footer">
		This website is not affiliated with Nintendo. All product names, logos, and brands are property of their respective owners.
	</div>
</template>

<style scoped>
.footer {
	position: fixed;
	left: 0px;
	bottom: 0px;
	width: 100%;
	text-align: center;
	color: grey;
}
.title {
	font-size: 5vmax;
	font-family: Splatfont2;
	text-align: center;
	height: 150px
}

.titleLetter {
	display: inline;
}
.description {
	margin: 15px;
	font-size: 1.5vmax
}

.subDescription {
	font-size: 15px;
}
.container {
	justify-content: center;
	align-items: center;
	text-align: center;
}
</style>
