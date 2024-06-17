/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCrownSimpleFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m247.37 89.15-37 113.33a8 8 0 0 1-11.71 4.39c-.23-.14-25.8-14.87-70.68-14.87s-70.45 14.73-70.7 14.88a8 8 0 0 1-11.68-4.4L8.62 89.12a12.11 12.11 0 0 1 16.9-14.62l50.19 25 41.92-69.66a12.11 12.11 0 0 1 20.74 0l41.92 69.66 50.21-25a12.1 12.1 0 0 1 16.87 14.66Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCrownSimpleFill))
export { Memo as IconCrownSimpleFill }
