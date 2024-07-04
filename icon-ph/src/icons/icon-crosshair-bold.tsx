/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCrosshairBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M232 116h-4.72A100.21 100.21 0 0 0 140 28.72V24a12 12 0 0 0-24 0v4.72A100.21 100.21 0 0 0 28.72 116H24a12 12 0 0 0 0 24h4.72A100.21 100.21 0 0 0 116 227.28V232a12 12 0 0 0 24 0v-4.72A100.21 100.21 0 0 0 227.28 140H232a12 12 0 0 0 0-24m-92 87v-3a12 12 0 0 0-24 0v3a76.15 76.15 0 0 1-63-63h3a12 12 0 0 0 0-24h-3a76.15 76.15 0 0 1 63-63v3a12 12 0 0 0 24 0v-3a76.15 76.15 0 0 1 63 63h-3a12 12 0 0 0 0 24h3a76.15 76.15 0 0 1-63 63M128 84a44 44 0 1 0 44 44 44.05 44.05 0 0 0-44-44m0 64a20 20 0 1 1 20-20 20 20 0 0 1-20 20"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCrosshairBold))
export { Memo as IconCrosshairBold }
