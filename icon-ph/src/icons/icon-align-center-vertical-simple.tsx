/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconAlignCenterVerticalSimple = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 120h-32V48a16 16 0 0 0-16-16H96a16 16 0 0 0-16 16v72H48a8 8 0 0 0 0 16h32v72a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-72h32a8 8 0 0 0 0-16m-48 88H96V48h64Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconAlignCenterVerticalSimple))
export { Memo as IconAlignCenterVerticalSimple }
