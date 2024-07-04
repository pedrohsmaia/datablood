/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTaxiFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M240 112h-11.36l-27.39-47.94A16 16 0 0 0 187.36 56h-21.94l-12-29.94A15.93 15.93 0 0 0 138.58 16h-21.16a15.93 15.93 0 0 0-14.86 10.06L90.58 56H68.64a16 16 0 0 0-13.89 8.06L27.36 112H16a8 8 0 0 0 0 16h8v80a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-16h96v16a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-80h8a8 8 0 0 0 0-16M117.42 32h21.16l9.6 24h-40.36ZM80 160H64a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m112 0h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTaxiFill))
export { Memo as IconTaxiFill }
