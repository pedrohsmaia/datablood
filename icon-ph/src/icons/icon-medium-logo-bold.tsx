/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMediumLogoBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M68 60a68 68 0 1 0 68 68 68.07 68.07 0 0 0-68-68m0 112a44 44 0 1 1 44-44 44.05 44.05 0 0 1-44 44M184 60c-23.63 0-36 34.21-36 68s12.37 68 36 68 36-34.21 36-68-12.37-68-36-68m0 111.87c-3.74-2.16-12-17.09-12-43.87s8.26-41.71 12-43.87c3.74 2.16 12 17.09 12 43.87s-8.26 41.71-12 43.87M256 72v112a12 12 0 0 1-24 0V72a12 12 0 0 1 24 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMediumLogoBold))
export { Memo as IconMediumLogoBold }
