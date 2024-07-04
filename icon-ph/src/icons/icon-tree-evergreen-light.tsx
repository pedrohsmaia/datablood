/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTreeEvergreenLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M228.74 188.32 180.27 126H208a6 6 0 0 0 4.76-9.66l-80-104a6 6 0 0 0-9.52 0l-80 104A6 6 0 0 0 48 126h27.73l-48.47 62.32A6 6 0 0 0 32 198h90v42a6 6 0 0 0 12 0v-42h90a6 6 0 0 0 4.74-9.68M44.27 186l48.47-62.32A6 6 0 0 0 88 114H60.19L128 25.84 195.81 114H168a6 6 0 0 0-4.74 9.68L211.73 186Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTreeEvergreenLight))
export { Memo as IconTreeEvergreenLight }
