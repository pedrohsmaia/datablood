/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCodeBlock = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m58.34 101.66-32-32a8 8 0 0 1 0-11.32l32-32a8 8 0 0 1 11.32 11.32L43.31 64l26.35 26.34a8 8 0 0 1-11.32 11.32m40 0a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0 0-11.32l-32-32a8 8 0 0 0-11.32 11.32L124.69 64 98.34 90.34a8 8 0 0 0 0 11.32M200 40h-24a8 8 0 0 0 0 16h24v144H56v-64a8 8 0 0 0-16 0v64a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCodeBlock))
export { Memo as IconCodeBlock }
