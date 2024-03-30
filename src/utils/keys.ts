import type { GlyphSet } from '@/typings/glyphs';
import type { InjectionKey, Ref } from 'vue';

export const screenWidthInjectionKey = Symbol() as InjectionKey<Ref<number>>;
export const selectedGlyphsetInjectionKey = Symbol() as InjectionKey<Ref<GlyphSet>>;