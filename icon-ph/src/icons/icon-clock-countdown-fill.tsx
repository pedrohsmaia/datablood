/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconClockCountdownFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 96a12 12 0 1 1 12 12 12 12 0 0 1-12-12m-12-24a12 12 0 1 0-12-12 12 12 0 0 0 12 12m28.66 56a8 8 0 0 0-8.63 7.31A88.12 88.12 0 1 1 120.66 40a8 8 0 0 0-1.32-16A104.12 104.12 0 1 0 232 136.66a8 8 0 0 0-7.34-8.66M128 56a72 72 0 1 1-72 72 72.08 72.08 0 0 1 72-72m-8 72a8 8 0 0 0 8 8h48a8 8 0 0 0 0-16h-40V80a8 8 0 0 0-16 0Zm40-80a12 12 0 1 0-12-12 12 12 0 0 0 12 12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconClockCountdownFill))
export { Memo as IconClockCountdownFill }
