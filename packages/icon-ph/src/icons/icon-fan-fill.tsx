/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFanFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M233 135a60 60 0 0 0-89.62-35.45l16.39-65.44a8 8 0 0 0-3.45-8.68 60 60 0 1 0-60.63 103.48l-64.87 18.53a8 8 0 0 0-5.8 7.32 60 60 0 0 0 44.42 60.66 60.52 60.52 0 0 0 15.62 2.07 60.07 60.07 0 0 0 59.88-62l48.48 46.92a8 8 0 0 0 9.25 1.35A60 60 0 0 0 233 135m-102.56 12.85a20 20 0 1 1 17.41-22.29 20 20 0 0 1-17.41 22.29"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFanFill))
export { Memo as IconFanFill }
