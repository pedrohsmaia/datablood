/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBluetoothSlashDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="m120 128 64 48-64 48Zm0-96v96l64-48Z" opacity={0.2} />
        <Path d="m213.92 210.62-160-176a8 8 0 1 0-11.84 10.76l70.84 77.93L51.2 169.6a8 8 0 1 0 9.6 12.8L112 144v80a8 8 0 0 0 12.8 6.4l50.83-38.12 26.45 29.1a8 8 0 1 0 11.84-10.76M128 208v-64l11.73 8.8 25.08 27.59ZM112 71.63V32a8 8 0 0 1 12.8-6.4l64 48a8 8 0 0 1 0 12.8l-33.53 25.15a8 8 0 0 1-9.6-12.8l25-18.75L128 48v23.63a8 8 0 0 1-16 0" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconBluetoothSlashDuotone))
export { Memo as IconBluetoothSlashDuotone }
