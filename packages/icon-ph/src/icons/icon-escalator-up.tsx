/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconEscalatorUp = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 40h-52.5a16 16 0 0 0-11.75 5.15L68.5 144H32a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h52.5a16 16 0 0 0 11.75-5.15L187.5 112H224a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 56h-36.5a16 16 0 0 0-11.75 5.15L84.5 200H32v-40h36.5a16 16 0 0 0 11.75-5.15L171.5 56H224Zm5.66 74.34a8 8 0 0 1-11.32 11.32L208 171.31V208a8 8 0 0 1-16 0v-36.69l-10.34 10.35a8 8 0 0 1-11.32-11.32l24-24a8 8 0 0 1 11.32 0Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconEscalatorUp))
export { Memo as IconEscalatorUp }
