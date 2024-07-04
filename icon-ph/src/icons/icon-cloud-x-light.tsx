/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCloudXLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M160 42a86.11 86.11 0 0 0-77.57 48.88A62 62 0 1 0 72 214h88a86 86 0 0 0 0-172m0 160H72a50 50 0 0 1 0-100 50.67 50.67 0 0 1 5.91.35A85.61 85.61 0 0 0 74 128a6 6 0 0 0 12 0 74 74 0 1 1 74 74m28.24-85.76L168.48 136l19.76 19.76a6 6 0 1 1-8.48 8.48L160 144.48l-19.76 19.76a6 6 0 0 1-8.48-8.48L151.52 136l-19.76-19.76a6 6 0 0 1 8.48-8.48L160 127.52l19.76-19.76a6 6 0 0 1 8.48 8.48"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCloudXLight))
export { Memo as IconCloudXLight }
