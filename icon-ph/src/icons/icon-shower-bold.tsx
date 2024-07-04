/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconShowerBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M68 236a16 16 0 1 1-16-16 16 16 0 0 1 16 16m16-48a16 16 0 1 0 16 16 16 16 0 0 0-16-16m-64 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16m32 0a16 16 0 1 0-16-16 16 16 0 0 0 16 16M256 40a12 12 0 0 1-12 12h-23l-25.81 25.79-21.45 125.54a20 20 0 0 1-33.86 10.8l-98-98a20 20 0 0 1 10.84-33.88l125.5-21.44 26.95-26.95A19.86 19.86 0 0 1 219.31 28H244a12 12 0 0 1 12 12m-86.68 46.68-105 17.94 87.07 87.07Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconShowerBold))
export { Memo as IconShowerBold }
