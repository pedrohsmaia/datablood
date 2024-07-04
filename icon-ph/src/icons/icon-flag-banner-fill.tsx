/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFlagBannerFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m231.22 59.44-80 168a8 8 0 1 1-14.44-6.88L165.62 160H32a8 8 0 0 1-5.88-13.43l42.56-46.1L26.59 61.9A8 8 0 0 1 32 48h192a8 8 0 0 1 7.22 11.44"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFlagBannerFill))
export { Memo as IconFlagBannerFill }
