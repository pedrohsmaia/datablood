/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLockThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 84h-36V56a44 44 0 0 0-88 0v28H48a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12M92 56a36 36 0 0 1 72 0v28H92Zm120 152a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-76-56a8 8 0 1 1-8-8 8 8 0 0 1 8 8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconLockThin))
export { Memo as IconLockThin }
