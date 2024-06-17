/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconKeyhole = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88m0-144a40 40 0 0 0-28.28 68.28l-10.86 27.28A12 12 0 0 0 100 184h56a12 12 0 0 0 11.14-16.44l-10.86-27.28A40 40 0 0 0 128 72m11.31 68.9L150.1 168h-44.2l10.79-27.1a8 8 0 0 0-2.74-9.44 24 24 0 1 1 28.1 0 8 8 0 0 0-2.74 9.44m13 32.58"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconKeyhole))
export { Memo as IconKeyhole }
