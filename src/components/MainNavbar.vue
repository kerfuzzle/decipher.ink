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
		<a href="#/" :class="activePath == '/' ? 'active' : ''">Script → English</a>
		<a>English → Script</a>
		<a href="#/fonts" :class="activePath == '/fonts' ? 'active' : ''">Fonts</a>
		<a href="#/about" :class="activePath == '/about' ? 'active' : ''">About</a>
	</div>
</template>

<style scoped>
.container {
	position:fixed;
	top: 0px;
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: flex-start;
	align-items: center;
	background-color: rgba(255, 255, 255, .15);
	backdrop-filter: blur(5px);
	min-height: 70px;
}

.container > * {
	font-family: Splatfont2;
	font-size: 30px;
	margin: 0px 20px;
}

.animated-title {
	font-size: 40px;
	margin-right: auto;
}

.logo {
	margin: 0px 10px;
}

a.active {
	color: white;
	padding: 0px 6px;
	border: 3px solid transparent;
	border-radius: 20px;
	background-color: rgba(255, 255, 255, .15);
}
</style>