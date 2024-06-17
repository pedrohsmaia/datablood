/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconScreencastThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M228 56v144a12 12 0 0 1-12 12h-72a4 4 0 0 1 0-8h72a4 4 0 0 0 4-4V56a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v40a4 4 0 0 1-8 0V56a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12M32 188a4 4 0 0 0 0 8 12 12 0 0 1 12 12 4 4 0 0 0 8 0 20 20 0 0 0-20-20m0-32a4 4 0 0 0 0 8 44.05 44.05 0 0 1 44 44 4 4 0 0 0 8 0 52.06 52.06 0 0 0-52-52m0-32a4 4 0 0 0 0 8 76.08 76.08 0 0 1 76 76 4 4 0 0 0 8 0 84.09 84.09 0 0 0-84-84"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconScreencastThin))
export { Memo as IconScreencastThin }
