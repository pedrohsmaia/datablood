/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTagChevronDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="m230.66 132.44-42.67 64a8 8 0 0 1-6.66 3.56H24l46.65-67.56a8 8 0 0 0 0-8.88L24 56h157.33a8 8 0 0 1 6.67 3.56l42.67 64a8 8 0 0 1-.01 8.88"
          opacity={0.2}
        />
        <Path d="m237.3 119.12-42.66-64A16 16 0 0 0 181.33 48H24a8 8 0 0 0-6.58 12.55L64 128l-46.58 67.45A8 8 0 0 0 24 208h157.33a16 16 0 0 0 13.31-7.12l42.66-64a16 16 0 0 0 0-17.76m-56 72.88H39.25l38-55 .08-.1a16 16 0 0 0 0-17.76l-.08-.1-38-55h142.08L224 128Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconTagChevronDuotone))
export { Memo as IconTagChevronDuotone }
