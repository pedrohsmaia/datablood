/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconScissorsBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M238.78 183.79 98.28 87.65A40.18 40.18 0 0 0 100 76a40 40 0 1 0-15.29 31.45l30 20.56-30 20.56a40 40 0 1 0 3.57 59.74A39.73 39.73 0 0 0 100 180a40.18 40.18 0 0 0-1.72-11.66l37.72-25.8 89.22 61.06a12 12 0 0 0 13.56-19.81m-167.47 7.54A16 16 0 1 1 76 180a16 16 0 0 1-4.69 11.33M48.69 87.3a16 16 0 1 1 22.62 0 16 16 0 0 1-22.62 0m112.82 23.24a12 12 0 0 1 3.13-16.68l60.58-41.46a12 12 0 0 1 13.56 19.81l-60.59 41.46a12 12 0 0 1-16.68-3.13"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconScissorsBold))
export { Memo as IconScissorsBold }
