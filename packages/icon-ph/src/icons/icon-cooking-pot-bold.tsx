/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCookingPotBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M76 40V16a12 12 0 0 1 24 0v24a12 12 0 0 1-24 0m52 12a12 12 0 0 0 12-12V16a12 12 0 0 0-24 0v24a12 12 0 0 0 12 12m40 0a12 12 0 0 0 12-12V16a12 12 0 0 0-24 0v24a12 12 0 0 0 12 12m83.2 53.6L224 126v58a36 36 0 0 1-36 36H68a36 36 0 0 1-36-36v-58L4.8 105.6a12 12 0 0 1 14.4-19.2L32 96v-8a20 20 0 0 1 20-20h152a20 20 0 0 1 20 20v8l12.8-9.6a12 12 0 0 1 14.4 19.2M200 92H56v92a12 12 0 0 0 12 12h120a12 12 0 0 0 12-12Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCookingPotBold))
export { Memo as IconCookingPotBold }
