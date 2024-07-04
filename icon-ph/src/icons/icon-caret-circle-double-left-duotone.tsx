/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCaretCircleDoubleLeftDuotone = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <G fill="currentColor">
        <Path
          d="M195.88 195.88a96 96 0 1 1 0-135.76 96 96 0 0 1 0 135.76"
          opacity={0.2}
        />
        <Path d="M201.54 54.46A104 104 0 0 0 54.46 201.54 104 104 0 0 0 201.54 54.46m-11.31 135.77a88 88 0 1 1 0-124.46 88.11 88.11 0 0 1 0 124.46m-16.57-88.57L147.31 128l26.35 26.34a8 8 0 0 1-11.32 11.32l-32-32a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 11.32m-56 0L91.31 128l26.35 26.34a8 8 0 0 1-11.32 11.32l-32-32a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 11.32" />
      </G>
    </Svg>
  )
}
const Memo = memo(themed(IconCaretCircleDoubleLeftDuotone))
export { Memo as IconCaretCircleDoubleLeftDuotone }
