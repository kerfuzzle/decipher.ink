<script setup lang="ts">
import { ref } from 'vue';
import IconLogo from '../assets/icons/IconLogo.vue';
import AnimatedTitle from './AnimatedTitle.vue';

withDefaults(defineProps<{
	activePath?: string,
}>(), { activePath: '/' });

const useMobileView = ref(window.innerWidth < 800);
const hamburgerOpen = ref(false);
window.onresize = () => {
	if (window.innerWidth) useMobileView.value = window.innerWidth < 800;
};
</script>

<template>
	<div :class="['navbar', { 'menu-open': hamburgerOpen }, {'sticky': activePath === '/fonts' || activePath == '/about'}]">
		<IconLogo class="logo"/>
		<AnimatedTitle class="animated-title" title-content="decipher.ink"/>
		<a v-if="!useMobileView" href="#/" :class="{ 'active': activePath == '/'}">Script → English</a>
		<a v-if="!useMobileView" href="#/generator" :class="{ 'active': activePath == '/generator'}">English → Script</a>
		<a v-if="!useMobileView" href="#/fonts" :class="{ 'active': activePath == '/fonts'}">Fonts</a>
		<a v-if="!useMobileView" href="#/about" :class="{ 'active': activePath == '/about'}">About</a>
		<div v-if="useMobileView" :class="['hamburger-button', { 'menu-open': hamburgerOpen }]" @click="hamburgerOpen = !hamburgerOpen">
			<div/>
			<div/>
			<div/>
		</div>
		<div :class="['dropdown', { 'menu-open': useMobileView && hamburgerOpen }]">
			<a href="#/" :class="{ 'active': activePath == '/'}" @click="hamburgerOpen = false">Script → English</a>
			<a href="#/generator" :class="{ 'active': activePath == '/generator'}" @click="hamburgerOpen = false">English → Script</a>
			<a href="#/fonts" :class="{ 'active': activePath == '/fonts'}" @click="hamburgerOpen = false">Fonts</a>
			<a href="#/about" :class="{ 'active': activePath == '/about'}" @click="hamburgerOpen = false">About</a>
		</div>
	</div>
</template>

<style scoped>
.navbar {
	position: absolute;
	top: 0px;
	display: flex;
	flex-wrap: nowrap;
	width: 100%;
	justify-content: flex-start;
	align-items: center;
	background-color: rgba(255, 255, 255, .15);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	min-height: 70px;
	z-index: 5;
	transition: 0.25s all ease-in-out;
}

.sticky {
	position: fixed;
}

.navbar.menu-open {
	background-color: rgb(109, 109, 109);
}

.hamburger-button {
	height: 20px;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin: 0px 10px;
}
.hamburger-button > * {
	width: 30px;
	height: 4px;
	border-radius: 2px;
	background-color: white;
	transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
}

.dropdown {
	transition: 0.25s all ease-in-out;
	padding: 10px;
	border-radius: 0px 0px 15px 15px;
	box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.4);
	position: absolute;
	width: 100%;
	top: 70px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	background-color: rgb(151, 151, 151);
	opacity: 0;
	visibility: hidden;
	transform: translate3d(0, -70px, 0);
}

.dropdown.menu-open {
	opacity: 1;
	visibility: visible;
	transform: translate3d(0, 0, 0);
}

.dropdown > a {
	margin: 8px 0;
	font-size: 2.5rem;
}

.dropdown > a.active {
	color: rgb(58, 12, 205);
}

.animated-title {
	font-size: 1.5rem;
	margin-right: auto;
}

.logo {
	margin: 0px 10px;
}
.navbar > a.active {
	color: white;
	padding: 0px 10px;
	border: 3px solid transparent;
	border-radius: 0.75rem;
	background-color: rgb(58, 12, 205)
}

.navbar > a:hover:not(.active) {
	color: rgb(208, 190, 8);
}

.navbar > a {
	font-family: Splatfont2;
	font-size: 1.1rem;
	margin: 0px 15px;
	flex-shrink: 2;
}
</style>