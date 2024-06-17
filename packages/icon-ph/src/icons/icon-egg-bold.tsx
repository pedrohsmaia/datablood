/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconEggBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M190 57.34C171.06 29 147.88 12 128 12S84.94 29 66 57.34C46.94 86 36 120.46 36 152a92 92 0 0 0 184 0c0-31.54-10.94-66-30-94.66M128 220a68.07 68.07 0 0 1-68-68c0-61.12 46.19-116 68-116s68 54.88 68 116a68.07 68.07 0 0 1-68 68"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconEggBold))
export { Memo as IconEggBold }
