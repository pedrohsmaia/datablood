/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsOutThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M212 48v48a4 4 0 0 1-8 0V57.66l-49.17 49.17a4 4 0 0 1-5.66-5.66L198.34 52H160a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4M101.17 149.17 52 198.34V160a4 4 0 0 0-8 0v48a4 4 0 0 0 4 4h48a4 4 0 0 0 0-8H57.66l49.17-49.17a4 4 0 0 0-5.66-5.66M208 156a4 4 0 0 0-4 4v38.34l-49.17-49.17a4 4 0 0 0-5.66 5.66L198.34 204H160a4 4 0 0 0 0 8h48a4 4 0 0 0 4-4v-48a4 4 0 0 0-4-4M57.66 52H96a4 4 0 0 0 0-8H48a4 4 0 0 0-4 4v48a4 4 0 0 0 8 0V57.66l49.17 49.17a4 4 0 0 0 5.66-5.66Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsOutThin))
export { Memo as IconArrowsOutThin }
