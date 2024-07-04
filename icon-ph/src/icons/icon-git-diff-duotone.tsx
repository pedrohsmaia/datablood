/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGitDiffDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M80 64a24 24 0 1 1-24-24 24 24 0 0 1 24 24m120 104a24 24 0 1 0 24 24 24 24 0 0 0-24-24"
          opacity={0.2}
        />
        <Path d="M112 152a8 8 0 0 0-8 8v28.69L75.72 160.4A39.71 39.71 0 0 1 64 132.12V95a32 32 0 1 0-16 0v37.13a55.67 55.67 0 0 0 16.4 39.6L92.69 200H64a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8M40 64a16 16 0 1 1 16 16 16 16 0 0 1-16-16m168 97v-37.12a55.67 55.67 0 0 0-16.4-39.6L163.31 56H192a8 8 0 0 0 0-16h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0V67.31l28.28 28.29A39.71 39.71 0 0 1 192 123.88V161a32 32 0 1 0 16 0m-8 47a16 16 0 1 1 16-16 16 16 0 0 1-16 16" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconGitDiffDuotone))
export { Memo as IconGitDiffDuotone }
