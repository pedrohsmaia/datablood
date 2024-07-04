/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBluetoothDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="m184 80-64 48V32Zm-64 144 64-48-64-48Z" opacity={0.2} />
        <Path d="M188.8 169.6 133.33 128l55.47-41.6a8 8 0 0 0 0-12.8l-64-48A8 8 0 0 0 112 32v80L60.8 73.6a8 8 0 0 0-9.6 12.8l55.47 41.6-55.47 41.6a8 8 0 1 0 9.6 12.8L112 144v80a8 8 0 0 0 12.8 6.4l64-48a8 8 0 0 0 0-12.8M128 48l42.67 32L128 112Zm0 160v-64l42.67 32Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBluetoothDuotone))
export { Memo as IconBluetoothDuotone }
