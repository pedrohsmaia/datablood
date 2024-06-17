/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCellSignalXThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M210.83 197.17a4 4 0 0 1-5.66 5.66L184 181.66l-21.17 21.17a4 4 0 0 1-5.66-5.66L178.34 176l-21.17-21.17a4 4 0 0 1 5.66-5.66L184 170.34l21.17-21.17a4 4 0 0 1 5.66 5.66L189.66 176ZM160 124a4 4 0 0 0 4-4V72a4 4 0 0 0-8 0v48a4 4 0 0 0 4 4m40 0a4 4 0 0 0 4-4V32a4 4 0 0 0-8 0v88a4 4 0 0 0 4 4m-80-16a4 4 0 0 0-4 4v88a4 4 0 0 0 8 0v-88a4 4 0 0 0-4-4m-40 40a4 4 0 0 0-4 4v48a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4m-40 40a4 4 0 0 0-4 4v8a4 4 0 0 0 8 0v-8a4 4 0 0 0-4-4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCellSignalXThin))
export { Memo as IconCellSignalXThin }
