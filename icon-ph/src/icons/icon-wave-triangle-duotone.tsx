/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWaveTriangleDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="m76 56 52 72H24Zm156 72H128l52 72Z" opacity={0.2} />
        <Path d="m238.48 132.68-52 72a8 8 0 0 1-13 0L76 69.66l-45.51 63a8 8 0 1 1-13-9.36l52-72a8 8 0 0 1 13 0l97.51 135 45.51-63a8 8 0 1 1 13 9.36Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconWaveTriangleDuotone))
export { Memo as IconWaveTriangleDuotone }
