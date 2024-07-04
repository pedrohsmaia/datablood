/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrencyGbpFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m40 168H80a8 8 0 0 1 0-16h4a20 20 0 0 0 20-20v-20H80a8 8 0 0 1 0-16h24V96a40 40 0 0 1 60-34.64 8 8 0 1 1-8 13.85A24 24 0 0 0 120 96v24h24a8 8 0 0 1 0 16h-24v20a35.79 35.79 0 0 1-6.08 20H168a8 8 0 0 1 0 16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCurrencyGbpFill))
export { Memo as IconCurrencyGbpFill }
