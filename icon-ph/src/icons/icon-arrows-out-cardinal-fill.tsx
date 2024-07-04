/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsOutCardinalFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M96 136H64v24a8 8 0 0 1-13.66 5.66l-32-32a8 8 0 0 1 0-11.32l32-32A8 8 0 0 1 64 96v24h32a8 8 0 0 1 0 16m0-72h24v32a8 8 0 0 0 16 0V64h24a8 8 0 0 0 5.66-13.66l-32-32a8 8 0 0 0-11.32 0l-32 32A8 8 0 0 0 96 64m141.66 58.34-32-32A8 8 0 0 0 192 96v24h-32a8 8 0 0 0 0 16h32v24a8 8 0 0 0 13.66 5.66l32-32a8 8 0 0 0 0-11.32M160 192h-24v-32a8 8 0 0 0-16 0v32H96a8 8 0 0 0-5.66 13.66l32 32a8 8 0 0 0 11.32 0l32-32A8 8 0 0 0 160 192"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsOutCardinalFill))
export { Memo as IconArrowsOutCardinalFill }
