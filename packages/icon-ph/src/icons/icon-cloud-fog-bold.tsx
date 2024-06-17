/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCloudFogBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M120 200H72a12 12 0 0 1 0-24h48a12 12 0 0 1 0 24m64-24h-24a12 12 0 0 0 0 24h24a12 12 0 0 0 0-24m-24 36h-56a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24m72-124a76.08 76.08 0 0 1-76 76H76a52 52 0 1 1 9-103.22A76 76 0 0 1 232 88m-24 0a52 52 0 0 0-104 0 12 12 0 0 1-24 0c0-1.24 0-2.48.09-3.71A29.28 29.28 0 0 0 76 84a28 28 0 0 0 0 56h80a52.06 52.06 0 0 0 52-52"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCloudFogBold))
export { Memo as IconCloudFogBold }
