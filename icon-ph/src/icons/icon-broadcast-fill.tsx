/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconBroadcastFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M168 128a40 40 0 1 1-40-40 40 40 0 0 1 40 40m40 0a79.74 79.74 0 0 0-20.37-53.33 8 8 0 1 0-11.92 10.67 64 64 0 0 1 0 85.33 8 8 0 0 0 11.92 10.67A79.79 79.79 0 0 0 208 128M80.29 85.34a8 8 0 1 0-11.92-10.67 79.94 79.94 0 0 0 0 106.67 8 8 0 0 0 11.92-10.67 63.95 63.95 0 0 1 0-85.33m158.28-4A119.48 119.48 0 0 0 213.71 44a8 8 0 1 0-11.42 11.2 103.9 103.9 0 0 1 0 145.56A8 8 0 1 0 213.71 212a120.12 120.12 0 0 0 24.86-130.71Zm-206.4 87.14A103.9 103.9 0 0 1 53.71 55.22 8 8 0 1 0 42.29 44a119.87 119.87 0 0 0 0 168 8 8 0 1 0 11.42-11.2 103.61 103.61 0 0 1-21.54-32.32"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconBroadcastFill))
export { Memo as IconBroadcastFill }
