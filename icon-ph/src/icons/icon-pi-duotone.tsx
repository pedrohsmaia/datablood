/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPiDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M196 200H88V64h80v108a28 28 0 0 0 28 28" opacity={0.2} />
        <Path d="M232 172a36 36 0 0 1-72 0V72H96v128a8 8 0 0 1-16 0V72h-8a40 40 0 0 0-40 40 8 8 0 0 1-16 0 56.06 56.06 0 0 1 56-56h152a8 8 0 0 1 0 16h-48v100a20 20 0 0 0 40 0 8 8 0 0 1 16 0" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconPiDuotone))
export { Memo as IconPiDuotone }
