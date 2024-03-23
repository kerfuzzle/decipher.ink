import type { GlyphSet } from '../typings/glyphs';
const SquareScript: GlyphSet = {
	name: 'Square Script',
	font: 'SplatoonSquare',
	description: 'Square script appears in all three games and is used in a variety of situations, often for large blocks of text. There are some glyphs in game that resemble Square Script glyphs but do not map to any characters at all so it is important to keep this in mind when deciphering. Most of its cipher was solved using Sunken Scroll 24 from Splatoon 1.',
	downloadUrls: { font: '/fonts/SplatoonSquare.ttf', cipher: '/ciphers/SquareScriptCipher.png' },
	credit: { font: '@ardnin_', cipher: '@MaidCactus, @rassicas' },
	id: 0,
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
			mappedCharacters: ['C'],
		},
		{
			id: 3,
			mappedCharacters: ['D', 'X'],
		},
		{
			id: 4,
			mappedCharacters: ['E'],
		},
		{
			id: 5,
			mappedCharacters: ['F', 'Y'],
		},
		{
			id: 6,
			mappedCharacters: ['G', 'W'],
		},
		{
			id: 7,
			mappedCharacters: ['H', 'Z'],
		},
		{
			id: 8,
			mappedCharacters: ['I'],
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
			mappedCharacters: ['L', 'V'],
		},
		{
			id: 12,
			mappedCharacters: ['M'],
		},
		{
			id: 13,
			mappedCharacters: ['N'],
		},
		{
			id: 14,
			mappedCharacters: ['O'],
		},
		{
			id: 15,
			mappedCharacters: ['P'],
		},
		{
			id: 16,
			mappedCharacters: ['Q'],
		},
		{
			id: 17,
			mappedCharacters: ['R'],
		},
		{
			id: 18,
			mappedCharacters: ['S'],
		},
		{
			id: 19,
			mappedCharacters: ['T'],
		},
		{
			id: 20,
			mappedCharacters: ['U'],
		},
	],
};

export { SquareScript };