/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGitBranchThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M220 64a28 28 0 1 0-32 27.71V104a20 20 0 0 1-20 20H96a27.9 27.9 0 0 0-20 8.43V91.71a28 28 0 1 0-8 0v72.58a28 28 0 1 0 8 0V152a20 20 0 0 1 20-20h72a28 28 0 0 0 28-28V91.71A28 28 0 0 0 220 64M52 64a20 20 0 1 1 20 20 20 20 0 0 1-20-20m40 128a20 20 0 1 1-20-20 20 20 0 0 1 20 20M192 84a20 20 0 1 1 20-20 20 20 0 0 1-20 20"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGitBranchThin))
export { Memo as IconGitBranchThin }
