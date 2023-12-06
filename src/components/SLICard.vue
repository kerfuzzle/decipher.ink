<script setup lang="ts">
</script>

<template>
	<a href="https://splatoonlore.ink" class="card">
		<img src="SLILogo.png"/>
		<div class="title">
			Partnered with <span class="SLITitle">Splatoon Lore Ink.</span>
			<div class="subtitle">
				Made by ardnin, click here to find out more
			</div>
		</div>
	</a>
</template>

<style scoped>
.card {
	width: 37vw;
	margin: 5vh auto 0px;
	height: 13vh;
	border: 5px solid white;
	border-radius: 10px;
	background-image: linear-gradient(to right, #bfe0b3 25%, #e0cb92 55%, #daa5bd 90%);
	display: flex;
}

.title {
	margin: auto auto;
	color: black;
	font-size: 30px;
	text-align: center;
}

.subtitle {
	font-size: 0.5em;
}

.SLITitle {
	font-family: Sylfaen, Splatfont2;
	font-size: 1.2em;
	margin: 0px 3px;
}

img{
	margin: 10px auto;
}
</style>