/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconMediumLogoThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M72 68a60 60 0 1 0 60 60 60.07 60.07 0 0 0-60-60m0 112a52 52 0 1 1 52-52 52.06 52.06 0 0 1-52 52M184 68c-16 0-28 25.79-28 60s12 60 28 60 28-25.79 28-60-12-60-28-60m0 112c-9.46 0-20-21.36-20-52s10.54-52 20-52 20 21.36 20 52-10.54 52-20 52m60-108v112a4 4 0 0 1-8 0V72a4 4 0 0 1 8 0"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconMediumLogoThin))
export { Memo as IconMediumLogoThin }
