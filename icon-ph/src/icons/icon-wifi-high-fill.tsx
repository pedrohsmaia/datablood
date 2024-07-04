/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWifiHighFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m244.35 92.8-104 125.43A15.93 15.93 0 0 1 128 224a15.93 15.93 0 0 1-12.31-5.77L11.65 92.8a15.65 15.65 0 0 1-3.54-11.89 15.93 15.93 0 0 1 6.17-10.81A186.67 186.67 0 0 1 128 32a186.67 186.67 0 0 1 113.72 38.1 15.93 15.93 0 0 1 6.17 10.81 15.65 15.65 0 0 1-3.54 11.89"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconWifiHighFill))
export { Memo as IconWifiHighFill }
