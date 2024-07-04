/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCodeSimple = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M93.31 70 28 128l65.27 58a8 8 0 1 1-10.62 12l-72-64a8 8 0 0 1 0-12l72-64a8 8 0 1 1 10.66 12m152 52-72-64a8 8 0 0 0-10.62 12L228 128l-65.27 58a8 8 0 1 0 10.62 12l72-64a8 8 0 0 0 0-12Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCodeSimple))
export { Memo as IconCodeSimple }
