/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSpeakerHifiBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M192 20H64a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20m-4 192H68V44h120ZM112 76a16 16 0 1 1 16 16 16 16 0 0 1-16-16m16 120a44 44 0 1 0-44-44 44.05 44.05 0 0 0 44 44m0-64a20 20 0 1 1-20 20 20 20 0 0 1 20-20"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSpeakerHifiBold))
export { Memo as IconSpeakerHifiBold }
