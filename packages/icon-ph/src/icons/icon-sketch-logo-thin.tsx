/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconSketchLogoThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m243 101.37-56-64a4 4 0 0 0-3-1.37H72a4 4 0 0 0-3 1.37l-56 64a4 4 0 0 0 .09 5.36l112 120a4 4 0 0 0 5.84 0l112-120a4 4 0 0 0 .07-5.36M77.29 108l39.07 97.66L25.2 108Zm92.8 0L128 213.23 85.91 108ZM88 100l40-53.33L168 100Zm90.71 8h52.09l-91.16 97.66Zm52.47-8H178l-42-56h46.18ZM73.82 44H120l-42 56H24.82Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconSketchLogoThin))
export { Memo as IconSketchLogoThin }
