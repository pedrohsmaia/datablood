/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSmileySadDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M224 128a96 96 0 1 1-96-96 96 96 0 0 1 96 96" opacity={0.2} />
        <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88M80 108a12 12 0 1 1 12 12 12 12 0 0 1-12-12m96 0a12 12 0 1 1-12-12 12 12 0 0 1 12 12m-1.08 64a8 8 0 1 1-13.84 8c-7.47-12.91-19.21-20-33.08-20s-25.61 7.1-33.08 20a8 8 0 1 1-13.84-8c10.29-17.79 27.39-28 46.92-28s36.63 10.2 46.92 28" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconSmileySadDuotone))
export { Memo as IconSmileySadDuotone }
