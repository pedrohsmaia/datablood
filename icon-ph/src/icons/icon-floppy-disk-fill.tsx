/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFloppyDiskFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M219.31 80 176 36.69A15.86 15.86 0 0 0 164.69 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V91.31A15.86 15.86 0 0 0 219.31 80M208 208h-24v-56a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v56H48V48h116.69L208 91.31ZM160 72a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h56a8 8 0 0 1 8 8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFloppyDiskFill))
export { Memo as IconFloppyDiskFill }
