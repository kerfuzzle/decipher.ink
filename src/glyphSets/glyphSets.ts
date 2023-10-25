import { SquareScript } from './squareScript';
import { SerifScript } from './serifScript';
import type { GlyphSet } from '@/typings/glyphs';

const glyphSets = new Map<number, GlyphSet>();
[SquareScript, SerifScript].forEach(glyphSet => {
	glyphSets.set(glyphSet.id, glyphSet);
});

export { glyphSets };