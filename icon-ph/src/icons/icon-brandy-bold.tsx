/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBrandyBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M228 88a99.63 99.63 0 0 0-16.18-54.55 12 12 0 0 0-10-5.45H54.23a12 12 0 0 0-10 5.45A99.63 99.63 0 0 0 28 88a100.15 100.15 0 0 0 88 99.28V212H88a12 12 0 0 0 0 24h80a12 12 0 0 0 0-24h-28v-24.72A100.15 100.15 0 0 0 228 88M61.05 52H195a75.43 75.43 0 0 1 8.1 24H53a75.43 75.43 0 0 1 8.05-24m67 112a76.12 76.12 0 0 1-75-64H203a76.12 76.12 0 0 1-75 64Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBrandyBold))
export { Memo as IconBrandyBold }
