/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMedalLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M214 96a86 86 0 1 0-140 66.87V240a6 6 0 0 0 2.85 5.1 5.93 5.93 0 0 0 3.15.9 6 6 0 0 0 2.68-.63L128 222.71l45.33 22.66A6 6 0 0 0 182 240v-77.13A85.87 85.87 0 0 0 214 96M54 96a74 74 0 1 1 74 74 74.09 74.09 0 0 1-74-74m116 134.29-39.33-19.66a6 6 0 0 0-5.36 0L86 230.29V171a85.75 85.75 0 0 0 84 0ZM128 150a54 54 0 1 0-54-54 54.06 54.06 0 0 0 54 54m0-96a42 42 0 1 1-42 42 42 42 0 0 1 42-42"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMedalLight))
export { Memo as IconMedalLight }
