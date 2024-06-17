/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTrademarkRegisteredFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M152 112a16 16 0 0 1-16 16h-24V96h24a16 16 0 0 1 16 16m80 16A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88 88.1 88.1 0 0 0 88-88m-16 0a72 72 0 1 1-72-72 72.08 72.08 0 0 1 72 72m-33.34 35.56-15.57-23.35A32 32 0 0 0 136 80h-32a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0v-24h22.39l19 28.44a8 8 0 0 0 13.32-8.88Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTrademarkRegisteredFill))
export { Memo as IconTrademarkRegisteredFill }
