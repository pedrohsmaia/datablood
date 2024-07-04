/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrencyBtcThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M162.27 117.21A40 40 0 0 0 140 44V24a4 4 0 0 0-8 0v20h-24V24a4 4 0 0 0-8 0v20H64a4 4 0 0 0 0 8h12v144H64a4 4 0 0 0 0 8h36v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h12a44 44 0 0 0 10.27-86.79M84 52h56a32 32 0 0 1 0 64H84Zm68 144H84v-72h68a36 36 0 0 1 0 72"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCurrencyBtcThin))
export { Memo as IconCurrencyBtcThin }
