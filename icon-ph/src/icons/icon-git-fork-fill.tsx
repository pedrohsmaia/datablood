/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGitForkFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 64a32 32 0 1 0-40 31v9a16 16 0 0 1-16 16H88a16 16 0 0 1-16-16v-9a32 32 0 1 0-16 0v9a32 32 0 0 0 32 32h32v25a32 32 0 1 0 16 0v-25h32a32 32 0 0 0 32-32v-9a32.06 32.06 0 0 0 24-31m-80 128a16 16 0 1 1-16-16 16 16 0 0 1 16 16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGitForkFill))
export { Memo as IconGitForkFill }
