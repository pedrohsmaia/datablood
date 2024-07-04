/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconPlaylistLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6m6 70h120a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12m72 52H40a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m133.75-60.28a6 6 0 0 1-7.48 4L206 120.06V192a30 30 0 1 1-12-24v-56a6 6 0 0 1 7.72-5.75l40 12a6 6 0 0 1 4.03 7.47M194 192a18 18 0 1 0-18 18 18 18 0 0 0 18-18"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconPlaylistLight))
export { Memo as IconPlaylistLight }
