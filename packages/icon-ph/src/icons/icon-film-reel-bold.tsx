/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFilmReelBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 212h-28.2a107.94 107.94 0 1 0-67.8 24h96a12 12 0 0 0 0-24M44 128a84 84 0 1 1 84 84 84.09 84.09 0 0 1-84-84m64-44a20 20 0 1 1 20 20 20 20 0 0 1-20-20m20 108a20 20 0 1 1 20-20 20 20 0 0 1-20 20m24-64a20 20 0 1 1 20 20 20 20 0 0 1-20-20m-48 0a20 20 0 1 1-20-20 20 20 0 0 1 20 20"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFilmReelBold))
export { Memo as IconFilmReelBold }
