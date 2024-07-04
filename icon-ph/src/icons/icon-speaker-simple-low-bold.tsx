/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSpeakerSimpleLowBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M157.27 21.22a12 12 0 0 0-12.64 1.31L75.88 76H32a20 20 0 0 0-20 20v64a20 20 0 0 0 20 20h43.88l68.75 53.47A12 12 0 0 0 164 224V32a12 12 0 0 0-6.73-10.78M140 199.46l-52.63-40.93A12 12 0 0 0 80 156H36v-56h44a12 12 0 0 0 7.37-2.53L140 56.54ZM204 104v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSpeakerSimpleLowBold))
export { Memo as IconSpeakerSimpleLowBold }
