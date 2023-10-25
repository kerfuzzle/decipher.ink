export type Glyph = {
	id: number;
	mappedCharacters: Array<string>;
}

export type GlyphSet = {
	id: number;
	name: string;
	font: string;
	glyphs: Glyph[]
}