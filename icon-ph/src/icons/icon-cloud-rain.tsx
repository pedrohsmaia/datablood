/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCloudRain = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m158.66 196.44-32 48a8 8 0 1 1-13.32-8.88l32-48a8 8 0 0 1 13.32 8.88M232 92a76.08 76.08 0 0 1-76 76h-23.72l-29.62 44.44a8 8 0 1 1-13.32-8.88L113.05 168H76a52 52 0 0 1 0-104 53.26 53.26 0 0 1 8.92.76A76.08 76.08 0 0 1 232 92m-16 0a60.06 60.06 0 0 0-120-3.54 8 8 0 0 1-16-.92q.21-3.66.77-7.23A38.11 38.11 0 0 0 76 80a36 36 0 0 0 0 72h80a60.07 60.07 0 0 0 60-60"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCloudRain))
export { Memo as IconCloudRain }
