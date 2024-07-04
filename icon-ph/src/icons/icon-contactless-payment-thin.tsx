/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconContactlessPaymentThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M93.54 102.13a55.39 55.39 0 0 1 0 51.74A4 4 0 0 1 90 156a4.07 4.07 0 0 1-1.87-.46 4 4 0 0 1-1.67-5.41 46.73 46.73 0 0 0 0-44.26 4 4 0 1 1 7.08-3.74m50.58-33.66a4 4 0 0 0-1.65 5.41 114.67 114.67 0 0 1 0 108.24 4 4 0 1 0 7.06 3.76 122.65 122.65 0 0 0 0-115.76 4 4 0 0 0-5.41-1.65m-28 16a4 4 0 0 0-1.65 5.41 81 81 0 0 1 0 76.24 4 4 0 1 0 7.06 3.76 89 89 0 0 0 0-83.76 4 4 0 0 0-5.41-1.65M228 128A100 100 0 1 1 128 28a100.11 100.11 0 0 1 100 100m-8 0a92 92 0 1 0-92 92 92.1 92.1 0 0 0 92-92"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconContactlessPaymentThin))
export { Memo as IconContactlessPaymentThin }
