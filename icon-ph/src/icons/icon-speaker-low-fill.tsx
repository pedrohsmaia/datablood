/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSpeakerLowFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 128a39.93 39.93 0 0 1-10 26.46 8 8 0 0 1-12-10.58 24 24 0 0 0 0-31.72 8 8 0 0 1 12-10.58A40 40 0 0 1 208 128m-48-96v192a8 8 0 0 1-12.91 6.31L77.25 176H32a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h45.25l69.84-54.31A8 8 0 0 1 160 32M72 96H32v64h40Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSpeakerLowFill))
export { Memo as IconSpeakerLowFill }
