/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPercentThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m202.83 58.81-144 144a4 4 0 0 1-5.66-5.66l144-144a4 4 0 1 1 5.66 5.65ZM53.37 98.62A32 32 0 1 1 76 108a31.82 31.82 0 0 1-22.63-9.38M52 76a24 24 0 1 0 7-17 23.85 23.85 0 0 0-7 17m160 104a32 32 0 1 1-9.37-22.63A31.82 31.82 0 0 1 212 180m-8 0a24 24 0 1 0-7 17 23.89 23.89 0 0 0 7-17"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPercentThin))
export { Memo as IconPercentThin }
