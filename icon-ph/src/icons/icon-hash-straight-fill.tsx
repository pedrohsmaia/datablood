/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconHashStraightFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M112 112h32v32h-32Zm112-64v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-64 96v-32h32a8 8 0 0 0 0-16h-32V64a8 8 0 0 0-16 0v32h-32V64a8 8 0 0 0-16 0v32H64a8 8 0 0 0 0 16h32v32H64a8 8 0 0 0 0 16h32v32a8 8 0 0 0 16 0v-32h32v32a8 8 0 0 0 16 0v-32h32a8 8 0 0 0 0-16Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconHashStraightFill))
export { Memo as IconHashStraightFill }
