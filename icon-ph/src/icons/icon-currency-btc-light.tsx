/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrencyBtcLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M166.69 116.41A42 42 0 0 0 142 42.05V24a6 6 0 0 0-12 0v18h-20V24a6 6 0 0 0-12 0v18H64a6 6 0 0 0 0 12h10v140H64a6 6 0 0 0 0 12h34v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h10a46 46 0 0 0 14.69-89.59M170 84a30 30 0 0 1-30 30H86V54h54a30 30 0 0 1 30 30m-18 110H86v-68h66a34 34 0 0 1 0 68"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCurrencyBtcLight))
export { Memo as IconCurrencyBtcLight }
