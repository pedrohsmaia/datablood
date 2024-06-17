/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCloudXBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M160 36a92.09 92.09 0 0 0-81 48.36A68 68 0 1 0 72 220h88a92 92 0 0 0 0-184m0 160H72a44 44 0 0 1-1.82-88A91.86 91.86 0 0 0 68 128a12 12 0 0 0 24 0 68 68 0 1 1 68 68m32.49-75.51L177 136l15.52 15.51a12 12 0 0 1-17 17L160 153l-15.51 15.52a12 12 0 1 1-17-17L143 136l-15.52-15.51a12 12 0 1 1 17-17L160 119l15.51-15.52a12 12 0 0 1 17 17Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCloudXBold))
export { Memo as IconCloudXBold }
