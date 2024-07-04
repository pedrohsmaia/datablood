/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberOneBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M148 48v160a12 12 0 0 1-24 0V69.19l-21.83 13.1a12 12 0 0 1-12.34-20.58l40-24A12 12 0 0 1 148 48"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberOneBold))
export { Memo as IconNumberOneBold }
