/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowsMergeBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M196 40v64a12 12 0 0 1-3.51 8.49L140 165v38l11.51-11.52a12 12 0 0 1 17 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 0 1 17-17L116 203v-38l-52.49-52.51A12 12 0 0 1 60 104V40a12 12 0 0 1 24 0v59l44 44 44-44V40a12 12 0 0 1 24 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowsMergeBold))
export { Memo as IconArrowsMergeBold }
