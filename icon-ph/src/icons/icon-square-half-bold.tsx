/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSquareHalfBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 36H56a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-60 64h56v16h-56Zm0 40h56v16h-56Zm56-64h-56V60h56ZM60 60h56v136H60Zm80 136v-16h56v16Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSquareHalfBold))
export { Memo as IconSquareHalfBold }
