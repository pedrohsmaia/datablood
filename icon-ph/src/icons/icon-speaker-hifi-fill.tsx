/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSpeakerHifiFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M152 160a24 24 0 1 1-24-24 24 24 0 0 1 24 24m56-120v176a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16m-92 28a12 12 0 1 0 12-12 12 12 0 0 0-12 12m52 92a40 40 0 1 0-40 40 40 40 0 0 0 40-40"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSpeakerHifiFill))
export { Memo as IconSpeakerHifiFill }
