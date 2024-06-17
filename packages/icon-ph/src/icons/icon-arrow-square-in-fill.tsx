/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowSquareInFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 136v64a8 8 0 0 1-13.66 5.66L88 179.31l-42.34 42.35a8 8 0 0 1-11.32-11.32L76.69 168l-26.35-26.34A8 8 0 0 1 56 128h64a8 8 0 0 1 8 8m80-104H80a16 16 0 0 0-16 16v48a8 8 0 0 0 16 0V48h128v128h-48a8 8 0 0 0 0 16h48a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowSquareInFill))
export { Memo as IconArrowSquareInFill }
