/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberEightLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M151.62 119.45a46 46 0 1 0-47.24 0 54 54 0 1 0 47.24 0M94 80a34 34 0 1 1 34 34 34 34 0 0 1-34-34m34 130a42 42 0 1 1 42-42 42 42 0 0 1-42 42"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberEightLight))
export { Memo as IconNumberEightLight }
