/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBellSlashThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M51 37.31a4 4 0 0 0-6 5.38l18.8 20.63A75.52 75.52 0 0 0 52 104c0 36.13-8.58 64-14.36 73.95A12 12 0 0 0 48 196h44.23a36 36 0 0 0 71.54 0h20.64L205 218.69a4 4 0 1 0 5.92-5.38ZM128 220a28 28 0 0 1-27.71-24h55.42A28 28 0 0 1 128 220m-80-32a3.89 3.89 0 0 1-3.43-2 4 4 0 0 1 0-4C52 169.17 60 139.32 60 104a67.58 67.58 0 0 1 9.4-34.51L177.14 188Zm164.55-12.48a3.94 3.94 0 0 1-1.46.28 4 4 0 0 1-3.72-2.54C200.24 155.17 196 129.28 196 104A68 68 0 0 0 94.46 44.83a4 4 0 1 1-4-6.95A76 76 0 0 1 204 104c0 36.05 8.26 59.89 10.79 66.34a4 4 0 0 1-2.26 5.18Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBellSlashThin))
export { Memo as IconBellSlashThin }
