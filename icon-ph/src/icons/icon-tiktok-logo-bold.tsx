/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTiktokLogoBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M224 68a44.05 44.05 0 0 1-44-44 12 12 0 0 0-12-12h-40a12 12 0 0 0-12 12v132a16 16 0 1 1-22.85-14.47 12 12 0 0 0 6.85-10.84V88a12 12 0 0 0-14.1-11.81 79.35 79.35 0 0 0-47.08 27.74A81.84 81.84 0 0 0 20 156a80 80 0 0 0 160 0v-33.33a107.47 107.47 0 0 0 44 9.33 12 12 0 0 0 12-12V80a12 12 0 0 0-12-12m-12 39.15a83.05 83.05 0 0 1-37-14.91 12 12 0 0 0-19 9.76v54a56 56 0 0 1-112 0 57.86 57.86 0 0 1 32-51.56V124a40 40 0 1 0 64 32V36h17.06A68.21 68.21 0 0 0 212 90.94Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTiktokLogoBold))
export { Memo as IconTiktokLogoBold }
