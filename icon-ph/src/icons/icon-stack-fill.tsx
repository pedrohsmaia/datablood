/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStackFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="m220 169.09-92 53.65-92-53.65a8 8 0 0 0-8 13.82l96 56a8 8 0 0 0 8.06 0l96-56a8 8 0 1 0-8.06-13.82" />
        <Path d="m220 121.09-92 53.65-92-53.65a8 8 0 0 0-8 13.82l96 56a8 8 0 0 0 8.06 0l96-56a8 8 0 1 0-8.06-13.82" />
        <Path d="m28 86.91 96 56a8 8 0 0 0 8.06 0l96-56a8 8 0 0 0 0-13.82l-96-56a8 8 0 0 0-8.06 0l-96 56a8 8 0 0 0 0 13.82" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconStackFill))
export { Memo as IconStackFill }
