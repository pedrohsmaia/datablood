/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberCircleNineBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84m20-138.64a40 40 0 1 0-25.06 74.32l-13.24 22.17a12 12 0 1 0 20.6 12.3L162.64 128A40 40 0 0 0 148 73.36M141.86 116A16 16 0 1 1 136 94.14a16 16 0 0 1 5.84 21.86Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberCircleNineBold))
export { Memo as IconNumberCircleNineBold }
