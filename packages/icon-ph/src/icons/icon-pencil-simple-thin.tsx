/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPencilSimpleThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224.49 76.2 179.8 31.51a12 12 0 0 0-17 0l-29.63 29.66-93.65 93.66a11.9 11.9 0 0 0-3.52 8.48V208a12 12 0 0 0 12 12h44.69a12 12 0 0 0 8.48-3.51L224.48 93.17a12 12 0 0 0 0-17Zm-129 134.63a4 4 0 0 1-2.8 1.17H48a4 4 0 0 1-4-4v-44.69a4 4 0 0 1 1.17-2.83L136 69.65 186.34 120ZM218.83 87.51 192 114.34 141.66 64l26.82-26.83a4 4 0 0 1 5.66 0l44.69 44.68a4 4 0 0 1 0 5.66"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPencilSimpleThin))
export { Memo as IconPencilSimpleThin }
