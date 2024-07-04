/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconKeyboardThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M223.51 52h-191A12.5 12.5 0 0 0 20 64.49v127A12.5 12.5 0 0 0 32.49 204h191A12.5 12.5 0 0 0 236 191.51v-127A12.5 12.5 0 0 0 223.51 52M228 191.51a4.49 4.49 0 0 1-4.49 4.49h-191a4.49 4.49 0 0 1-4.51-4.49v-127A4.49 4.49 0 0 1 32.49 60h191a4.49 4.49 0 0 1 4.51 4.49ZM204 128a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4m0-32a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4M68 160a4 4 0 0 1-4 4h-8a4 4 0 0 1 0-8h8a4 4 0 0 1 4 4m96 0a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m40 0a4 4 0 0 1-4 4h-8a4 4 0 0 1 0-8h8a4 4 0 0 1 4 4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconKeyboardThin))
export { Memo as IconKeyboardThin }
