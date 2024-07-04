/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconShareNetworkFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M212 200a36 36 0 1 1-69.85-12.25l-53-34.05a36 36 0 1 1 0-51.4l53-34a36.09 36.09 0 1 1 8.67 13.45l-53 34.05a36 36 0 0 1 0 24.5l53 34.05A36 36 0 0 1 212 200"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconShareNetworkFill))
export { Memo as IconShareNetworkFill }
