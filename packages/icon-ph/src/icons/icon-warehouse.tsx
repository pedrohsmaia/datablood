/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWarehouse = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M240 184h-8V57.9l9.67-2.08a8 8 0 1 0-3.35-15.64l-224 48A8 8 0 0 0 16 104a8.16 8.16 0 0 0 1.69-.18l6.31-1.35V184h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M40 99l176-37.67V184h-24v-56a8 8 0 0 0-8-8H72a8 8 0 0 0-8 8v56H40Zm136 53H80v-16h96Zm-96 16h96v16H80Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconWarehouse))
export { Memo as IconWarehouse }
