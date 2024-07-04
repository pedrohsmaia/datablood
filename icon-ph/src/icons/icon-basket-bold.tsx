/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBasketBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M140 128v40a12 12 0 0 1-24 0v-40a12 12 0 0 1 24 0m103.82-29.36-13.82 104A20.06 20.06 0 0 1 210.13 220H45.87A20.07 20.07 0 0 1 26 202.65l-13.86-104A20 20 0 0 1 32 76h34.55L119 16.1a12 12 0 0 1 18.06 0L189.45 76H224a20 20 0 0 1 19.81 22.64ZM98.45 76h59.11L128 42.22Zm121 24H36.57l12.8 96h157.26Zm-51.37 26.81-4 40a12 12 0 0 0 10.75 13.13c.4 0 .81.06 1.21.06a12 12 0 0 0 11.92-10.81l4-40a12 12 0 1 0-23.88-2.38m-80.12 0a12 12 0 0 0-23.88 2.38l4 40A12 12 0 0 0 80 180c.39 0 .8 0 1.2-.06a12 12 0 0 0 10.75-13.13Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBasketBold))
export { Memo as IconBasketBold }
