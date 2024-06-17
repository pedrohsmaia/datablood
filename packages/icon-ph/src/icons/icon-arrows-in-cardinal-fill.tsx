/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsInCardinalFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m101.66 133.66-32 32A8 8 0 0 1 56 160v-24H24a8 8 0 0 1 0-16h32V96a8 8 0 0 1 13.66-5.66l32 32a8 8 0 0 1 0 11.32m20.68-32a8 8 0 0 0 11.32 0l32-32A8 8 0 0 0 160 56h-24V24a8 8 0 0 0-16 0v32H96a8 8 0 0 0-5.66 13.66Zm11.32 52.68a8 8 0 0 0-11.32 0l-32 32A8 8 0 0 0 96 200h24v32a8 8 0 0 0 16 0v-32h24a8 8 0 0 0 5.66-13.66ZM232 120h-32V96a8 8 0 0 0-13.66-5.66l-32 32a8 8 0 0 0 0 11.32l32 32A8 8 0 0 0 200 160v-24h32a8 8 0 0 0 0-16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsInCardinalFill))
export { Memo as IconArrowsInCardinalFill }
