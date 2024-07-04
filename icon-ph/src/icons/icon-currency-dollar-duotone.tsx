/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCurrencyDollarDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M192 168a40 40 0 0 1-40 40h-24v-80h24a40 40 0 0 1 40 40M112 48a40 40 0 0 0 0 80h16V48Z"
          opacity={0.2}
        />
        <Path d="M152 120h-16V56h8a32 32 0 0 1 32 32 8 8 0 0 0 16 0 48.05 48.05 0 0 0-48-48h-8V24a8 8 0 0 0-16 0v16h-8a48 48 0 0 0 0 96h8v64h-16a32 32 0 0 1-32-32 8 8 0 0 0-16 0 48.05 48.05 0 0 0 48 48h16v16a8 8 0 0 0 16 0v-16h16a48 48 0 0 0 0-96m-40 0a32 32 0 0 1 0-64h8v64Zm40 80h-16v-64h16a32 32 0 0 1 0 64" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCurrencyDollarDuotone))
export { Memo as IconCurrencyDollarDuotone }
