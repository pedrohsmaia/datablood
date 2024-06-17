/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCopyleftLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90m46-90a46 46 0 0 1-82.8 27.61 6 6 0 0 1 9.6-7.21 34 34 0 1 0 0-40.8 6 6 0 0 1-9.6-7.21A46 46 0 0 1 174 128"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCopyleftLight))
export { Memo as IconCopyleftLight }
