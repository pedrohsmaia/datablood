/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconShoppingBagOpenBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 24v16H44V60ZM44 196v-96h168v96Zm136-72a52 52 0 0 1-104 0 12 12 0 0 1 24 0 28 28 0 0 0 56 0 12 12 0 0 1 24 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconShoppingBagOpenBold))
export { Memo as IconShoppingBagOpenBold }
