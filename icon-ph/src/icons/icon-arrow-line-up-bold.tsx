/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowLineUpBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208.49 143.51a12 12 0 0 1-17 17L140 109v115a12 12 0 0 1-24 0V109l-51.51 51.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0ZM216 28H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowLineUpBold))
export { Memo as IconArrowLineUpBold }
