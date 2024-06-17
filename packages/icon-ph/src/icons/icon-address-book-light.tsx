/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAddressBookLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M159.11 142.13a38 38 0 1 0-46.22 0A65.75 65.75 0 0 0 83.2 164.4a6 6 0 0 0 9.6 7.2 54 54 0 0 1 86.4 0 6 6 0 0 0 9.6-7.2 65.75 65.75 0 0 0-29.69-22.27M110 112a26 26 0 1 1 26 26 26 26 0 0 1-26-26m98-86H64a14 14 0 0 0-14 14v26H32a6 6 0 0 0 0 12h18v44H32a6 6 0 0 0 0 12h18v44H32a6 6 0 0 0 0 12h18v26a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14m2 190a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h144a2 2 0 0 1 2 2Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAddressBookLight))
export { Memo as IconAddressBookLight }
