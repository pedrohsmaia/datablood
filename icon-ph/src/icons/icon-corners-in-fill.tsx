/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCornersInFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M152 96V48a8 8 0 0 1 13.66-5.66l48 48A8 8 0 0 1 208 104h-48a8 8 0 0 1-8-8m-56 56H48a8 8 0 0 0-5.66 13.66l48 48A8 8 0 0 0 104 208v-48a8 8 0 0 0-8-8m3.06-111.39a8 8 0 0 0-8.72 1.73l-48 48A8 8 0 0 0 48 104h48a8 8 0 0 0 8-8V48a8 8 0 0 0-4.94-7.39M208 152h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 13.66 5.66l48-48A8 8 0 0 0 208 152"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCornersInFill))
export { Memo as IconCornersInFill }
