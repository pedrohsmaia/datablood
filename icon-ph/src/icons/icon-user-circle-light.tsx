/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconUserCircleLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26M71.44 198a66 66 0 0 1 113.12 0 89.8 89.8 0 0 1-113.12 0M94 120a34 34 0 1 1 34 34 34 34 0 0 1-34-34m99.51 69.64a77.53 77.53 0 0 0-40-31.38 46 46 0 1 0-51 0 77.53 77.53 0 0 0-40 31.38 90 90 0 1 1 131 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconUserCircleLight))
export { Memo as IconUserCircleLight }
