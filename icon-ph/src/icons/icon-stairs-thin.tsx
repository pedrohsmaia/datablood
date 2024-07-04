/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStairsThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12m-48 112h52v32h-96v-32Zm4-8v-32h48v32ZM56 36h144a4 4 0 0 1 4 4v52h-52a4 4 0 0 0-4 4v36h-44a4 4 0 0 0-4 4v36H52V40a4 4 0 0 1 4-4m144 184H56a4 4 0 0 1-4-4v-36h152v36a4 4 0 0 1-4 4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconStairsThin))
export { Memo as IconStairsThin }
