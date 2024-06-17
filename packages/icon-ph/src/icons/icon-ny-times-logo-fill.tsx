/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNyTimesLogoFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M172 136a12 12 0 1 1-12 12 12 12 0 0 1 12-12m12.62-32.75-65.71-30.66a71.95 71.95 0 0 0-62.85 68.71l68.18-36.36A8 8 0 0 1 136 112v103.55a71.64 71.64 0 0 0 60.71-50A8 8 0 0 1 212 170.4a88 88 0 1 1-160.26-70.3A36 36 0 0 1 68 32a8.05 8.05 0 0 1 3.38.75l118.25 55.18A20 20 0 0 0 188 48a8 8 0 0 1 0-16 36 36 0 0 1 0 72 8.05 8.05 0 0 1-3.38-.75M96 208.47v-70.34l-38.49 20.53A72.23 72.23 0 0 0 96 208.47M96.13 62 66.37 48.07a20 20 0 0 0-5.2 38.71c.6-.71 1.2-1.42 1.84-2.11A88 88 0 0 1 96.13 62"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNyTimesLogoFill))
export { Memo as IconNyTimesLogoFill }
