/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconToteSimpleDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="m231.94 80.93-14.25 120a8.06 8.06 0 0 1-8 7.07H46.33a8.06 8.06 0 0 1-8-7.07l-14.25-120a8 8 0 0 1 8-8.93h191.84a8 8 0 0 1 8.02 8.93"
          opacity={0.2}
        />
        <Path d="M236 69.4a16.13 16.13 0 0 0-12.08-5.4H176a48 48 0 0 0-96 0H32.08a16.13 16.13 0 0 0-12 5.4 16 16 0 0 0-3.92 12.48l14.26 120a16 16 0 0 0 16 14.12h163.25a16 16 0 0 0 16-14.12l14.26-120A16 16 0 0 0 236 69.4M128 32a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32m81.76 168a.13.13 0 0 1-.09 0H46.25L32.08 80H224Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconToteSimpleDuotone))
export { Memo as IconToteSimpleDuotone }
