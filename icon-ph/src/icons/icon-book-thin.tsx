/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBookThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 28H72a28 28 0 0 0-28 28v168a4 4 0 0 0 4 4h144a4 4 0 0 0 0-8H52v-4a20 20 0 0 1 20-20h136a4 4 0 0 0 4-4V32a4 4 0 0 0-4-4m-4 160H72a27.94 27.94 0 0 0-20 8.42V56a20 20 0 0 1 20-20h132Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBookThin))
export { Memo as IconBookThin }
