/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChatCenteredDotsBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 36H40a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h57.23l13.62 22.29a20 20 0 0 0 34.25.08L158.77 204H216a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 144h-55.47a20 20 0 0 0-17.1 9.63L128 208.33l-11.41-18.67A20.1 20.1 0 0 0 99.47 180H44V60h168ZM88 120a16 16 0 1 1 16 16 16 16 0 0 1-16-16m48 0a16 16 0 1 1 16 16 16 16 0 0 1-16-16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChatCenteredDotsBold))
export { Memo as IconChatCenteredDotsBold }
