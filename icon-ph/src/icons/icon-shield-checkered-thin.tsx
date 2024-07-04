/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconShieldCheckeredThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 44H48a12 12 0 0 0-12 12v58.77c0 86.87 73.54 115.7 88.28 120.59a11.68 11.68 0 0 0 3.7.62 11.68 11.68 0 0 0 3.7-.62c14.78-4.87 88.32-33.7 88.32-120.57V56a12 12 0 0 0-12-12m4 12v58.77c0 3.16-.12 6.22-.31 9.21H132V52h76a4 4 0 0 1 4 4M44 56a4 4 0 0 1 4-4h76v72H44.31c-.19-3-.31-6-.31-9.21Zm1.09 76H124v94.81C107 220.55 53.4 196 45.09 132M132 226.81V132h78.91C202.6 196 149 220.55 132 226.81"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconShieldCheckeredThin))
export { Memo as IconShieldCheckeredThin }
