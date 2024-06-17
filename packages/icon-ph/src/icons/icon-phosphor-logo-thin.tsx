/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPhosphorLogoThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M144 28H64a4 4 0 0 0-4 4v128a76.08 76.08 0 0 0 76 76 4 4 0 0 0 4-4v-68h4a68 68 0 0 0 0-136M68 47.27 129.16 156H68Zm64 97.46L70.84 36H132ZM68.13 164H132v63.88A68.1 68.1 0 0 1 68.13 164m75.87-8h-4V36h4a60 60 0 0 1 0 120"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPhosphorLogoThin))
export { Memo as IconPhosphorLogoThin }
