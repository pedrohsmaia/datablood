/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArrowBendRightDownBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m208.49 184.49-48 48a12 12 0 0 1-17 0l-48-48a12 12 0 0 1 17-17L140 195v-67a84.09 84.09 0 0 0-84-84 12 12 0 0 1 0-24 108.12 108.12 0 0 1 108 108v67l27.51-27.52a12 12 0 0 1 17 17Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArrowBendRightDownBold))
export { Memo as IconArrowBendRightDownBold }
