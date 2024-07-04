/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCellSignalNoneDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M198.12 25.23a16 16 0 0 0-17.43 3.47l-160 160A16 16 0 0 0 32 216h160a16 16 0 0 0 16-16V40a16 16 0 0 0-9.88-14.77M192 200H32L192 40Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCellSignalNoneDuotone))
export { Memo as IconCellSignalNoneDuotone }
