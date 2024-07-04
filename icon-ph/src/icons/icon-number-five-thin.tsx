/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberFiveThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M172 160a52 52 0 0 1-86.67 38.76 4 4 0 1 1 5.34-6 44 44 0 1 0 .84-66.33 4 4 0 0 1-6.51-3.79l15.09-75.42A4 4 0 0 1 104 44h64a4 4 0 0 1 0 8h-60.72l-12.51 62.53A52 52 0 0 1 172 160"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberFiveThin))
export { Memo as IconNumberFiveThin }
