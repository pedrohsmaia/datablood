/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHashStraightThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M216 156h-52v-56h52a4 4 0 0 0 0-8h-52V40a4 4 0 0 0-8 0v52h-56V40a4 4 0 0 0-8 0v52H40a4 4 0 0 0 0 8h52v56H40a4 4 0 0 0 0 8h52v52a4 4 0 0 0 8 0v-52h56v52a4 4 0 0 0 8 0v-52h52a4 4 0 0 0 0-8m-116 0v-56h56v56Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconHashStraightThin))
export { Memo as IconHashStraightThin }
