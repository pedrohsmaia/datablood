/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHeartStraightFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M240 98a57.63 57.63 0 0 1-17 41l-89.3 90.62a8 8 0 0 1-11.4 0L33 139a58 58 0 0 1 82-82.1l13 12.15 13.09-12.19A58 58 0 0 1 240 98"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconHeartStraightFill))
export { Memo as IconHeartStraightFill }
