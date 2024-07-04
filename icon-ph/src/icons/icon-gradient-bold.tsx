/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGradientBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M20 108a12 12 0 0 1 12-12h76a12 12 0 0 1 0 24H32a12 12 0 0 1-12-12m204-12h-76a12 12 0 0 0 0 24h76a12 12 0 0 0 0-24M68 136H32a12 12 0 0 0 0 24h36a12 12 0 0 0 0-24m156 0h-36a12 12 0 0 0 0 24h36a12 12 0 0 0 0-24M96 148a12 12 0 0 0 12 12h40a12 12 0 0 0 0-24h-40a12 12 0 0 0-12 12m-44 28H32a12 12 0 0 0 0 24h20a12 12 0 0 0 0-24m56 0H92a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24m56 0h-16a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24m60 0h-20a12 12 0 0 0 0 24h20a12 12 0 0 0 0-24M32 80h192a12 12 0 0 0 0-24H32a12 12 0 0 0 0 24"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGradientBold))
export { Memo as IconGradientBold }
