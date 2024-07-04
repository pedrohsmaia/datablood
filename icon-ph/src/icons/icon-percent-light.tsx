/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPercentLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m204.24 60.23-144 144a6 6 0 0 1-8.48-8.48l144-144a6 6 0 1 1 8.48 8.49ZM52 100a34 34 0 1 1 24 10 33.78 33.78 0 0 1-24-10m2-24a22 22 0 1 0 6.44-15.56A21.86 21.86 0 0 0 54 76m160 104a34 34 0 1 1-10-24 33.78 33.78 0 0 1 10 24m-12 0a21.87 21.87 0 0 0-6.44-15.56A22 22 0 1 0 202 180"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPercentLight))
export { Memo as IconPercentLight }
