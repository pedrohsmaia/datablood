/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStepsThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M244 56a4 4 0 0 1-4 4h-52v44a4 4 0 0 1-4 4h-52v44a4 4 0 0 1-4 4H76v44a4 4 0 0 1-4 4H16a4 4 0 0 1 0-8h52v-44a4 4 0 0 1 4-4h52v-44a4 4 0 0 1 4-4h52V56a4 4 0 0 1 4-4h56a4 4 0 0 1 4 4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconStepsThin))
export { Memo as IconStepsThin }
