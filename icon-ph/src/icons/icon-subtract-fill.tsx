/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSubtractFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M174.63 81.35a80 80 0 1 0-93.28 93.28 80 80 0 1 0 93.28-93.28M96 160a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSubtractFill))
export { Memo as IconSubtractFill }
