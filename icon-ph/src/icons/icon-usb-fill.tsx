/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconUsbFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M252 128a4 4 0 0 1-1.78 3.33l-48 32A4 4 0 0 1 196 160v-24H72v48h36v-8a12 12 0 0 1 12-12h32a12 12 0 0 1 12 12v32a12 12 0 0 1-12 12h-32a12 12 0 0 1-12-12v-8H72a16 16 0 0 1-16-16v-48H8a8 8 0 0 1 0-16h48V72a16 16 0 0 1 16-16h37.17a28 28 0 1 1 0 16H72v48h124V96a4 4 0 0 1 6.22-3.33l48 32A4 4 0 0 1 252 128"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconUsbFill))
export { Memo as IconUsbFill }
