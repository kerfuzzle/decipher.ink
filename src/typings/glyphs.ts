export type Glyph = {
	id: number;
	mappedCharacters: Array<string>;
}

export type GlyphSet = {
	id: number;
	name: string;
	font: string;
	description: string;
	downloadUrls: { font: string, cipher: string };
	credit: { font: string, cipher: string };
	glyphs: Glyph[];
}