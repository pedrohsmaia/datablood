/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMagnetStraightThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 44h-40a12 12 0 0 0-12 12v88a20 20 0 0 1-40 0V56a12 12 0 0 0-12-12H56a12 12 0 0 0-12 12v88a84 84 0 0 0 84 84h.64c46-.34 83.36-38.47 83.36-85V56a12 12 0 0 0-12-12m-40 8h40a4 4 0 0 1 4 4v36h-48V56a4 4 0 0 1 4-4M56 52h40a4 4 0 0 1 4 4v36H52V56a4 4 0 0 1 4-4m72.58 168H128a76 76 0 0 1-76-76v-44h48v44a28 28 0 0 0 56 0v-44h48v43c0 42.15-33.83 76.69-75.42 77"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMagnetStraightThin))
export { Memo as IconMagnetStraightThin }
