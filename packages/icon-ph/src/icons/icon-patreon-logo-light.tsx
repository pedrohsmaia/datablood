/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPatreonLogoLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M176 42a62 62 0 1 0 62 62 62.07 62.07 0 0 0-62-62m0 112a50 50 0 1 1 50-50 50.06 50.06 0 0 1-50 50M80 42H64a14 14 0 0 0-14 14v152a14 14 0 0 0 14 14h16a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 166a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPatreonLogoLight))
export { Memo as IconPatreonLogoLight }
