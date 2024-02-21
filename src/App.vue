<script setup lang="ts">
import MainNavbar from './components/MainNavbar.vue';
import ScriptToEnglish from './views/ScriptToEnglish.vue';
import EnglishToScript from './views/EnglishToScript.vue';
import AboutPage from './views/AboutPage.vue';
import FontDownloadPage from './views/FontDownloadPage.vue';
import { computed, ref } from 'vue';

const routes: {[index: string]: any} = {
	'/':  ScriptToEnglish,
	'/generator': EnglishToScript,
	'/fonts': FontDownloadPage,
	'/about': AboutPage,
};

const currentPath = ref(window.location.hash);
window.addEventListener('hashchange', () => {
	currentPath.value = window.location.hash;
});

const currentView = computed(() => {
	return routes[currentPath.value.slice(1) || '/'] || ScriptToEnglish;
});
</script>

<template>
	<MainNavbar :active-path="currentPath.slice(1) || '/'"/>
	<div class="view-container">
		<component :is="currentView"/>
	</div>
	<div class="footer">
		This website is not affiliated with Nintendo. All product names, logos, and brands are property of their respective owners. <a href="https://github.com/kerfuzzle/decipher.ink/issues">Report a bug</a>
	</div>
</template>

<style scoped>
.footer {
	position: absolute;
	left: 0px;
	bottom: 0px;
	width: 100%;
	font-size: 0.7rem;
	text-align: center;
	color: grey;
}

.view-container {
	max-width: 100%;
	margin: 70px 0px 30px;
}

a {
	text-decoration: underline;
}
</style>
