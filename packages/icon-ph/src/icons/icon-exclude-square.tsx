/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconExcludeSquare = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 160V96a8 8 0 0 0-8-8h-48V40a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v120a8 8 0 0 0 8 8h48v48a8 8 0 0 0 8 8h120a8 8 0 0 0 8-8zm-60.69 48-40-40h33.38l40 40ZM48 59.31l40 40v33.38l-40-40ZM92.69 48l40 40H99.31l-40-40ZM104 152v-48h48v48Zm64 4.69v-33.38l40 40v33.38Zm40-16L171.31 104H208Zm-56-56L115.31 48H152ZM48 115.31 84.69 152H48Zm56 56L140.69 208H104Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconExcludeSquare))
export { Memo as IconExcludeSquare }
