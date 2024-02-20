<script setup lang="ts">
import IconLogo from '../assets/icons/IconLogo.vue';
import AnimatedTitle from './AnimatedTitle.vue';

withDefaults(defineProps<{
	activePath?: string,
}>(), { activePath: '/' });

</script>

<template>
	<div class="container">
		<IconLogo class="logo"/>
		<AnimatedTitle class="animated-title"/>
		<a href="#/" :class="{ 'active': activePath == '/'}">Script → English</a>
		<a href="#/generator" :class="{ 'active': activePath == '/generator'}">English → Script</a>
		<a href="#/fonts" :class="{ 'active': activePath == '/fonts'}">Fonts</a>
		<a href="#/about" :class="{ 'active': activePath == '/about'}">About</a>
	</div>
</template>

<style scoped>
.container {
	position:fixed;
	top: 0px;
	display: flex;
	flex-wrap: nowrap;
	width: 100%;
	justify-content: flex-start;
	align-items: center;
	background-color: rgba(255, 255, 255, .15);
	backdrop-filter: blur(5px);
	min-height: 70px;
	z-index: 5;
}

.container > * {
	font-family: Splatfont2;
	font-size: 1.1rem;
	margin: 0px 20px;
	flex-shrink: 2;
}

.animated-title {
	font-size: 1.5rem;
	margin-right: auto;
}

.logo {
	margin: 0px 10px;
}

a.active {
	color: white;
	padding: 0px 10px;
	border: 3px solid transparent;
	border-radius: 0.75rem;
	background-color: rgb(58, 12, 205)
}

a:hover:not(.active) {
	color: rgb(208, 190, 8);
}
</style>