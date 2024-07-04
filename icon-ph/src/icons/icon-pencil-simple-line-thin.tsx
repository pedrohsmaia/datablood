/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPencilSimpleLineThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224.49 76.2 179.8 31.51a12 12 0 0 0-17 0L39.51 154.83a12 12 0 0 0-3.51 8.48V208a12 12 0 0 0 12 12h168a4 4 0 0 0 0-8H105.66L224.49 93.17a12 12 0 0 0 0-16.97M94.34 212H48a4 4 0 0 1-4-4v-44.69a4 4 0 0 1 1.17-2.82L136 69.66 186.35 120ZM218.83 87.51 192 114.34 141.66 64l26.83-26.83a4 4 0 0 1 5.66 0l44.68 44.69a4 4 0 0 1 0 5.65"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPencilSimpleLineThin))
export { Memo as IconPencilSimpleLineThin }
