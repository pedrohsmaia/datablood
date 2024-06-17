/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChatsTeardropDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M232 152v66a6 6 0 0 1-6 6h-66a72 72 0 0 1-67.9-48H96a72 72 0 0 0 72-72 71.83 71.83 0 0 0-4.07-23.88A72 72 0 0 1 232 152"
          opacity={0.2}
        />
        <Path d="M169.57 72.59A80 80 0 0 0 16 104v66a14 14 0 0 0 14 14h56.67A80.15 80.15 0 0 0 160 232h66a14 14 0 0 0 14-14v-66a80 80 0 0 0-70.43-79.41M32 104a64 64 0 1 1 64 64H32Zm192 112h-64a64.14 64.14 0 0 1-55.68-32.43 79.93 79.93 0 0 0 70.38-93.86A64 64 0 0 1 224 152Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconChatsTeardropDuotone))
export { Memo as IconChatsTeardropDuotone }
