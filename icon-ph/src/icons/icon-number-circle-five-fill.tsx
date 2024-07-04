/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberCircleFiveFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m-4 88a36 36 0 0 1 0 72 35.54 35.54 0 0 1-25.71-10.4 8 8 0 1 1 11.42-11.2A19.73 19.73 0 0 0 124 168a20 20 0 0 0 0-40 19.73 19.73 0 0 0-14.29 5.6 8 8 0 0 1-13.6-6.92l8-48A8 8 0 0 1 112 72h40a8 8 0 0 1 0 16h-33.22l-4.19 25.14A38.8 38.8 0 0 1 124 112"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberCircleFiveFill))
export { Memo as IconNumberCircleFiveFill }
