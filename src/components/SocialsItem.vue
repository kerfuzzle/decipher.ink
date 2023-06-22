<script setup lang="ts">
const props = defineProps<{
	url: string,
	name: string,
}>();
</script>

<template>
<a :href="props.url">
	<div class="inline">
		<slot/>
	</div>

	<div class="name inline">{{ name }}</div>
</a>
</template>

<style scoped>
.inline {
	display: inline;
}

.name {
	margin: 0 0 7px 5px;
}

a {
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 15px;
}
</style>