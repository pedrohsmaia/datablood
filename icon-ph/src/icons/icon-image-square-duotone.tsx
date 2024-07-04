/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconImageSquareDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M208 40H48a8 8 0 0 0-8 8v160a8 8 0 0 0 8 8h8.69l109.65-109.66a8 8 0 0 1 11.32 0L216 144.69V48a8 8 0 0 0-8-8M96 112a16 16 0 1 1 16-16 16 16 0 0 1-16 16"
          opacity={0.2}
        />
        <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M48 48h160v77.38l-24.69-24.7a16 16 0 0 0-22.62 0L53.37 208H48Zm160 160H76l96-96 36 36zM96 120a24 24 0 1 0-24-24 24 24 0 0 0 24 24m0-32a8 8 0 1 1-8 8 8 8 0 0 1 8-8" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconImageSquareDuotone))
export { Memo as IconImageSquareDuotone }
