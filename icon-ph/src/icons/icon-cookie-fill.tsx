/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCookieFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 120a40 40 0 0 1-40-40 8 8 0 0 0-8-8 40 40 0 0 1-40-40 8 8 0 0 0-8-8 104 104 0 1 0 104 104 8 8 0 0 0-8-8M75.51 99.51a12 12 0 1 1 0 17 12 12 0 0 1 0-17m25 73a12 12 0 1 1 0-17 12 12 0 0 1-.02 16.98Zm23-40a12 12 0 1 1 17 0 12 12 0 0 1-17-.02Zm41 48a12 12 0 1 1 0-17 12 12 0 0 1-.02 16.98Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCookieFill))
export { Memo as IconCookieFill }
