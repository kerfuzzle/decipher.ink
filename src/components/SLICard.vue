<script setup lang="ts">
</script>

<template>
	<a href="https://twitter.com/splatoonloreink" target="_blank" rel="noopener noreferrer" class="card">
		<img src="/SLILogo.webp"/>
		<div class="title">
			<div>
				Partnered with <span class="SLITitle">Splatoon Lore Ink.</span>
			</div>
			<div class="subtitle">
				Made by ardnin, coming soon, click here to find out more
			</div>
		</div>
	</a>
</template>

<style scoped>
.card {
	max-width: 700px;
	margin: 5vh auto 0px;
	height: 13vh;
	border: 5px solid white;
	border-radius: 10px;
	background-image: linear-gradient(to right, #bfe0b3 25%, #e0cb92 55%, #daa5bd 90%);
	display: flex;
	justify-content: space-evenly;
}

.title {
	color: black;
	font-size: 1.2rem;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.subtitle {
	font-size: 0.8rem;
}

.SLITitle {
	font-family: Sylfaen, Splatfont2;
	font-size: 1.2em;
	margin: 0px 3px;
	display: inline-block;
}

img {
	margin: 10px 10px;
	flex-shrink: 2;
}

@media only screen and (max-width: 750px) {
	.card {
		max-width: 95%;
		overflow: hidden;
	}
	.subtitle {
		font-size: 0.7rem;
	}
	.title {
		font-size: 1rem
	}
}
</style>