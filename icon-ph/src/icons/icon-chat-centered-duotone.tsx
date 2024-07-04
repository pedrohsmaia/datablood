/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChatCenteredDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M224 56v128a8 8 0 0 1-8 8h-59.47a8 8 0 0 0-6.86 3.88l-14.81 24.24a8 8 0 0 1-13.72 0l-14.81-24.24a8 8 0 0 0-6.86-3.88H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8"
          opacity={0.2}
        />
        <Path d="M216 40H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h59.47l14.81 24.23a16 16 0 0 0 27.41.06L156.53 200H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 144h-59.47a16.07 16.07 0 0 0-13.69 7.71L128 216l-14.85-24.3a16.08 16.08 0 0 0-13.68-7.7H40V56h176Z" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconChatCenteredDuotone))
export { Memo as IconChatCenteredDuotone }
