/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowFatLineRightThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m234.83 125.17-96-96A4 4 0 0 0 132 32v44H72a4 4 0 0 0-4 4v96a4 4 0 0 0 4 4h60v44a4 4 0 0 0 2.47 3.7 4 4 0 0 0 4.36-.87l96-96a4 4 0 0 0 0-5.66M140 214.34V176a4 4 0 0 0-4-4H76V84h60a4 4 0 0 0 4-4V41.66L226.34 128ZM44 80v96a4 4 0 0 1-8 0V80a4 4 0 0 1 8 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowFatLineRightThin))
export { Memo as IconArrowFatLineRightThin }
