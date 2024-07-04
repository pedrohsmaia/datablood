/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGitCommitDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path d="M176 128a48 48 0 1 1-48-48 48 48 0 0 1 48 48" opacity={0.2} />
        <Path d="M248 120h-64.58a56 56 0 0 0-110.84 0H8a8 8 0 0 0 0 16h64.58a56 56 0 0 0 110.84 0H248a8 8 0 0 0 0-16m-120 48a40 40 0 1 1 40-40 40 40 0 0 1-40 40" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconGitCommitDuotone))
export { Memo as IconGitCommitDuotone }
