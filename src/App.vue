<script setup lang="ts">
import MainNavbar from './components/MainNavbar.vue';
import ScriptToEnglish from './views/ScriptToEnglish.vue';
import AboutPage from './views/AboutPage.vue';
import FontDownloadPage from './views/FontDownloadPage.vue';
import { computed, ref } from 'vue';

const routes: {[index: string]: any} = {
	'/':  ScriptToEnglish,
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
	<div>
		<component :is="currentView"/>
	</div>
	<div class="footer">
		This website is not affiliated with Nintendo. All product names, logos, and brands are property of their respective owners.
	</div>
</template>

<style scoped>
.footer {
	position: absolute;
	left: 0px;
	bottom: 0px;
	width: 100%;
	text-align: center;
	color: grey;
}
</style>
