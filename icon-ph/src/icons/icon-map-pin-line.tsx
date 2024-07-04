/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMapPinLine = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 224h-49.46A266.56 266.56 0 0 0 174 200.25c27.45-31.57 42-64.85 42-96.25a88 88 0 0 0-176 0c0 31.4 14.51 64.68 42 96.25A266.56 266.56 0 0 0 105.46 224H56a8 8 0 0 0 0 16h144a8 8 0 0 0 0-16M56 104a72 72 0 0 1 144 0c0 57.23-55.47 105-72 118-16.53-13-72-60.77-72-118m112 0a40 40 0 1 0-40 40 40 40 0 0 0 40-40m-64 0a24 24 0 1 1 24 24 24 24 0 0 1-24-24"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMapPinLine))
export { Memo as IconMapPinLine }
