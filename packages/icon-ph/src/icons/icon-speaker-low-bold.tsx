/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSpeakerLowBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M157.27 21.22a12 12 0 0 0-12.64 1.31L75.88 76H32a20 20 0 0 0-20 20v64a20 20 0 0 0 20 20h43.88l68.75 53.47A12 12 0 0 0 164 224V32a12 12 0 0 0-6.73-10.78M36 100h32v56H36Zm104 99.46-48-37.33V93.87l48-37.33ZM212 128a44 44 0 0 1-11 29.11 12 12 0 0 1-18-15.88 20 20 0 0 0 0-26.44 12 12 0 0 1 18-15.85A43.94 43.94 0 0 1 212 128"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSpeakerLowBold))
export { Memo as IconSpeakerLowBold }
