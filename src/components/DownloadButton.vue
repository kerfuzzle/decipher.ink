<script setup lang="ts">
const props = defineProps<{
	fileFormat?: string;
}>();
</script>

<template>
	<a class="download" target="_blank" rel="noopener noreferrer"><slot/><span v-if="fileFormat" class="fileFormat">{{ props.fileFormat }}</span></a>
</template>

<style scoped>
.download {
	align-self: flex-end;
	padding: 10px;
	border-radius: 10px;
	background: rgb(58, 12, 205);
	color: white;
	white-space: nowrap;
	text-align: center;
}

.download:hover {
	background: rgb(58, 12, 205, 0.6);
	backdrop-filter: blur(2px);
	cursor: pointer;
}

.fileFormat {
	padding: 1px 4px;
	background-color: rgb(255, 255, 255, 0.2);
	border-radius: 5px;
	margin-left: 10px;
}
</style>