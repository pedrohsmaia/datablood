/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCopySimpleDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M184 72v144H40V72Z" opacity={0.2} />
        <Path d="M184 64H40a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h144a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8m-8 144H48V80h128Zm48-168v144a8 8 0 0 1-16 0V48H72a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCopySimpleDuotone))
export { Memo as IconCopySimpleDuotone }
