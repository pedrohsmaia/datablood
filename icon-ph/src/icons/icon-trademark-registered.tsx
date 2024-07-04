/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTrademarkRegistered = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88m23.09-75.79A32 32 0 0 0 136 80h-32a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0v-24h22.39l19 28.44a8 8 0 0 0 13.32-8.88ZM112 96h24a16 16 0 0 1 0 32h-24Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTrademarkRegistered))
export { Memo as IconTrademarkRegistered }
