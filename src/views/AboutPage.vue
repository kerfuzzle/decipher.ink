<script setup lang="ts">
import SocialsBar from '../components/SocialsBar.vue';
import SocialsItem from '../components/SocialsItem.vue';
import IconTwitter from '../assets/icons/IconTwitter.vue';
import IconGitHub from '../assets/icons/IconGitHub.vue';
import IconGit from '../assets/icons/IconGit.vue';
import IconTumblr from '../assets/icons/IconTumblr.vue';
import IconBlogger from '../assets/icons/IconBlogger.vue';
import IconDiscord from '../assets/icons/IconDiscord.vue';
import AnimatedTitle from '../components/AnimatedTitle.vue';
</script>

<template>
	<div class="container">
		<AnimatedTitle class="animated-title"/>
		<div class="description">
			A site for translating Splatoon scripts.
		</div>
		<div class="description subDescription">
			Follow development here
		</div>
	</div>
	<SocialsBar>
		<SocialsItem url="https://twitter.com/kerfuzzle_" name="@kerfuzzle_">
			<IconTwitter/>
		</SocialsItem>
		<SocialsItem url="https://github.com/kerfuzzle" name="kerfuzzle">
			<IconGitHub/>
		</SocialsItem>
		<SocialsItem url="https://github.com/kerfuzzle/decipher.ink" name="repository">
			<IconGit/>
		</SocialsItem>
		<SocialsItem url="https://github.com/kerfuzzle/decipher.ink" name="repository">
			<IconDiscord/>
		</SocialsItem>
	</SocialsBar>
	<div class = "container">
		<div class="description subDescription">
			The cool people that deciphered these scripts
		</div>
		<SocialsBar>
			<SocialsItem url="https://twitter.com/ardnin_" name="@ardnin_">
				<IconTwitter/>
			</SocialsItem>
			<SocialsItem url="https://twitter.com/rassicas" name="@rassicas">
				<IconTwitter/>
			</SocialsItem>
			<SocialsItem url="https://twitter.com/cosmo_splt" name="@cosmo_splt">
				<IconTwitter/>
			</SocialsItem>
			<SocialsItem url="https://twitter.com/splattershot_jr" name="@splattershot_jr">
				<IconTwitter/>
			</SocialsItem>
			<SocialsItem url="https://jacebeleren.tumblr.com/" name="jacebeleren">
				<IconTumblr/>
			</SocialsItem>
			<SocialsItem url="https://inklanguage.blogspot.com/" name="alalehaz">
				<IconBlogger/>
			</SocialsItem>
		</SocialsBar>
	</div>
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

.animated-title {
	font-size: 6vmax;
}

.description {
	margin: 15px;
	font-size: 1.5vmax
}

.subDescription {
	font-size: 15px;
}
.container {
	justify-content: center;
	align-items: center;
	text-align: center;
}
</style>
