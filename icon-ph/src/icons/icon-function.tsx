/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFunction = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 40a8 8 0 0 1-8 8h-29.29a24 24 0 0 0-23.62 19.71l-9.5 52.29H184a8 8 0 0 1 0 16h-49.32l-10 55.16A40 40 0 0 1 85.29 224H56a8 8 0 0 1 0-16h29.29a24 24 0 0 0 23.62-19.71l9.5-52.29H72a8 8 0 0 1 0-16h49.32l10-55.16A40 40 0 0 1 170.71 32H200a8 8 0 0 1 8 8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFunction))
export { Memo as IconFunction }
