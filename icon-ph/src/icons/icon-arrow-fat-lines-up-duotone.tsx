/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowFatLinesUpDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M224 120h-48v32H80v-32H32l96-96Z" opacity={0.2} />
        <Path d="m229.66 114.34-96-96a8 8 0 0 0-11.32 0l-96 96A8 8 0 0 0 32 128h40v24a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8v-24h40a8 8 0 0 0 5.66-13.66M176 112a8 8 0 0 0-8 8v24H88v-24a8 8 0 0 0-8-8H51.31L128 35.31 204.69 112Zm8 104a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h96a8 8 0 0 1 8 8m0-32a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h96a8 8 0 0 1 8 8" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconArrowFatLinesUpDuotone))
export { Memo as IconArrowFatLinesUpDuotone }
