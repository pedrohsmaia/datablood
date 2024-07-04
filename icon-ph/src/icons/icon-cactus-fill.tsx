/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCactusFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 216a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h48v-64h-4a68.07 68.07 0 0 1-68-68 28 28 0 0 1 56 0 12 12 0 0 0 12 12h4V56a40 40 0 0 1 80 0v72h4a12 12 0 0 0 12-12 28 28 0 0 1 56 0 68.07 68.07 0 0 1-68 68h-4v24h48a8 8 0 0 1 8 8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCactusFill))
export { Memo as IconCactusFill }
