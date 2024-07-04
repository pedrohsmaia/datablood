/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSlideshowBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M184 44H72a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 144H76V68h104Zm64-132v144a12 12 0 0 1-24 0V56a12 12 0 0 1 24 0M36 56v144a12 12 0 0 1-24 0V56a12 12 0 0 1 24 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSlideshowBold))
export { Memo as IconSlideshowBold }
