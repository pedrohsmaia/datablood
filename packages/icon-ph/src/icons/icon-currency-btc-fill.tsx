/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrencyBtcFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M168 152a24 24 0 0 1-24 24h-40v-48h40a24 24 0 0 1 24 24m64-24A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-48 24a40 40 0 0 0-17.63-33.15A32 32 0 0 0 152 65v-9a8 8 0 0 0-16 0v8h-16v-8a8 8 0 0 0-16 0v8H88a8 8 0 0 0 0 16v96a8 8 0 0 0 0 16h16v8a8 8 0 0 0 16 0v-8h16v8a8 8 0 0 0 16 0v-8.81A40.05 40.05 0 0 0 184 152m-24-56a16 16 0 0 0-16-16h-40v32h40a16 16 0 0 0 16-16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCurrencyBtcFill))
export { Memo as IconCurrencyBtcFill }
