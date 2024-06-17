/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHeadlightsDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M136 64v128a8 8 0 0 1-8 8H88a72 72 0 0 1-72-72.55C16.3 87.75 49.2 56 88.9 56H128a8 8 0 0 1 8 8"
          opacity={0.2}
        />
        <Path d="M160 80a8 8 0 0 1 8-8h72a8 8 0 0 1 0 16h-72a8 8 0 0 1-8-8m80 88h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m0-64h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m0 32h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m-96-72v128a16 16 0 0 1-16 16H88a80 80 0 0 1-80-80.61C8.33 83.62 44.62 48 88.9 48H128a16 16 0 0 1 16 16m-16 0H88.9C53.38 64 24.26 92.49 24 127.51A64 64 0 0 0 88 192h40Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconHeadlightsDuotone))
export { Memo as IconHeadlightsDuotone }
