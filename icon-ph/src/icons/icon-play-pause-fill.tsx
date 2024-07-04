/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPlayPauseFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M184 64v128a8 8 0 0 1-16 0V64a8 8 0 0 1 16 0m40-8a8 8 0 0 0-8 8v128a8 8 0 0 0 16 0V64a8 8 0 0 0-8-8m-87.33 58.66L48.48 58.51A15.91 15.91 0 0 0 24 71.85v112.3A15.83 15.83 0 0 0 32.23 198a15.95 15.95 0 0 0 16.25-.53l88.19-56.15a15.8 15.8 0 0 0 0-26.68Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPlayPauseFill))
export { Memo as IconPlayPauseFill }
