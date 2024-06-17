/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDivideBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12M128 84a20 20 0 1 0-20-20 20 20 0 0 0 20 20m0 88a20 20 0 1 0 20 20 20 20 0 0 0-20-20"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDivideBold))
export { Memo as IconDivideBold }
