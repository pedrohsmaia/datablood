/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGitPullRequestLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M102 64a30 30 0 1 0-36 29.4v69.2a30 30 0 1 0 12 0V93.4A30.05 30.05 0 0 0 102 64m-48 0a18 18 0 1 1 18 18 18 18 0 0 1-18-18m36 128a18 18 0 1 1-18-18 18 18 0 0 1 18 18m116-29.4v-38.72a53.65 53.65 0 0 0-15.82-38.18L158.48 54H192a6 6 0 0 0 0-12h-48a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0V62.48l31.7 31.7a41.75 41.75 0 0 1 12.3 29.7v38.72a30 30 0 1 0 12 0m-6 47.4a18 18 0 1 1 18-18 18 18 0 0 1-18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGitPullRequestLight))
export { Memo as IconGitPullRequestLight }
