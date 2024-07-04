/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCellSignalLowBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M92 152v48a12 12 0 0 1-24 0v-48a12 12 0 0 1 24 0m-52 28a12 12 0 0 0-12 12v8a12 12 0 0 0 24 0v-8a12 12 0 0 0-12-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCellSignalLowBold))
export { Memo as IconCellSignalLowBold }
