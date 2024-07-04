/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCopyrightFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 56a72 72 0 1 0 72 72 72.08 72.08 0 0 0-72-72m0 104a31.8 31.8 0 0 0 25.61-12.8 8 8 0 1 1 12.79 9.61 48 48 0 1 1 0-57.63 8 8 0 1 1-12.79 9.61A32 32 0 1 0 128 160m0-136a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCopyrightFill))
export { Memo as IconCopyrightFill }
