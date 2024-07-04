/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberCircleEightLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90m18.57-94.46a30 30 0 1 0-37.14 0 34 34 0 1 0 37.14 0M110 100a18 18 0 1 1 18 18 18 18 0 0 1-18-18m18 74a22 22 0 1 1 22-22 22 22 0 0 1-22 22"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberCircleEightLight))
export { Memo as IconNumberCircleEightLight }
