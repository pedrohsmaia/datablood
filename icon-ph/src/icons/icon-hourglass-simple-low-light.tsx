/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHourglassSimpleLowLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m209.8 198-73.12-70 73.12-70 .09-.09A14 14 0 0 0 200 34H56a14 14 0 0 0-9.9 23.9l.09.09 73.12 70L46.2 198l-.09.09A14 14 0 0 0 56 222h144a14 14 0 0 0 9.9-23.9ZM54.56 49.38A2 2 0 0 1 56 46h144a2 2 0 0 1 1.45 3.38L128 119.69ZM128 136.31 163.19 170H92.81Zm73.84 72.46A1.91 1.91 0 0 1 200 210H56a2 2 0 0 1-1.45-3.38L80.28 182h95.44l25.72 24.62a1.91 1.91 0 0 1 .4 2.15"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconHourglassSimpleLowLight))
export { Memo as IconHourglassSimpleLowLight }
