/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconRssFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M76 192a12 12 0 1 1 12-12 12 12 0 0 1-12 12m44 0a8 8 0 0 1-8-8 40 40 0 0 0-40-40 8 8 0 0 1 0-16 56.06 56.06 0 0 1 56 56 8 8 0 0 1-8 8m32 0a8 8 0 0 1-8-8 72.08 72.08 0 0 0-72-72 8 8 0 0 1 0-16 88.1 88.1 0 0 1 88 88 8 8 0 0 1-8 8m32 0a8 8 0 0 1-8-8A104.11 104.11 0 0 0 72 80a8 8 0 0 1 0-16 120.13 120.13 0 0 1 120 120 8 8 0 0 1-8 8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconRssFill))
export { Memo as IconRssFill }
