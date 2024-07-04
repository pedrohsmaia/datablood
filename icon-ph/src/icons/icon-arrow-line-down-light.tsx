/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowLineDownLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M51.76 116.24a6 6 0 0 1 8.48-8.48L122 169.51V32a6 6 0 0 1 12 0v137.51l61.76-61.75a6 6 0 0 1 8.48 8.48l-72 72a6 6 0 0 1-8.48 0ZM216 210H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowLineDownLight))
export { Memo as IconArrowLineDownLight }
