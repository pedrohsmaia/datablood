/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPenNibStraightFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M222.33 123.89c-.06-.13-.12-.26-.19-.38L192 69.91V32a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v37.9l-30.14 53.61c-.07.12-.13.25-.2.38a15.94 15.94 0 0 0 1.46 16.57l.11.14 77.61 100.81A4 4 0 0 0 120 239v-84.37a24 24 0 1 1 16 0V239a4 4 0 0 0 7.16 2.44l77.6-100.81.11-.14a15.92 15.92 0 0 0 1.46-16.6M176 64H80V32h96Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPenNibStraightFill))
export { Memo as IconPenNibStraightFill }
