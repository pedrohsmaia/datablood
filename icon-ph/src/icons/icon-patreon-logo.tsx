/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPatreonLogo = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M176 40a64 64 0 1 0 64 64 64.07 64.07 0 0 0-64-64m0 112a48 48 0 1 1 48-48 48.05 48.05 0 0 1-48 48M80 40H64a16 16 0 0 0-16 16v152a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 168H64V56h16z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPatreonLogo))
export { Memo as IconPatreonLogo }
