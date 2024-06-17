/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBabyDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M224 128a96 96 0 1 1-96-96 96 96 0 0 1 96 96" opacity={0.2} />
        <Path d="M92 140a12 12 0 1 1 12-12 12 12 0 0 1-12 12m72-24a12 12 0 1 0 12 12 12 12 0 0 0-12-12m-12.27 45.23a45 45 0 0 1-47.46 0 8 8 0 0 0-8.54 13.54 61 61 0 0 0 64.54 0 8 8 0 0 0-8.54-13.54M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88.11 88.11 0 0 0-84.09-87.91C120.32 56.38 120 71.88 120 72a8 8 0 0 0 16 0 8 8 0 0 1 16 0 24 24 0 0 1-48 0c0-.73.13-14.3 8.46-30.63A88 88 0 1 0 216 128" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBabyDuotone))
export { Memo as IconBabyDuotone }
