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
import SLICard from '../components/SLICard.vue';
</script>

<template>
	<div class="container">
		<AnimatedTitle class="animated-title" title-content="decipher.ink"/>
		<div class="description">
			A site for translating Splatoon scripts!
		</div>
		<div class="description subDescription">
			Follow development & me here. I'd love to hear your thoughts on the site!
		</div>
	</div>
	<SocialsBar class="socials">
		<SocialsItem url="https://twitter.com/kerfuzzle_" name="@kerfuzzle_">
			<IconTwitter/>
		</SocialsItem>
		<SocialsItem url="https://discord.com/users/569822515401195520" name="@kerfuzzle">
			<IconDiscord/>
		</SocialsItem>
		<SocialsItem url="https://github.com/kerfuzzle" name="kerfuzzle">
			<IconGitHub/>
		</SocialsItem>
		<SocialsItem url="https://github.com/kerfuzzle/decipher.ink" name="repository">
			<IconGit/>
		</SocialsItem>
	</SocialsBar>
	<div class = "container">
		<div class="description subDescription">
			The cool people that deciphered and contributed to finding these scripts
		</div>
		<SocialsBar class="socials">
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
	<SLICard/>
</template>

<style scoped>
a:hover {
	filter: drop-shadow(0 0 0.3rem rgb(196, 196, 196));
}

SLICard {
	margin-top: 50px;
}

.animated-title {
	font-size: 5rem;
}

@media only screen and (max-width: 600px) {
	.animated-title {
		font-size: 4rem;
	}
}

.description {
	margin: 15px;
	font-size: 1.5rem
}

.subDescription {
	font-size: 0.8rem;
}

.socials {
	font-size: 0.7rem;
}

.container {
	text-align: center;
}
</style>
