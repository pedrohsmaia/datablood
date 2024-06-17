/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHeadlightsThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M164 80a4 4 0 0 1 4-4h72a4 4 0 0 1 0 8h-72a4 4 0 0 1-4-4m76 92h-72a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8m0-64h-72a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8m0 32h-72a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8M140 64v128a12 12 0 0 1-12 12H88a76 76 0 0 1-76-76.58C12.31 85.83 46.81 52 88.9 52H128a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H88.9C51.19 60 20.28 90.27 20 127.48A68 68 0 0 0 88 196h40a4 4 0 0 0 4-4Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconHeadlightsThin))
export { Memo as IconHeadlightsThin }
