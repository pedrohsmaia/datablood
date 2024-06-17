/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconImagesDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M224 56v82.06l-23.72-23.72a8 8 0 0 0-11.31 0L163.31 140l-49.65-49.66a8 8 0 0 0-11.32 0L64 128.69V56a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8"
          opacity={0.2}
        />
        <Path d="M216 40H72a16 16 0 0 0-16 16v16H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M72 56h144v62.75l-10.07-10.06a16 16 0 0 0-22.63 0l-20 20-44-44a16 16 0 0 0-22.62 0L72 109.37Zm112 144H40V88h16v80a16 16 0 0 0 16 16h112Zm32-32H72v-36l36-36 49.66 49.66a8 8 0 0 0 11.31 0L194.63 120 216 141.38zm-56-84a12 12 0 1 1 12 12 12 12 0 0 1-12-12" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconImagesDuotone))
export { Memo as IconImagesDuotone }
