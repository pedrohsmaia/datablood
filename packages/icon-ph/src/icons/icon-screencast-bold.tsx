/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconScreencastBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M232 60v136a20 20 0 0 1-20 20h-40a12 12 0 0 1 0-24h36V64H48v4a12 12 0 0 1-24 0v-8a20 20 0 0 1 20-20h168a20 20 0 0 1 20 20M36 176a12 12 0 0 0 0 24 4 4 0 0 1 4 4 12 12 0 0 0 24 0 28 28 0 0 0-28-28m0-40a12 12 0 0 0 0 24 44.05 44.05 0 0 1 44 44 12 12 0 0 0 24 0 68.07 68.07 0 0 0-68-68m0-40a12 12 0 0 0 0 24 84.09 84.09 0 0 1 84 84 12 12 0 0 0 24 0A108.12 108.12 0 0 0 36 96"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconScreencastBold))
export { Memo as IconScreencastBold }
