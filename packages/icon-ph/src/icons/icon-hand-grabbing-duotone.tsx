/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHandGrabbingDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M208 108v44a80 80 0 0 1-160 0v-12a20 20 0 0 1 20-20h20V92a20 20 0 0 1 40 0 20 20 0 0 1 40 0v16a20 20 0 0 1 40 0"
          opacity={0.2}
        />
        <Path d="M188 80a27.79 27.79 0 0 0-13.36 3.4 28 28 0 0 0-46.64-11A28 28 0 0 0 80 92v20H68a28 28 0 0 0-28 28v12a88 88 0 0 0 176 0v-44a28 28 0 0 0-28-28m12 72a72 72 0 0 1-144 0v-12a12 12 0 0 1 12-12h12v24a8 8 0 0 0 16 0V92a12 12 0 0 1 24 0v28a8 8 0 0 0 16 0V92a12 12 0 0 1 24 0v28a8 8 0 0 0 16 0v-12a12 12 0 0 1 24 0Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconHandGrabbingDuotone))
export { Memo as IconHandGrabbingDuotone }
