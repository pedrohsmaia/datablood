/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowBendLeftDown = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 32a8 8 0 0 1-8 8 88.1 88.1 0 0 0-88 88v76.69l34.34-34.35a8 8 0 0 1 11.32 11.32l-48 48a8 8 0 0 1-11.32 0l-48-48a8 8 0 0 1 11.32-11.32L96 204.69V128A104.11 104.11 0 0 1 200 24a8 8 0 0 1 8 8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowBendLeftDown))
export { Memo as IconArrowBendLeftDown }
