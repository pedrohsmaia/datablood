/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPiFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-36 136a12 12 0 0 0 12-12 8 8 0 0 1 16 0 28 28 0 0 1-56 0V96h-32v80a8 8 0 0 1-16 0V96h-8a24 24 0 0 0-24 24 8 8 0 0 1-16 0 40 40 0 0 1 40-40h104a8 8 0 0 1 0 16h-32v60a12 12 0 0 0 12 12"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPiFill))
export { Memo as IconPiFill }
