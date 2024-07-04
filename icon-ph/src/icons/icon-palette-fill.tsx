/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPaletteFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200.77 53.89A103.27 103.27 0 0 0 128 24h-1.07A104 104 0 0 0 24 128c0 43 26.58 79.06 69.36 94.17A32 32 0 0 0 136 192a16 16 0 0 1 16-16h46.21a31.81 31.81 0 0 0 31.2-24.88 104.43 104.43 0 0 0 2.59-24 103.28 103.28 0 0 0-31.23-73.23M84 168a12 12 0 1 1 12-12 12 12 0 0 1-12 12m0-56a12 12 0 1 1 12-12 12 12 0 0 1-12 12m44-24a12 12 0 1 1 12-12 12 12 0 0 1-12 12m44 24a12 12 0 1 1 12-12 12 12 0 0 1-12 12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPaletteFill))
export { Memo as IconPaletteFill }
