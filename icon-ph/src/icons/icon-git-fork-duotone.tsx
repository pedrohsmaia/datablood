/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGitForkDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M88 64a24 24 0 1 1-24-24 24 24 0 0 1 24 24m104-24a24 24 0 1 0 24 24 24 24 0 0 0-24-24"
          opacity={0.2}
        />
        <Path d="M224 64a32 32 0 1 0-40 31v9a16 16 0 0 1-16 16H88a16 16 0 0 1-16-16v-9a32 32 0 1 0-16 0v9a32 32 0 0 0 32 32h32v25a32 32 0 1 0 16 0v-25h32a32 32 0 0 0 32-32v-9a32.06 32.06 0 0 0 24-31M48 64a16 16 0 1 1 16 16 16 16 0 0 1-16-16m96 128a16 16 0 1 1-16-16 16 16 0 0 1 16 16m48-112a16 16 0 1 1 16-16 16 16 0 0 1-16 16" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconGitForkDuotone))
export { Memo as IconGitForkDuotone }
