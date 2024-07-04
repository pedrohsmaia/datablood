/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCaretDoubleRight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m141.66 133.66-80 80a8 8 0 0 1-11.32-11.32L124.69 128 50.34 53.66a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32m80-11.32-80-80a8 8 0 0 0-11.32 11.32L204.69 128l-74.35 74.34a8 8 0 0 0 11.32 11.32l80-80a8 8 0 0 0 0-11.32"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCaretDoubleRight))
export { Memo as IconCaretDoubleRight }
