/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberSquareThreeFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-84 152a35.71 35.71 0 0 1-25.71-10.81A8 8 0 1 1 109.71 162 20 20 0 1 0 124 128a8 8 0 0 1-6.55-12.59L136.63 88H104a8 8 0 0 1 0-16h48a8 8 0 0 1 6.55 12.59l-21 30A36 36 0 0 1 124 184"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberSquareThreeFill))
export { Memo as IconNumberSquareThreeFill }
