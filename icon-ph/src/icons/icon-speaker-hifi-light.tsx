/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSpeakerHifiLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M192 26H64a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14m2 190a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h128a2 2 0 0 1 2 2ZM118 76a10 10 0 1 1 10 10 10 10 0 0 1-10-10m10 38a38 38 0 1 0 38 38 38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26 26 26 0 0 1-26 26"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSpeakerHifiLight))
export { Memo as IconSpeakerHifiLight }
