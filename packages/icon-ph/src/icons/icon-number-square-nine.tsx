/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberSquareNine = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zM146 76.82A36 36 0 1 0 127.94 144q.94 0 1.89-.06l-16.7 28a8 8 0 0 0 2.77 11 8 8 0 0 0 11-2.77l32.24-54 .07-.1A36.05 36.05 0 0 0 146 76.82m-.67 41.18A20 20 0 1 1 138 90.68a20 20 0 0 1 7.31 27.32Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberSquareNine))
export { Memo as IconNumberSquareNine }
