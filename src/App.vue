<script setup lang="ts">
import TranslationArea from './components/TranslationArea.vue';
</script>

<template>
	<TranslationArea/>
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
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}
</style>
