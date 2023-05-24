import { createFont, createTamagui } from 'tamagui'
import { createInterFont } from '@tamagui/font-inter'
import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/themes'
import { createMedia } from '@tamagui/react-native-media-driver'

import { animations } from './animations'

const isNative = process.env.TAMAGUI_TARGET === 'native'
const headingFont = isNative
  ? createFont({
      family: 'System',
      size: {
        1: 11,
        2: 12,
        3: 13,
        4: 14,
        true: 14,
        5: 16,
        6: 18,
        7: 20,
        8: 23,
        9: 30,
        10: 46,
        11: 55,
        12: 62,
        13: 72,
        14: 92,
        15: 114,
        16: 134,
      },
      weight: {
        1: '300',
        // 2 will be 300
        3: '700',
        9: '800',
      },
      lineHeight: {},
    })
  : createInterFont({
      size: {
        6: 15,
      },
      transform: {
        6: 'uppercase',
        7: 'none',
      },
      weight: {
        6: '400',
        7: '700',
      },
      color: {
        6: '$colorFocus',
        7: '$color',
      },
      letterSpacing: {
        5: 2,
        6: 1,
        7: 0,
        8: -1,
        9: -2,
        10: -3,
        12: -4,
        14: -5,
        15: -6,
      },
      face: {
        700: { normal: 'InterBold' },
      },
    })

const bodyFont = isNative
  ? createFont({
      family: 'System',
      size: {
        1: 14,
        2: 15,
        3: 16,
        4: 17,
        true: 17,
        5: 18,
        6: 20,
        7: 22,
        8: 28,
        9: 32,
        10: 48,
        11: 57,
        12: 65,
        13: 75,
        14: 95,
        15: 120,
        16: 142,
      },
      weight: {
        1: '300',
        // 2 will be 300
        4: '600',
      },
      lineHeight: {},
    })
  : createInterFont(
      {
        face: {
          700: { normal: 'InterBold' },
        },
      },
      {
        sizeSize: (size) => Math.round(size * 1.1),
        sizeLineHeight: (size) => Math.round(size * 1.1 + (size > 20 ? 10 : 10)),
      }
    )

export const config = createTamagui({
  defaultFont: 'body',
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  themes,
  tokens,
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
})
