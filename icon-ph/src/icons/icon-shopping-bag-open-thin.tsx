/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconShoppingBagOpenThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M40 52h176a4 4 0 0 1 4 4v20H36V56a4 4 0 0 1 4-4m176 152H40a4 4 0 0 1-4-4V84h184v116a4 4 0 0 1-4 4m-44-92a44 44 0 0 1-88 0 4 4 0 0 1 8 0 36 36 0 0 0 72 0 4 4 0 0 1 8 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconShoppingBagOpenThin))
export { Memo as IconShoppingBagOpenThin }
