/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCellSignalNoneLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M46 192v8a6 6 0 0 1-12 0v-8a6 6 0 0 1 12 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCellSignalNoneLight))
export { Memo as IconCellSignalNoneLight }
