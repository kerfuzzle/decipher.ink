import type { GlyphSet } from '../typings/glyphs';
const RunicScript: GlyphSet = {
	name: 'Runic Script',
	font: 'SplatoonRunic',
	description: 'Like many of the other scripts, deciphering Runic script was attempted quite early in the game\'s life. Although it has now been fully deciphered, Runic Script \'X\' was particularly notorious to solve.',
	downloadUrls: { font: '/fonts/SplatoonRunic.ttf', cipher: '/ciphers/RunicScriptCipher.png' },
	credit: { font: 'alalehaz, @rassicas, @ardnin_, @cosmo_splt, @splattershot_jr', cipher: '@ardnin_, @tksubby_' },
	id: 5,
	glyphs: [
		{
			id: 0,
			mappedCharacters: ['A'],
		},
		{
			id: 1,
			mappedCharacters: ['B'],
		},
		{
			id: 2,
			mappedCharacters: ['C', 'W'],
		},
		{
			id: 3,
			mappedCharacters: ['D', 'U'],
		},
		{
			id: 4,
			mappedCharacters: ['E', 'N', 'V'],
		},
		{
			id: 5,
			mappedCharacters: ['F'],
		},
		{
			id: 6,
			mappedCharacters: ['G', 'X'],
		},
		{
			id: 7,
			mappedCharacters: ['H'],
		},
		{
			id: 8,
			mappedCharacters: ['I', 'Y'],
		},
		{
			id: 9,
			mappedCharacters: ['J'],
		},
		{
			id: 10,
			mappedCharacters: ['K'],
		},
		{
			id: 11,
			mappedCharacters: ['L'],
		},
		{
			id: 12,
			mappedCharacters: ['M'],
		},
		{
			id: 13,
			mappedCharacters: ['O', 'Z'],
		},
		{
			id: 14,
			mappedCharacters: ['P'],
		},
		{
			id: 15,
			mappedCharacters: ['Q'],
		},
		{
			id: 16,
			mappedCharacters: ['R'],
		},
		{
			id: 17,
			mappedCharacters: ['S'],
		},
		{
			id: 18,
			mappedCharacters: ['T'],
		},
	],
};

export { RunicScript };