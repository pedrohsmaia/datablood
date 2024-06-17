/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAlignCenterVerticalBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 116h-8V72a20 20 0 0 0-20-20h-40a20 20 0 0 0-20 20v44h-16V48a20 20 0 0 0-20-20H60a20 20 0 0 0-20 20v68h-8a12 12 0 0 0 0 24h8v68a20 20 0 0 0 20 20h40a20 20 0 0 0 20-20v-68h16v44a20 20 0 0 0 20 20h40a20 20 0 0 0 20-20v-44h8a12 12 0 0 0 0-24M96 204H64V52h32Zm96-24h-32V76h32Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAlignCenterVerticalBold))
export { Memo as IconAlignCenterVerticalBold }
