/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconOfficeChair = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M248 128a8 8 0 0 1-8 8h-16.67A48.08 48.08 0 0 1 176 176h-40v24h24a32 32 0 0 1 32 32 8 8 0 0 1-16 0 16 16 0 0 0-16-16h-24v16a8 8 0 0 1-16 0v-16H96a16 16 0 0 0-16 16 8 8 0 0 1-16 0 32 32 0 0 1 32-32h24v-24H80a48.08 48.08 0 0 1-47.33-40H16a8 8 0 0 1 0-16h24a8 8 0 0 1 8 8 32 32 0 0 0 32 32h96a32 32 0 0 0 32-32 8 8 0 0 1 8-8h24a8 8 0 0 1 8 8M67.91 138.48a16 16 0 0 1-3.75-12.74l13.72-96A16.08 16.08 0 0 1 93.72 16h68.56a16.08 16.08 0 0 1 15.84 13.74l13.72 96A16 16 0 0 1 176 144H80a16 16 0 0 1-12.09-5.52M80 128h96l-13.72-96H93.71Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconOfficeChair))
export { Memo as IconOfficeChair }
