/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTextIndentDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="m80 96-40 40V56Z" opacity={0.2} />
        <Path d="M224 128a8 8 0 0 1-8 8H112a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8M112 72h104a8 8 0 0 0 0-16H112a8 8 0 0 0 0 16m104 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16M32 136V56a8 8 0 0 1 13.66-5.66l40 40a8 8 0 0 1 0 11.32l-40 40A8 8 0 0 1 32 136m16-19.31L68.69 96 48 75.31Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconTextIndentDuotone))
export { Memo as IconTextIndentDuotone }
