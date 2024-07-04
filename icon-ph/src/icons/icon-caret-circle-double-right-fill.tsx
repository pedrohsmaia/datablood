/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCaretCircleDoubleRightFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M201.57 54.42a104 104 0 1 0 0 147.15 104.17 104.17 0 0 0 0-147.15m-75.91 79.24-32 32a8 8 0 1 1-11.32-11.32L108.68 128l-26.36-26.36a8 8 0 1 1 11.32-11.32l32 32a8 8 0 0 1 .02 11.34m56 0-32 32a8 8 0 0 1-11.32-11.32L164.71 128l-26.36-26.36a8 8 0 1 1 11.32-11.32l32 32a8 8 0 0 1 .01 11.34Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCaretCircleDoubleRightFill))
export { Memo as IconCaretCircleDoubleRightFill }
