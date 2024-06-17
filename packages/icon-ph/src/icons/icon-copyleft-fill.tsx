/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCopyleftFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 56a72 72 0 1 0 72 72 72.08 72.08 0 0 0-72-72m0 120a47.66 47.66 0 0 1-38.4-19.19 8 8 0 0 1 12.8-9.61 32 32 0 1 0 0-38.4 8 8 0 0 1-12.8-9.61A48 48 0 1 1 128 176m0-152a104 104 0 1 0 104 104A104 104 0 0 0 128 24m0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCopyleftFill))
export { Memo as IconCopyleftFill }
