/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCassetteTapeDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M170.4 171.2 192 200H64l21.6-28.8A8 8 0 0 1 92 168h72a8 8 0 0 1 6.4 3.2M176 88a24 24 0 1 0 24 24 24 24 0 0 0-24-24m-72 24a24 24 0 1 0-24 24 24 24 0 0 0 24-24"
          opacity={0.2}
        />
        <Path d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M80 192l12-16h72l12 16Zm144 0h-28l-19.2-25.6A16.07 16.07 0 0 0 164 160H92a16.07 16.07 0 0 0-12.8 6.4L60 192H32V64h192zM176 80H80a32 32 0 0 0 0 64h96a32 32 0 0 0 0-64m-27.7 16a31.92 31.92 0 0 0 0 32h-40.6a31.92 31.92 0 0 0 0-32ZM64 112a16 16 0 1 1 16 16 16 16 0 0 1-16-16m112 16a16 16 0 1 1 16-16 16 16 0 0 1-16 16" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCassetteTapeDuotone))
export { Memo as IconCassetteTapeDuotone }
