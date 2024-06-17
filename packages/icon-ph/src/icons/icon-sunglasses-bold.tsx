/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSunglassesBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M200 36a12 12 0 0 0 0 24 12 12 0 0 1 12 12v52H44V72a12 12 0 0 1 12-12 12 12 0 0 0 0-24 36 36 0 0 0-36 36v92a48 48 0 0 0 96 0v-16h24v16a48 48 0 0 0 96 0V72a36 36 0 0 0-36-36m11.18 134.21L189 148h23v16a24 24 0 0 1-.82 6.21M44 164v-7l30.21 30.21A24 24 0 0 1 44 164m48 0a24 24 0 0 1-.82 6.21L69 148h23Zm72 0v-7l30.21 30.21A24 24 0 0 1 164 164"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSunglassesBold))
export { Memo as IconSunglassesBold }
