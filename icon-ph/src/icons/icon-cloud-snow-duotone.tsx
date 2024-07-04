/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCloudSnowDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M224 92a68 68 0 0 1-68 68H76a44 44 0 1 1 14.2-85.66v.11A68.06 68.06 0 0 1 224 92"
          opacity={0.2}
        />
        <Path d="M88 196a12 12 0 1 1-12-12 12 12 0 0 1 12 12m28 4a12 12 0 1 0 12 12 12 12 0 0 0-12-12m48-16a12 12 0 1 0 12 12 12 12 0 0 0-12-12m-96 40a12 12 0 1 0 12 12 12 12 0 0 0-12-12m88 0a12 12 0 1 0 12 12 12 12 0 0 0-12-12m76-132a76.08 76.08 0 0 1-76 76H76a52 52 0 0 1 0-104 53.26 53.26 0 0 1 8.92.76A76.08 76.08 0 0 1 232 92m-16 0a60.06 60.06 0 0 0-120-3.54 8 8 0 0 1-16-.92q.21-3.66.77-7.23A38.11 38.11 0 0 0 76 80a36 36 0 0 0 0 72h80a60.07 60.07 0 0 0 60-60" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCloudSnowDuotone))
export { Memo as IconCloudSnowDuotone }
