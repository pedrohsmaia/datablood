/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowElbowLeftLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m236.24 100.24-96 96a6 6 0 0 1-8.48 0L30 94.48V152a6 6 0 0 1-12 0V80a6 6 0 0 1 6-6h72a6 6 0 0 1 0 12H38.48L136 183.51l91.76-91.75a6 6 0 0 1 8.48 8.48"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowElbowLeftLight))
export { Memo as IconArrowElbowLeftLight }
