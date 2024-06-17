/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPersonSimpleBikeThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M164 76a24 24 0 1 0-24-24 24 24 0 0 0 24 24m0-40a16 16 0 1 1-16 16 16 16 0 0 1 16-16m36 104a36 36 0 1 0 36 36 36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28 28 28 0 0 1-28 28M56 140a36 36 0 1 0 36 36 36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28 28 28 0 0 1-28 28m136-88h-40a4 4 0 0 1-2.83-1.17L120 85.66 93.66 112l37.17 37.17A4 4 0 0 1 132 152v48a4 4 0 0 1-8 0v-46.34l-38.83-38.83a4 4 0 0 1 0-5.66l32-32a4 4 0 0 1 5.66 0L153.66 108H192a4 4 0 0 1 0 8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPersonSimpleBikeThin))
export { Memo as IconPersonSimpleBikeThin }
