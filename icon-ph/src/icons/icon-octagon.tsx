/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconOctagon = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m227.31 80.24-51.55-51.55A15.86 15.86 0 0 0 164.45 24h-72.9a15.86 15.86 0 0 0-11.31 4.69L28.69 80.24A15.86 15.86 0 0 0 24 91.55v72.9a15.86 15.86 0 0 0 4.69 11.31l51.55 51.55A15.86 15.86 0 0 0 91.55 232h72.9a15.86 15.86 0 0 0 11.31-4.69l51.55-51.55a15.86 15.86 0 0 0 4.69-11.31v-72.9a15.86 15.86 0 0 0-4.69-11.31M216 164.45 164.45 216h-72.9L40 164.45v-72.9L91.55 40h72.9L216 91.55Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconOctagon))
export { Memo as IconOctagon }
