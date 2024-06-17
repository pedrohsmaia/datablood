/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTextColumnsBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M120 64a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h68a12 12 0 0 1 12 12m-12 28H40a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24m0 40H40a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24m0 40H40a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24m40-96h68a12 12 0 0 0 0-24h-68a12 12 0 0 0 0 24m68 16h-68a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24m0 40h-68a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24m0 40h-68a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTextColumnsBold))
export { Memo as IconTextColumnsBold }
