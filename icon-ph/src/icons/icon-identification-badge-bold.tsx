/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconIdentificationBadgeBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20m-4 192H60V44h136ZM84 68a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12m8.8 127.37a48 48 0 0 1 70.4 0 12 12 0 0 0 17.6-16.32 72 72 0 0 0-19.21-14.68 44 44 0 1 0-67.19 0 72.12 72.12 0 0 0-19.2 14.68 12 12 0 0 0 17.6 16.32M128 116a20 20 0 1 1-20 20 20 20 0 0 1 20-20"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconIdentificationBadgeBold))
export { Memo as IconIdentificationBadgeBold }
