/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSlidersThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M60 108.29V40a4 4 0 0 0-8 0v68.29a28 28 0 0 0 0 55.42V216a4 4 0 0 0 8 0v-52.29a28 28 0 0 0 0-55.42M56 156a20 20 0 1 1 20-20 20 20 0 0 1-20 20m76-95.71V40a4 4 0 0 0-8 0v20.29a28 28 0 0 0 0 55.42V216a4 4 0 0 0 8 0V115.71a28 28 0 0 0 0-55.42M128 108a20 20 0 1 1 20-20 20 20 0 0 1-20 20m100 60a28 28 0 0 0-24-27.71V40a4 4 0 0 0-8 0v100.29a28 28 0 0 0 0 55.42V216a4 4 0 0 0 8 0v-20.29A28 28 0 0 0 228 168m-28 20a20 20 0 1 1 20-20 20 20 0 0 1-20 20"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSlidersThin))
export { Memo as IconSlidersThin }
