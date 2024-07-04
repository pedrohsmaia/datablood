/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconShapesThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M67.79 62.74a4 4 0 0 0-7.58 0l-40 120A4 4 0 0 0 24 188h80a4 4 0 0 0 3.79-5.26ZM29.55 180 64 76.65 98.45 180ZM204 76a48 48 0 1 0-48 48 48.05 48.05 0 0 0 48-48m-88 0a40 40 0 1 1 40 40 40 40 0 0 1-40-40m108 72h-88a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4h88a4 4 0 0 0 4-4v-56a4 4 0 0 0-4-4m-4 56h-80v-48h80Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconShapesThin))
export { Memo as IconShapesThin }
