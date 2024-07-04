/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTrafficSignalThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 60a28 28 0 1 0 28 28 28 28 0 0 0-28-28m0 48a20 20 0 1 1 20-20 20 20 0 0 1-20 20m0 32a28 28 0 1 0 28 28 28 28 0 0 0-28-28m0 48a20 20 0 1 1 20-20 20 20 0 0 1-20 20m88-40h-20V76h20a4 4 0 0 0 0-8h-20V40a12 12 0 0 0-12-12H72a12 12 0 0 0-12 12v28H40a4 4 0 0 0 0 8h20v72H40a4 4 0 0 0 0 8h20v60a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12v-60h20a4 4 0 0 0 0-8m-28 68a4 4 0 0 1-4 4H72a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h112a4 4 0 0 1 4 4Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTrafficSignalThin))
export { Memo as IconTrafficSignalThin }
