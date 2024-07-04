/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowFatRightThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m234.83 125.17-96-96A4 4 0 0 0 132 32v44H48a12 12 0 0 0-12 12v80a12 12 0 0 0 12 12h84v44a4 4 0 0 0 2.47 3.7 4 4 0 0 0 4.36-.87l96-96a4 4 0 0 0 0-5.66M140 214.34V176a4 4 0 0 0-4-4H48a4 4 0 0 1-4-4V88a4 4 0 0 1 4-4h88a4 4 0 0 0 4-4V41.66L226.34 128Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowFatRightThin))
export { Memo as IconArrowFatRightThin }
