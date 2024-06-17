/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBluetoothConnectedFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M192 176a8 8 0 0 1-3.2 6.4l-64 48a8 8 0 0 1-4.8 1.6 8 8 0 0 1-8-8v-80l-51.2 38.4a8 8 0 0 1-9.6-12.8l55.47-41.6L51.2 86.4a8 8 0 0 1 9.6-12.8L112 112V32a8 8 0 0 1 12.8-6.4l64 48a8 8 0 0 1 0 12.8L133.33 128l55.47 41.6a8 8 0 0 1 3.2 6.4M64 128a12 12 0 1 0-12 12 12 12 0 0 0 12-12m132-12a12 12 0 1 0 12 12 12 12 0 0 0-12-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBluetoothConnectedFill))
export { Memo as IconBluetoothConnectedFill }
