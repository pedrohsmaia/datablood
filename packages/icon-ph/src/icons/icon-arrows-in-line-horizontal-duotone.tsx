/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsInLineHorizontalDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="m64 96 32 32-32 32Zm96 32 32 32V96Z" opacity={0.2} />
        <Path d="M136 40v176a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0m-34.34 82.34a8 8 0 0 1 0 11.32l-32 32A8 8 0 0 1 56 160v-24H16a8 8 0 0 1 0-16h40V96a8 8 0 0 1 13.66-5.66Zm-17 5.66L72 115.31v25.38ZM248 128a8 8 0 0 1-8 8h-40v24a8 8 0 0 1-13.66 5.66l-32-32a8 8 0 0 1 0-11.32l32-32A8 8 0 0 1 200 96v24h40a8 8 0 0 1 8 8m-64-12.69L171.31 128 184 140.69Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsInLineHorizontalDuotone))
export { Memo as IconArrowsInLineHorizontalDuotone }
