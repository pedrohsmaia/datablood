/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconWebcamThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M164 104a36 36 0 1 0-36 36 36 36 0 0 0 36-36m-64 0a28 28 0 1 1 28 28 28 28 0 0 1-28-28m124 100h-92v-24.11a76 76 0 1 0-8 0V204H32a4 4 0 0 0 0 8h192a4 4 0 0 0 0-8M60 104a68 68 0 1 1 68 68 68.07 68.07 0 0 1-68-68"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconWebcamThin))
export { Memo as IconWebcamThin }
