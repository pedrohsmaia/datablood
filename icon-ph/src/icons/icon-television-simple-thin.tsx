/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTelevisionSimpleThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 68h-78.34l41.17-41.17a4 4 0 1 0-5.66-5.66L128 66.34 82.83 21.17a4 4 0 0 0-5.66 5.66L118.34 68H40a12 12 0 0 0-12 12v120a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V80a12 12 0 0 0-12-12m4 132a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTelevisionSimpleThin))
export { Memo as IconTelevisionSimpleThin }
