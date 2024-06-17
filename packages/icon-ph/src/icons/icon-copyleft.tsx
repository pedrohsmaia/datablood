/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCopyleft = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88m48-88a48 48 0 0 1-86.4 28.81 8 8 0 0 1 12.8-9.61 32 32 0 1 0 0-38.4 8 8 0 0 1-12.8-9.61A48 48 0 0 1 176 128"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCopyleft))
export { Memo as IconCopyleft }
