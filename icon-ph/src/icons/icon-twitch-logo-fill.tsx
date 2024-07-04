/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconTwitchLogoFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M208 32H48a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h16v32a8 8 0 0 0 13.12 6.15L122.9 208h42.2a16 16 0 0 0 10.25-3.71l42.89-35.75a15.93 15.93 0 0 0 5.76-12.29V48a16 16 0 0 0-16-16m-80 104a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Zm48 0a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconTwitchLogoFill))
export { Memo as IconTwitchLogoFill }
