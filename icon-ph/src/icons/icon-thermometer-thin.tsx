/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconThermometerThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M212 60a24 24 0 1 0 24 24 24 24 0 0 0-24-24m0 40a16 16 0 1 1 16-16 16 16 0 0 1-16 16m-88 56.29V88a4 4 0 0 0-8 0v68.29a28 28 0 1 0 8 0M120 204a20 20 0 1 1 20-20 20 20 0 0 1-20 20m36-68V48a36 36 0 0 0-72 0v88a60 60 0 1 0 72 0m-36 100a52 52 0 0 1-29.71-94.68A4 4 0 0 0 92 138V48a28 28 0 0 1 56 0v90a4 4 0 0 0 1.71 3.28A52 52 0 0 1 120 236"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconThermometerThin))
export { Memo as IconThermometerThin }
