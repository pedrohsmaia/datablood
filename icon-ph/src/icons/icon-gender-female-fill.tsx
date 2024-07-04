/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGenderFemaleFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 144a40 40 0 1 1 40-40 40 40 0 0 1-40 40m88-104v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m-80 136v-16.58a56 56 0 1 0-16 0V176H96a8 8 0 0 0 0 16h24v16a8 8 0 0 0 16 0v-16h24a8 8 0 0 0 0-16Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGenderFemaleFill))
export { Memo as IconGenderFemaleFill }
