/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowElbowLeftUpThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M228 192a4 4 0 0 1-4 4H80a4 4 0 0 1-4-4V57.66L34.83 98.83a4 4 0 0 1-5.66-5.66l48-48a4 4 0 0 1 5.66 0l48 48a4 4 0 0 1-5.66 5.66L84 57.66V188h140a4 4 0 0 1 4 4"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowElbowLeftUpThin))
export { Memo as IconArrowElbowLeftUpThin }
