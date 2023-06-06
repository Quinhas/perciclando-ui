import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  shadows,
  sizes,
  space,
  transitions,
} from '@perciclando-ui/tokens';
import { createStitches, defaultThemeMap } from '@stitches/react';

interface TransitionObject {
  [key: string]: string | TransitionObject;
}

function transformTransitionObject(
  obj: TransitionObject,
  parentKey = '',
): { [key: string]: string } {
  const result: { [key: string]: string } = {};

  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      const transformedKey = parentKey ? `${parentKey}-${key}` : key;
      result[transformedKey] = obj[key] as string;
    } else {
      const childObj = transformTransitionObject(
        obj[key] as TransitionObject,
        key,
      );
      Object.assign(result, childObj);
    }
  }

  return result;
}

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
    sizes,
    shadows,
    transitions: transformTransitionObject(transitions),
  },
});
