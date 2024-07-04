/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowRightThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m218.83 130.83-72 72a4 4 0 0 1-5.66-5.66L206.34 132H40a4 4 0 0 1 0-8h166.34l-65.17-65.17a4 4 0 0 1 5.66-5.66l72 72a4 4 0 0 1 0 5.66"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowRightThin))
export { Memo as IconArrowRightThin }
