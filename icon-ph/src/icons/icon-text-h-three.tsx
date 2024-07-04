/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTextHThree = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M152 56v120a8 8 0 0 1-16 0v-52H48v52a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0v52h88V56a8 8 0 0 1 16 0m73.52 90.63 21-30A8 8 0 0 0 240 104h-48a8 8 0 0 0 0 16h32.63l-19.18 27.41A8 8 0 0 0 212 160a20 20 0 1 1-14.29 34 8 8 0 1 0-11.42 11.19A36 36 0 0 0 248 180a36.07 36.07 0 0 0-22.48-33.37"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTextHThree))
export { Memo as IconTextHThree }
