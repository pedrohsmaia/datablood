/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCellSignalLowLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M86 152v48a6 6 0 0 1-12 0v-48a6 6 0 0 1 12 0m-46 34a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0v-8a6 6 0 0 0-6-6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCellSignalLowLight))
export { Memo as IconCellSignalLowLight }
