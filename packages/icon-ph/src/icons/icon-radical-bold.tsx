/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRadicalBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M244 72v24a12 12 0 0 1-24 0V84h-91.68L83.24 204.21a12 12 0 0 1-22.47 0l-48-128a12 12 0 1 1 22.47-8.43l36.76 98 36.77-98A12 12 0 0 1 120 60h112a12 12 0 0 1 12 12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRadicalBold))
export { Memo as IconRadicalBold }
