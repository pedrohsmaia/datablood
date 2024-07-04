/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStackSimpleBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m10.05 110.42 112 64a12 12 0 0 0 11.9 0l112-64a12 12 0 0 0 0-20.84l-112-64a12 12 0 0 0-11.9 0l-112 64a12 12 0 0 0 0 20.84m118-60.6L215.81 100 128 150.18 40.19 100Zm122.42 92.23a12 12 0 0 1-4.47 16.37l-112 64a12 12 0 0 1-11.9 0l-112-64A12 12 0 1 1 22 137.58l106 60.6 106-60.6a12 12 0 0 1 16.42 4.47Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconStackSimpleBold))
export { Memo as IconStackSimpleBold }
