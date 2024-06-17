/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGitForkThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M220 64a28 28 0 1 0-32 27.71V104a20 20 0 0 1-20 20H88a20 20 0 0 1-20-20V91.71a28 28 0 1 0-8 0V104a28 28 0 0 0 28 28h36v32.29a28 28 0 1 0 8 0V132h36a28 28 0 0 0 28-28V91.71A28 28 0 0 0 220 64M44 64a20 20 0 1 1 20 20 20 20 0 0 1-20-20m104 128a20 20 0 1 1-20-20 20 20 0 0 1 20 20m44-108a20 20 0 1 1 20-20 20 20 0 0 1-20 20"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGitForkThin))
export { Memo as IconGitForkThin }
