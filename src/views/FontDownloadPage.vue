<script setup lang="ts">
import FontCard from '@/components/FontCard.vue';
import { glyphSets } from '@/glyphSets/glyphSets';
</script>

<template>
	<div class="card-container">
		<FontCard v-for="[key, value] of glyphSets" :key="key" :glyph-set="value"/>
	</div>
</template>

<style scoped>
.card-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 35px;
	max-width: 100%;
}
</style>