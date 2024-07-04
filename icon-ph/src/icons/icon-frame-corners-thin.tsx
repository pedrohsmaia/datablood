/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconFrameCornersThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M196 80v32a4 4 0 0 1-8 0V84h-28a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4M96 172H68v-28a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4h32a4 4 0 0 0 0-8M228 56v144a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v144a4 4 0 0 0 4 4h176a4 4 0 0 0 4-4Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconFrameCornersThin))
export { Memo as IconFrameCornersThin }
