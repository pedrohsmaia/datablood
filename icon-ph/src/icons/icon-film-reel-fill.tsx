/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFilmReelFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 216h-40.64A103.95 103.95 0 1 0 128 232h96a8 8 0 0 0 0-16M80 148a20 20 0 1 1 20-20 20 20 0 0 1-20 20m48 48a20 20 0 1 1 20-20 20 20 0 0 1-20 20m0-96a20 20 0 1 1 20-20 20 20 0 0 1-20 20m28 28a20 20 0 1 1 20 20 20 20 0 0 1-20-20"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFilmReelFill))
export { Memo as IconFilmReelFill }
