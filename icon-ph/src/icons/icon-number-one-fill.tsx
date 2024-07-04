/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberOneFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-56 160a8 8 0 0 1-16 0V84.94l-20.42 10.22a8 8 0 1 1-7.16-14.32l32-16A8 8 0 0 1 144 72Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberOneFill))
export { Memo as IconNumberOneFill }
