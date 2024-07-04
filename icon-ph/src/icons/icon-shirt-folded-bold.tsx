/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconShirtFoldedBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 44h-23l-12.51-12.49a12 12 0 0 0-8.22-3.51h-57.1a12 12 0 0 0-7.66 3.47L79 44H56a20 20 0 0 0-20 20v152a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20M96 61l1.48-1.48L112.92 86 96 102.48Zm32 3.21L120.89 52h14.22ZM160 61v41.51L143.08 86l15.44-26.47ZM60 68h12v44a20 20 0 0 0 34.08 14.21l9.92-9.71V212H60Zm136 144h-56v-95.5l9.92 9.69A20 20 0 0 0 184 112V68h12Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconShirtFoldedBold))
export { Memo as IconShirtFoldedBold }
