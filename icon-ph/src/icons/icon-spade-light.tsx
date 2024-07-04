/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSpadeLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M179.84 51.39a284.14 284.14 0 0 0-49.16-32.76 6 6 0 0 0-5.36 0 284.14 284.14 0 0 0-49.16 32.76C42.88 79.13 26 107.59 26 136a54 54 0 0 0 75.24 49.65l-11 36.63A6 6 0 0 0 96 230h64a6 6 0 0 0 5.75-7.72l-11-36.63A54 54 0 0 0 230 136c0-28.41-16.88-56.87-50.16-84.61M176 178a42 42 0 0 1-27.6-10.34 6 6 0 0 0-9.69 6.24l13.23 44.1h-47.88l13.23-44.1a6 6 0 0 0-9.69-6.24A42 42 0 0 1 38 136c0-53.73 74.77-97 90-105.22C143.24 39 218 82.2 218 136a42 42 0 0 1-42 42"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSpadeLight))
export { Memo as IconSpadeLight }
