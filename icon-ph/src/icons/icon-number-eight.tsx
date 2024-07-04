/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberEight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M155.55 119.27a48 48 0 1 0-55.1 0 56 56 0 1 0 55.1 0M96 80a32 32 0 1 1 32 32 32 32 0 0 1-32-32m32 128a40 40 0 1 1 40-40 40 40 0 0 1-40 40"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberEight))
export { Memo as IconNumberEight }
