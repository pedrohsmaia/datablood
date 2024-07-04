/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGitBranchBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M228 64a36 36 0 1 0-48 33.94V104a12 12 0 0 1-12 12H96a35.88 35.88 0 0 0-12 2.06V97.94a36 36 0 1 0-24 0v60.12a36 36 0 1 0 24 0V152a12 12 0 0 1 12-12h72a36 36 0 0 0 36-36v-6.06A36.07 36.07 0 0 0 228 64M72 52a12 12 0 1 1-12 12 12 12 0 0 1 12-12m0 152a12 12 0 1 1 12-12 12 12 0 0 1-12 12M192 76a12 12 0 1 1 12-12 12 12 0 0 1-12 12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGitBranchBold))
export { Memo as IconGitBranchBold }
