/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPathBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 164a36.07 36.07 0 0 0-33.94 24H72a28 28 0 0 1 0-56h96a44 44 0 0 0 0-88H72a12 12 0 0 0 0 24h96a20 20 0 0 1 0 40H72a52 52 0 0 0 0 104h94.06A36 36 0 1 0 200 164m0 48a12 12 0 1 1 12-12 12 12 0 0 1-12 12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPathBold))
export { Memo as IconPathBold }
