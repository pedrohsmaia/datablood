/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGitBranchLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M222 64a30 30 0 1 0-36 29.4V104a18 18 0 0 1-18 18H96a29.82 29.82 0 0 0-18 6V93.4a30 30 0 1 0-12 0v69.2a30 30 0 1 0 12 0V152a18 18 0 0 1 18-18h72a30 30 0 0 0 30-30V93.4A30.05 30.05 0 0 0 222 64M54 64a18 18 0 1 1 18 18 18 18 0 0 1-18-18m36 128a18 18 0 1 1-18-18 18 18 0 0 1 18 18M192 82a18 18 0 1 1 18-18 18 18 0 0 1-18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGitBranchLight))
export { Memo as IconGitBranchLight }
