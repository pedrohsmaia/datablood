/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowBendDownRight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m229.66 157.66-48 48a8 8 0 0 1-11.32-11.32L204.69 160H128A104.11 104.11 0 0 1 24 56a8 8 0 0 1 16 0 88.1 88.1 0 0 0 88 88h76.69l-34.35-34.34a8 8 0 0 1 11.32-11.32l48 48a8 8 0 0 1 0 11.32"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowBendDownRight))
export { Memo as IconArrowBendDownRight }
