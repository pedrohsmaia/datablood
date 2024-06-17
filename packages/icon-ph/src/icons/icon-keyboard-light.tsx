/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconKeyboardLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M223.51 50h-191A14.51 14.51 0 0 0 18 64.49v127A14.51 14.51 0 0 0 32.49 206h191A14.51 14.51 0 0 0 238 191.51v-127A14.51 14.51 0 0 0 223.51 50M226 191.51a2.49 2.49 0 0 1-2.49 2.49h-191a2.49 2.49 0 0 1-2.51-2.49v-127A2.49 2.49 0 0 1 32.49 62h191a2.49 2.49 0 0 1 2.51 2.49ZM206 128a6 6 0 0 1-6 6H56a6 6 0 0 1 0-12h144a6 6 0 0 1 6 6m0-32a6 6 0 0 1-6 6H56a6 6 0 0 1 0-12h144a6 6 0 0 1 6 6M70 160a6 6 0 0 1-6 6h-8a6 6 0 0 1 0-12h8a6 6 0 0 1 6 6m96 0a6 6 0 0 1-6 6H96a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m40 0a6 6 0 0 1-6 6h-8a6 6 0 0 1 0-12h8a6 6 0 0 1 6 6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconKeyboardLight))
export { Memo as IconKeyboardLight }
