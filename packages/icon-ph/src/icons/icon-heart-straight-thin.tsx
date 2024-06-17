/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHeartStraightThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M220.18 59.79a54.05 54.05 0 0 0-76.31 0L128 74.51l-15.87-14.77a54 54 0 0 0-76.33 76.41l89.35 90.66a4 4 0 0 0 5.7 0l89.33-90.64a54 54 0 0 0 0-76.38m-5.67 70.74L128 218.3l-86.53-87.79a46 46 0 0 1 65.06-65.06l.1.1 18.64 17.36a4 4 0 0 0 5.46 0l18.64-17.36.1-.1a46 46 0 1 1 65 65.08Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconHeartStraightThin))
export { Memo as IconHeartStraightThin }
