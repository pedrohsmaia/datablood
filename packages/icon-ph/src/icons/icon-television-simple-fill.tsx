/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTelevisionSimpleFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M232 80v120a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h68.69L74.34 29.66a8 8 0 0 1 11.32-11.32L128 60.69l42.34-42.35a8 8 0 1 1 11.32 11.32L147.31 64H216a16 16 0 0 1 16 16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTelevisionSimpleFill))
export { Memo as IconTelevisionSimpleFill }
