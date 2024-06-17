/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconUsbThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m250.22 124.67-48-32A4 4 0 0 0 196 96v28H68V72a4 4 0 0 1 4-4h36.29a28 28 0 1 0 0-8H72a12 12 0 0 0-12 12v52H8a4 4 0 0 0 0 8h52v52a12 12 0 0 0 12 12h36v12a12 12 0 0 0 12 12h32a12 12 0 0 0 12-12v-32a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12v12H72a4 4 0 0 1-4-4v-52h128v28a4 4 0 0 0 2.11 3.53 4 4 0 0 0 4.11-.2l48-32a4 4 0 0 0 0-6.66M136 44a20 20 0 1 1-20 20 20 20 0 0 1 20-20m-20 132a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4h-32a4 4 0 0 1-4-4Zm88-23.47v-49.06L240.79 128Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconUsbThin))
export { Memo as IconUsbThin }
