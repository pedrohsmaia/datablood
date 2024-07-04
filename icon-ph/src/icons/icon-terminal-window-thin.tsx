/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTerminalWindowThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M122.5 124.88a4 4 0 0 1 0 6.24l-40 32a4 4 0 0 1-5-6.24L113.6 128 77.5 99.12a4 4 0 0 1 5-6.24ZM176 156h-40a4 4 0 0 0 0 8h40a4 4 0 0 0 0-8m52-100v144a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v144a4 4 0 0 0 4 4h176a4 4 0 0 0 4-4Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTerminalWindowThin))
export { Memo as IconTerminalWindowThin }
