/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFirstAidFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M232 104v48a16 16 0 0 1-16 16h-48v48a16 16 0 0 1-16 16h-48a16 16 0 0 1-16-16v-48H40a16 16 0 0 1-16-16v-48a16 16 0 0 1 16-16h48V40a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v48h48a16 16 0 0 1 16 16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFirstAidFill))
export { Memo as IconFirstAidFill }
