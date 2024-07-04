/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowLineDownThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M53.17 114.83a4 4 0 0 1 5.66-5.66L124 174.34V32a4 4 0 0 1 8 0v142.34l65.17-65.17a4 4 0 1 1 5.66 5.66l-72 72a4 4 0 0 1-5.66 0ZM216 212H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowLineDownThin))
export { Memo as IconArrowLineDownThin }
