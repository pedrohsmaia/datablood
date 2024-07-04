/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBluetoothBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M191.2 166.4 140 128l51.2-38.4a12 12 0 0 0 0-19.2l-64-48A12 12 0 0 0 108 32v72L63.2 70.4a12 12 0 0 0-14.4 19.2L100 128l-51.2 38.4a12 12 0 1 0 14.4 19.2L108 152v72a12 12 0 0 0 19.2 9.6l64-48a12 12 0 0 0 0-19.2M132 56l32 24-32 24Zm0 144v-48l32 24Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBluetoothBold))
export { Memo as IconBluetoothBold }
