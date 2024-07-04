/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHashStraightLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 154h-50v-52h50a6 6 0 0 0 0-12h-50V40a6 6 0 0 0-12 0v50h-52V40a6 6 0 0 0-12 0v50H40a6 6 0 0 0 0 12h50v52H40a6 6 0 0 0 0 12h50v50a6 6 0 0 0 12 0v-50h52v50a6 6 0 0 0 12 0v-50h50a6 6 0 0 0 0-12m-114 0v-52h52v52Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconHashStraightLight))
export { Memo as IconHashStraightLight }
