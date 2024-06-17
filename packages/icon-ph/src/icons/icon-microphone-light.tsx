/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMicrophoneLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 174a46.06 46.06 0 0 0 46-46V64a46 46 0 0 0-92 0v64a46.06 46.06 0 0 0 46 46M94 64a34 34 0 0 1 68 0v64a34 34 0 0 1-68 0Zm40 141.75V232a6 6 0 0 1-12 0v-26.25A78.09 78.09 0 0 1 50 128a6 6 0 0 1 12 0 66 66 0 0 0 132 0 6 6 0 0 1 12 0 78.09 78.09 0 0 1-72 77.75"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMicrophoneLight))
export { Memo as IconMicrophoneLight }
