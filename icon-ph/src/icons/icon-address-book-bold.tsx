/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAddressBookBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 20H64a20 20 0 0 0-20 20v20H32a12 12 0 0 0 0 24h12v32H32a12 12 0 0 0 0 24h12v32H32a12 12 0 0 0 0 24h12v20a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20m-4 192H68V44h136Zm-103.2-40.63a48 48 0 0 1 70.4 0 12 12 0 0 0 17.6-16.32 72 72 0 0 0-19.21-14.68 44 44 0 1 0-67.19 0 72.12 72.12 0 0 0-19.2 14.68 12 12 0 0 0 17.6 16.32M116 112a20 20 0 1 1 20 20 20 20 0 0 1-20-20"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAddressBookBold))
export { Memo as IconAddressBookBold }
