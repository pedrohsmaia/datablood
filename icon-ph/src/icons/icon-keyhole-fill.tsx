/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconKeyholeFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88m22.58-80 12.56 31.55A12 12 0 0 1 152 184h-48a12 12 0 0 1-11.14-16.44L105.42 136a36 36 0 1 1 45.16 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconKeyholeFill))
export { Memo as IconKeyholeFill }
