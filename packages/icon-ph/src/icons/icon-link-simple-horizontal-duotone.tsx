/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLinkSimpleHorizontalDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M240 128a48 48 0 0 1-48 48H64a48 48 0 0 1-48-48 48 48 0 0 1 48-48h128a48 48 0 0 1 48 48"
          opacity={0.2}
        />
        <Path d="M80 120h96a8 8 0 0 1 0 16H80a8 8 0 0 1 0-16m24 48H64a40 40 0 0 1 0-80h40a8 8 0 0 0 0-16H64a56 56 0 0 0 0 112h40a8 8 0 0 0 0-16m88-96h-40a8 8 0 0 0 0 16h40a40 40 0 0 1 0 80h-40a8 8 0 0 0 0 16h40a56 56 0 0 0 0-112" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconLinkSimpleHorizontalDuotone))
export { Memo as IconLinkSimpleHorizontalDuotone }
