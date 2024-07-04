/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTerminalWindowLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M126 128a6 6 0 0 1-2.25 4.69l-40 32a6 6 0 0 1-7.5-9.38L110.4 128l-34.15-27.31a6 6 0 1 1 7.5-9.38l40 32A6 6 0 0 1 126 128m50 26h-40a6 6 0 0 0 0 12h40a6 6 0 0 0 0-12m54-98v144a14 14 0 0 1-14 14H40a14 14 0 0 1-14-14V56a14 14 0 0 1 14-14h176a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v144a2 2 0 0 0 2 2h176a2 2 0 0 0 2-2Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTerminalWindowLight))
export { Memo as IconTerminalWindowLight }
