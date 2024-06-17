/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAddressBookFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M160 112a24 24 0 1 1-24-24 24 24 0 0 1 24 24m64-72v176a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16v-24H32a8 8 0 0 1 0-16h16v-40H32a8 8 0 0 1 0-16h16V80H32a8 8 0 0 1 0-16h16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m-33.6 123.2a67.88 67.88 0 0 0-27.4-21.69 40 40 0 1 0-53.94 0A67.88 67.88 0 0 0 81.6 163.2a8 8 0 1 0 12.8 9.6 52 52 0 0 1 83.2 0 8 8 0 1 0 12.8-9.6"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAddressBookFill))
export { Memo as IconAddressBookFill }
