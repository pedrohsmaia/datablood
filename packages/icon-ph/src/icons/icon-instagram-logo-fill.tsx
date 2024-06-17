/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconInstagramLogoFill = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M176 24H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56m-48 152a48 48 0 1 1 48-48 48.05 48.05 0 0 1-48 48m60-96a12 12 0 1 1 12-12 12 12 0 0 1-12 12m-28 48a32 32 0 1 1-32-32 32 32 0 0 1 32 32"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconInstagramLogoFill))
export { Memo as IconInstagramLogoFill }
