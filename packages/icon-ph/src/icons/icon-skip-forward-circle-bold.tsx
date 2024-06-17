/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSkipForwardCircleBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84m32-136a12 12 0 0 0-12 12v18.35l-45.64-28.53A12 12 0 0 0 84 88v80a12 12 0 0 0 18.36 10.18L148 149.65V168a12 12 0 0 0 24 0V88a12 12 0 0 0-12-12m-52 70.35v-36.7L137.36 128Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSkipForwardCircleBold))
export { Memo as IconSkipForwardCircleBold }
