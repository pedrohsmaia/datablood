/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCompassToolFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M215.12 123.64a8 8 0 1 0-14.24-7.28 79.58 79.58 0 0 1-33.08 33.5l-18.24-41.05A36 36 0 0 0 136 44.91V24a8 8 0 0 0-16 0v20.91a36 36 0 0 0-13.56 63.9L56.69 220.75a8 8 0 1 0 14.62 6.5l25.14-56.56A95.48 95.48 0 0 0 128 176a99.13 99.13 0 0 0 31.6-5.21l25.09 56.46a8 8 0 0 0 14.62-6.5l-25-56.25a95.81 95.81 0 0 0 40.81-40.86M128 160a79.52 79.52 0 0 1-25-4l18.08-40.68a35.75 35.75 0 0 0 13.88 0l18.14 40.8A83.21 83.21 0 0 1 128 160"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCompassToolFill))
export { Memo as IconCompassToolFill }
