import type { GlyphSet } from '../typings/glyphs';
const SpireScript: GlyphSet = {
	name: 'Spire Script',
	font: 'SplatoonSpire',
	description: 'Spire Script was introduced in Side Order. It is mostly used for gibberish so was deciphered by comparing strings of gibberish with other solved scripts. It has only 15 unique glyphs, the lowest out of all of the scripts.',
	downloadUrls: { font: '/fonts/SplatoonSpire.ttf', cipher: '/ciphers/SpireScriptCipher.png' },
	credit: { font: '@cack1e', cipher: '@guster-animations, @splattershot_jr, @plinkamoon, @cack1e, @kerfuzzle.dev, @MagicalGirlFia, @diam.bsky.social' },
	id: 9,
	glyphs: [
		{
			id: 0,
			mappedCharacters: ['A', 'Z'],
		},
		{
			id: 1,
			mappedCharacters: ['B', 'T'],
		},
		{
			id: 2,
			mappedCharacters: ['C', 'V'],
		},
		{
			id: 3,
			mappedCharacters: ['D', 'Y'],
		},
		{
			id: 4,
			mappedCharacters: ['E', 'G'],
		},
		{
			id: 5,
			mappedCharacters: ['F', 'N'],
		},
		{
			id: 6,
			mappedCharacters: ['H', 'X'],
		},
		{
			id: 7,
			mappedCharacters: ['I', 'Q'],
		},
		{
			id: 8,
			mappedCharacters: ['J', 'P'],
		},
		{
			id: 9,
			mappedCharacters: ['K'],
		},
		{
			id: 10,
			mappedCharacters: ['L', 'W'],
		},
		{
			id: 11,
			mappedCharacters: ['M'],
		},
		{
			id: 12,
			mappedCharacters: ['O', 'S'],
		},
		{
			id: 13,
			mappedCharacters: ['R'],
		},
		{
			id: 14,
			mappedCharacters: ['U'],
		},
	],
};

export { SpireScript };
