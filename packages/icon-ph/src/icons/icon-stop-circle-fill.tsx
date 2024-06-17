/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStopCircleFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m32 128a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconStopCircleFill))
export { Memo as IconStopCircleFill }
