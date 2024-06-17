/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberFourFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-32 128h-8v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1-7.43-11l32-80a8 8 0 0 1 14.86 6l-27.61 69H144v-32a8 8 0 0 1 16 0v32h8a8 8 0 0 1 0 16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberFourFill))
export { Memo as IconNumberFourFill }
