/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsOutLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M214 48v48a6 6 0 0 1-12 0V62.48l-45.76 45.76a6 6 0 0 1-8.48-8.48L193.52 54H160a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6M99.76 147.76 54 193.52V160a6 6 0 0 0-12 0v48a6 6 0 0 0 6 6h48a6 6 0 0 0 0-12H62.48l45.76-45.76a6 6 0 0 0-8.48-8.48M208 154a6 6 0 0 0-6 6v33.52l-45.76-45.76a6 6 0 0 0-8.48 8.48L193.52 202H160a6 6 0 0 0 0 12h48a6 6 0 0 0 6-6v-48a6 6 0 0 0-6-6M62.48 54H96a6 6 0 0 0 0-12H48a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0V62.48l45.76 45.76a6 6 0 0 0 8.48-8.48Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsOutLight))
export { Memo as IconArrowsOutLight }
