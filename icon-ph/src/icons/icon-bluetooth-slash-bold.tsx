/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBluetoothSlashBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m216.88 207.93-160-176a12 12 0 1 0-17.76 16.14L107 122.75 48.8 166.4a12 12 0 1 0 14.4 19.2L108 152v72a12 12 0 0 0 19.2 9.6l47.91-35.94 24 26.41a12 12 0 0 0 17.76-16.14ZM132 200v-48l5 3.77 21.87 24.06ZM108 59.74V32a12 12 0 0 1 19.2-9.6l64 48a12 12 0 0 1 0 19.2l-27.1 20.33a12 12 0 0 1-14.4-19.2L164 80l-32-24v3.74a12 12 0 0 1-24 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBluetoothSlashBold))
export { Memo as IconBluetoothSlashBold }
