import type { GlyphSet } from '@/typings/glyphs';
import { SquareScript } from './squareScript';
import { SerifScript } from './serifScript';
import { BoldScript } from './boldScript';
import { RoundScript } from './roundScript';
import { BubbleScript } from './bubbleScript';
import { RunicScript } from './runicScript';
import { HalfmoonScript } from './halfmoonScript';
import { SignScript } from './signScript';
import { AlternaScript } from './alternaScript';

const glyphSets = new Map<number, GlyphSet>();
[SquareScript, SerifScript, BoldScript, RoundScript, BubbleScript, RunicScript, HalfmoonScript, SignScript, AlternaScript].forEach(glyphSet => {
	glyphSets.set(glyphSet.id, glyphSet);
});

export { glyphSets };