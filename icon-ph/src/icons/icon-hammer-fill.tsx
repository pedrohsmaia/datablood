/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHammerFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m251.34 112-67.46-67.92a96.1 96.1 0 0 0-135.77 0l-.09.09L34.25 58.4a8 8 0 0 0 11.49 11.13l13.73-14.18a79.92 79.92 0 0 1 18.71-13.9L124.68 88l-96 96a16 16 0 0 0 0 22.63l20.69 20.69a16 16 0 0 0 22.63 0l96-96 32 32a16 16 0 0 0 22.63 0l28.69-28.69a16 16 0 0 0 .02-22.63m-89 2.33L140 136.67 119.31 116l22.35-22.35a8 8 0 0 0 0-11.32L94.32 35a80 80 0 0 1 78.23 20.41l44.22 44.51L188 128.66l-14.34-14.34a8 8 0 0 0-11.32 0Zm49 37.66-12-12L228 111.25l12 12Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconHammerFill))
export { Memo as IconHammerFill }
