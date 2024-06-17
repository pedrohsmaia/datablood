/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconVirtualReality = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m123.41 99-26 64a8 8 0 0 1-14.82 0l-26-64a8 8 0 1 1 14.82-6L90 138.74 108.59 93a8 8 0 1 1 14.82 6M256 128a80.09 80.09 0 0 1-80 80H80a80 80 0 0 1 0-160h96a80.09 80.09 0 0 1 80 80m-16 0a64.07 64.07 0 0 0-64-64H80a64 64 0 0 0 0 128h96a64.07 64.07 0 0 0 64-64m-59.16 10.35L191 156a8 8 0 0 1-13.9 7.94l-11.44-20c-.53 0-1.07.05-1.61.05H152v16a8 8 0 0 1-16 0V96a8 8 0 0 1 8-8h20a28 28 0 0 1 16.84 50.35M152 128h12a12 12 0 0 0 0-24h-12Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconVirtualReality))
export { Memo as IconVirtualReality }
