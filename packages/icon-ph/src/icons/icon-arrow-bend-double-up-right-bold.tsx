/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowBendDoubleUpRightBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m232.49 112.49-48 48a12 12 0 0 1-17-17L207 104l-39.49-39.52a12 12 0 0 1 17-17l48 48a12 12 0 0 1-.02 17.01m-56-17-48-48a12 12 0 1 0-17 17L139 92h-11A108.12 108.12 0 0 0 20 200a12 12 0 0 0 24 0 84.09 84.09 0 0 1 84-84h11l-27.52 27.51a12 12 0 0 0 17 17l48-48a12 12 0 0 0 .01-17Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowBendDoubleUpRightBold))
export { Memo as IconArrowBendDoubleUpRightBold }
