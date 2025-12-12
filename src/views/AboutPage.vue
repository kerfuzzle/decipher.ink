<script setup lang="ts">
import SocialsBar from '../components/SocialsBar.vue';
import SocialsItem from '../components/SocialsItem.vue';
import IconTwitter from '../assets/icons/IconTwitter.vue';
import IconBluesky from '../assets/icons/IconBluesky.vue';
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
			I'd love to hear what you thought about the site! Follow development & me here:
		</div>
	</div>
	<SocialsBar class="socials">
		<SocialsItem url="https://bsky.app/profile/kerfuzzle.dev" name="Bluesky">
			<IconBluesky/>
		</SocialsItem>
		<SocialsItem url="https://discord.com/users/569822515401195520" name="Discord">
			<IconDiscord/>
		</SocialsItem>
		<SocialsItem url="https://github.com/kerfuzzle" name="GitHub">
			<IconGitHub/>
		</SocialsItem>
		<SocialsItem url="https://github.com/kerfuzzle/decipher.ink" name="Repository">
			<IconGit/>
		</SocialsItem>
	</SocialsBar>
	<div class = "container">
		<div class="description subDescription">
			The cool people that deciphered these scripts:
		</div>
		<SocialsBar class="socials">
			<SocialsItem url="https://bsky.app/profile/ardnin.splatoonlore.ink" name="ardnin">
				<IconBluesky/>
			</SocialsItem>
			<SocialsItem url="https://bsky.app/profile/rassicas.splatoonlore.ink" name="rassicas">
				<IconBluesky/>
			</SocialsItem>
			<SocialsItem url="https://twitter.com/cosmo_splt" name="cosmo_splt">
				<IconTwitter/>
			</SocialsItem>
			<SocialsItem url="https://bsky.app/profile/splattershot.bsky.social" name="splattershot_jr">
				<IconBluesky/>
			</SocialsItem>
			<SocialsItem url="https://www.tumblr.com/guster-animations" name="guster-animations">
				<IconTumblr/>
			</SocialsItem>
			<SocialsItem url="https://bsky.app/profile/plinkamoon.bsky.social" name="plinkamoon">
				<IconBluesky/>
			</SocialsItem>
			<SocialsItem url="https://twitter.com/cack1e" name="cack1e">
				<IconTwitter/>
			</SocialsItem>
			<SocialsItem url="https://bsky.app/profile/magicalgirlfiaa.bsky.social" name="MagicalGirlFia">
				<IconBluesky/>
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
	margin-top: 4.5vh;
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
