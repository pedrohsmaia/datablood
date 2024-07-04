/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberThreeFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-76 168a43.85 43.85 0 0 1-34.22-16.34 8 8 0 0 1 12.44-10.06A28 28 0 1 0 126 120.07a8 8 0 0 1-5.58-13.1l22.48-27H96a8 8 0 0 1 0-16h64a8 8 0 0 1 6.15 13.12l-25.23 30.27A44 44 0 0 1 124 192"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberThreeFill))
export { Memo as IconNumberThreeFill }
