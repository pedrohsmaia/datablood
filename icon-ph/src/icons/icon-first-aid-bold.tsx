/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFirstAidBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 84h-44V40a20 20 0 0 0-20-20h-48a20 20 0 0 0-20 20v44H40a20 20 0 0 0-20 20v48a20 20 0 0 0 20 20h44v44a20 20 0 0 0 20 20h48a20 20 0 0 0 20-20v-44h44a20 20 0 0 0 20-20v-48a20 20 0 0 0-20-20m-4 64h-52a12 12 0 0 0-12 12v52h-40v-52a12 12 0 0 0-12-12H44v-40h52a12 12 0 0 0 12-12V44h40v52a12 12 0 0 0 12 12h52Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFirstAidBold))
export { Memo as IconFirstAidBold }
