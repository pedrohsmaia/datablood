/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTextHFiveFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-80 128a8 8 0 0 1-16 0v-32H72v32a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0v32h40V80a8 8 0 0 1 16 0Zm40-40a32 32 0 1 1-21.34 55.85 8 8 0 0 1 10.67-11.92 16 16 0 1 0 0-24 8 8 0 0 1-13.17-7.61l8-38A8 8 0 0 1 160 88h32a8 8 0 0 1 0 16h-25.51L163 120.37a34.08 34.08 0 0 1 5-.37"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTextHFiveFill))
export { Memo as IconTextHFiveFill }
