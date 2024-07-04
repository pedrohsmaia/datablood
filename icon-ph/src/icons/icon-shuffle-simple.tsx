/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconShuffleSimple = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 48v40a8 8 0 0 1-16 0V67.31L156.28 111A8 8 0 0 1 145 99.72L188.69 56H168a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m-8 112a8 8 0 0 0-8 8v20.69L53.66 42.34a8 8 0 0 0-11.32 11.32L188.69 200H168a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8M99.72 145l-57.38 57.34a8 8 0 0 0 11.32 11.32L111 156.28A8 8 0 0 0 99.72 145"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconShuffleSimple))
export { Memo as IconShuffleSimple }
