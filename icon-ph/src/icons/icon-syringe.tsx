/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSyringe = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m237.66 66.34-48-48a8 8 0 0 0-11.32 11.32L196.69 48 168 76.69l-34.34-34.35a8 8 0 0 0-11.32 11.32l6.35 6.34-84 84A15.86 15.86 0 0 0 40 155.31v49.38l-21.66 21.65a8 8 0 0 0 11.32 11.32L51.31 216h49.38a15.86 15.86 0 0 0 11.31-4.69l84-84 6.34 6.35a8 8 0 0 0 11.32-11.32L179.31 88 208 59.31l18.34 18.35a8 8 0 0 0 11.32-11.32M100.69 200H56v-44.69l18-18 20.34 20.35a8 8 0 0 0 11.32-11.32L85.31 126 98 113.31l20.34 20.35a8 8 0 0 0 11.32-11.32L109.31 102 140 71.31 184.69 116Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSyringe))
export { Memo as IconSyringe }
