/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconArticleMediumFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M56 144a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h8V72h-8a8 8 0 0 1 0-16h16a8 8 0 0 1 6.78 3.74L80 112.91l33.22-53.15A8 8 0 0 1 120 56h16a8 8 0 0 1 0 16h-8v64h8a8 8 0 0 1 0 16h-24a8 8 0 0 1 0-16V91.89l-25.22 40.35a8 8 0 0 1-13.56 0L48 91.89V136a8 8 0 0 1 8 8m184-24h-72a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8m0 48H72a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h168a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8m0-96h-72a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8V80a8 8 0 0 0-8-8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconArticleMediumFill))
export { Memo as IconArticleMediumFill }
