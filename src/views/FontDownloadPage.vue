<script setup lang="ts">
import FontCard from '@/components/FontCard.vue';
</script>

<template>
	<div class="container">
		<FontCard/>
		<FontCard/>
		<FontCard/>
		<FontCard/>
		<FontCard/>
		<FontCard/>
		<FontCard/>
	</div>
</template>

<style scoped>
.container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 35px
}
</style>