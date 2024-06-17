/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPlaceholderDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8"
          opacity={0.2}
        />
        <Path d="M224 48a16 16 0 0 0-16-16H48a15.91 15.91 0 0 0-10.66 4.1 9.08 9.08 0 0 0-1.24 1.24A15.91 15.91 0 0 0 32 48v160a16 16 0 0 0 16 16h160a15.91 15.91 0 0 0 10.66-4.1 7.35 7.35 0 0 0 .65-.59 6 6 0 0 0 .58-.65A15.87 15.87 0 0 0 224 208Zm-16 148.7L59.31 48H208ZM48 59.31 196.69 208H48Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconPlaceholderDuotone))
export { Memo as IconPlaceholderDuotone }
