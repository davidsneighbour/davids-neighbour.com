/**
 * @ see https://docs.astro.build/en/reference/experimental-flags/fonts/
---
import { Font } from 'astro:assets';
import { enabledWidths } from '@config/astro/fonts';
---
<Font cssVariable="--font-verb" preload />
{enabledWidths.condensed && <Font cssVariable="--font-verbcond" preload />}
{enabledWidths.compressed && <Font cssVariable="--font-verbcomp" preload />}
{enabledWidths.excond && <Font cssVariable="--font-verbexcond" preload />}
 */
type FontStyle = 'normal' | 'italic';

interface FontVariant {
  weight: number;
  style: FontStyle;
  src: string[];
}

interface LocalFontFamily {
  provider: 'local';
  name: string;
  cssVariable: string;
  fallbacks: string[];
  variants: FontVariant[];
}

export const enabledWidths = {
  regular: true,
  condensed: false,
  compressed: false,
  excond: false,
} as const;

type WidthKey = keyof typeof enabledWidths;

function expandWeights(weights: number[] | 'all'): number[] {
  if (weights === 'all') {
    return [100, 200, 300, 400, 500, 600, 700, 800, 900];
  }
  return weights;
}

/**
 * Utility to build the variants array for a given family/folder.
 * @param familyName - CSS font-family name
 * @param folder - relative path under ./src/assets/fonts/verb/
 * @param weights - weights to include (or 'all' for 100-900 by 100s)
 */
function buildLocalFamily(
  familyName: string,
  folder: WidthKey,
  weights: number[] | 'all'
): LocalFontFamily | null {
  if (!enabledWidths[folder]) {
    return null;
  }

  const styles: FontStyle[] = ['normal', 'italic'];
  const variants: FontVariant[] = [];

  const weightList = expandWeights(weights);

  for (const weight of weightList) {
    for (const style of styles) {
      const styleSuffix = style === 'normal' ? '' : 'italic-';
      const lowerFamily = familyName.toLowerCase();
      const fileBase = `./src/assets/fonts/verb/${folder}/${lowerFamily}-${weight}-${styleSuffix}webfont`;
      variants.push({
        weight,
        style,
        src: [
          `${fileBase}.woff`,
          `${fileBase}.ttf`,
        ],
      });
    }
  }

  return {
    provider: 'local',
    name: familyName,
    cssVariable: `--font-${familyName.toLowerCase()}`,
    fallbacks: ['sans-serif'],
    variants,
  };
}

export default [
  buildLocalFamily('Verb', 'regular', [300, 700]),
  //buildLocalFamily('Verb', 'regular', 'all'),
  buildLocalFamily('VerbCond', 'condensed', [300, 700]),
  buildLocalFamily('VerbComp', 'compressed', [300, 700]),
  buildLocalFamily('VerbExCond', 'excond', [300, 700]),
].filter((fam): fam is LocalFontFamily => fam !== null);
