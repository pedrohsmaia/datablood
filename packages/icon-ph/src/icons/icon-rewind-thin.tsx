/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRewindThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M221.85 61.48a12 12 0 0 0-12.18.39L124 116.43V71.84a11.66 11.66 0 0 0-6.15-10.36 12 12 0 0 0-12.18.39L17.48 118a11.81 11.81 0 0 0 0 19.94l88.19 56.16a12 12 0 0 0 12.18.39 11.66 11.66 0 0 0 6.15-10.33v-44.59l85.67 54.56a12 12 0 0 0 12.18.39 11.66 11.66 0 0 0 6.15-10.36V71.84a11.66 11.66 0 0 0-6.15-10.36M116 184.16a3.76 3.76 0 0 1-2 3.35 3.91 3.91 0 0 1-4-.13l-88.22-56.16a3.8 3.8 0 0 1 0-6.44L110 68.62a3.94 3.94 0 0 1 2.13-.63 4 4 0 0 1 1.91.5 3.76 3.76 0 0 1 2 3.35Zm104 0a3.76 3.76 0 0 1-2 3.35 3.91 3.91 0 0 1-4-.13l-88.18-56.16a3.8 3.8 0 0 1 0-6.44L214 68.62a3.94 3.94 0 0 1 2.13-.63 4 4 0 0 1 1.91.5 3.76 3.76 0 0 1 2 3.35Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRewindThin))
export { Memo as IconRewindThin }
