/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMartiniBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M243.09 35.41A12 12 0 0 0 232 28H24a12 12 0 0 0-8.48 20.49L116 149v55H88a12 12 0 0 0 0 24h80a12 12 0 0 0 0-24h-28v-55L240.48 48.49a12 12 0 0 0 2.61-13.08M203 52l-12 12H65L53 52Zm-75 75L89 88h78Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMartiniBold))
export { Memo as IconMartiniBold }
