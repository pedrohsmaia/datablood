/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAmazonLogoDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M168 132a44 44 0 1 1-44-44 44 44 0 0 1 44 44" opacity={0.2} />
        <Path d="M248 168v32a8 8 0 0 1-16 0v-12.69l-2.21 2.22C226.69 192.9 189.44 232 128 232c-62.84 0-100.38-40.91-101.95-42.65A8 8 0 0 1 38 178.65c.27.35 34.5 37.35 90 37.35s89.73-37 90.07-37.36a3.85 3.85 0 0 1 .27-.3l2.35-2.34H208a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m-88-73.47V84a36 36 0 0 0-68.08-16.36 8 8 0 0 1-14.25-7.28A52 52 0 0 1 176 84v92a8 8 0 0 1-16 0v-6.53a52 52 0 1 1 0-74.94m0 37.47a36 36 0 1 0-36 36 36 36 0 0 0 36-36" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconAmazonLogoDuotone))
export { Memo as IconAmazonLogoDuotone }
