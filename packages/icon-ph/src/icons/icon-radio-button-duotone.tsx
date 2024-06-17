/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRadioButtonDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M184 128a56 56 0 1 1-56-56 56 56 0 0 1 56 56" opacity={0.2} />
        <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88m0-152a64 64 0 1 0 64 64 64.07 64.07 0 0 0-64-64m0 112a48 48 0 1 1 48-48 48.05 48.05 0 0 1-48 48" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconRadioButtonDuotone))
export { Memo as IconRadioButtonDuotone }
