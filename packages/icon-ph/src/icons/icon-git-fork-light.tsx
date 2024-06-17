/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGitForkLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M222 64a30 30 0 1 0-36 29.4V104a18 18 0 0 1-18 18H88a18 18 0 0 1-18-18V93.4a30 30 0 1 0-12 0V104a30 30 0 0 0 30 30h34v28.6a30 30 0 1 0 12 0V134h34a30 30 0 0 0 30-30V93.4A30.05 30.05 0 0 0 222 64M46 64a18 18 0 1 1 18 18 18 18 0 0 1-18-18m100 128a18 18 0 1 1-18-18 18 18 0 0 1 18 18m46-110a18 18 0 1 1 18-18 18 18 0 0 1-18 18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGitForkLight))
export { Memo as IconGitForkLight }
