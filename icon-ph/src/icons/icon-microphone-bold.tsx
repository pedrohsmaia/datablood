/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMicrophoneBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 172a52.06 52.06 0 0 0 52-52V64a52 52 0 0 0-104 0v56a52.06 52.06 0 0 0 52 52M100 64a28 28 0 0 1 56 0v56a28 28 0 0 1-56 0Zm40 147.22V232a12 12 0 0 1-24 0v-20.78A92.14 92.14 0 0 1 36 120a12 12 0 0 1 24 0 68 68 0 0 0 136 0 12 12 0 0 1 24 0 92.14 92.14 0 0 1-80 91.22"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMicrophoneBold))
export { Memo as IconMicrophoneBold }
