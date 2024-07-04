/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconUserFocusFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 48v28a8 8 0 0 1-16 0V48h-28a8 8 0 0 1 0-16h28a16 16 0 0 1 16 16m-8 124a8 8 0 0 0-8 8v28h-28a8 8 0 0 0 0 16h28a16 16 0 0 0 16-16v-28a8 8 0 0 0-8-8M76 208H48v-28a8 8 0 0 0-16 0v28a16 16 0 0 0 16 16h28a8 8 0 0 0 0-16M40 84a8 8 0 0 0 8-8V48h28a8 8 0 0 0 0-16H48a16 16 0 0 0-16 16v28a8 8 0 0 0 8 8m61 57.51a67.94 67.94 0 0 0-27.4 21.68A8 8 0 0 0 80 176h96a8 8 0 0 0 6.4-12.81 67.94 67.94 0 0 0-27.4-21.68 40 40 0 1 0-53.94 0Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconUserFocusFill))
export { Memo as IconUserFocusFill }
