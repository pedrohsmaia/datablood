/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAirplayBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M137.11 152.19a12 12 0 0 0-18.22 0l-48 56A12 12 0 0 0 80 228h96a12 12 0 0 0 9.11-19.81Zm-31 51.81L128 178.44 149.91 204ZM236 64v112a28 28 0 0 1-28 28 12 12 0 0 1 0-24 4 4 0 0 0 4-4V64a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v112a4 4 0 0 0 4 4 12 12 0 0 1 0 24 28 28 0 0 1-28-28V64a28 28 0 0 1 28-28h160a28 28 0 0 1 28 28"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAirplayBold))
export { Memo as IconAirplayBold }
