/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconKnifeFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M231.81 32.19a28 28 0 0 0-39.67.07L18.27 210.6A8 8 0 0 0 22.2 224a154.93 154.93 0 0 0 35 4c33.42 0 66.88-10.88 98.33-32.21 31.75-21.53 50.15-45.85 50.92-46.88a8 8 0 0 0-.74-10.46l-18.74-18.76 45-48a28.08 28.08 0 0 0-.16-39.5m-42.59 112.44a225.51 225.51 0 0 1-43.11 38.18c-34.47 23.25-70 32.7-105.84 28.16l106.3-109Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconKnifeFill))
export { Memo as IconKnifeFill }
