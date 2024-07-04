/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCrosshairSimpleLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m6 191.8V184a6 6 0 0 0-12 0v33.8A90.15 90.15 0 0 1 38.2 134H72a6 6 0 0 0 0-12H38.2A90.15 90.15 0 0 1 122 38.2V72a6 6 0 0 0 12 0V38.2a90.15 90.15 0 0 1 83.8 83.8H184a6 6 0 0 0 0 12h33.8a90.15 90.15 0 0 1-83.8 83.8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCrosshairSimpleLight))
export { Memo as IconCrosshairSimpleLight }
