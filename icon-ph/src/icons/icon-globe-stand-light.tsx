/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconGlobeStandLight = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 174a78 78 0 1 0-78-78 78.09 78.09 0 0 0 78 78m0-144a66 66 0 1 1-66 66 66.08 66.08 0 0 1 66-66m76.33 136.89a6 6 0 0 1-.17 8.48A109.21 109.21 0 0 1 134 205.83V226h26a6 6 0 0 1 0 12H96a6 6 0 0 1 0-12h26v-20.17A110 110 0 0 1 18 97.06a109.36 109.36 0 0 1 30.62-77.22 6 6 0 0 1 8.66 8.32 98 98 0 0 0 138.56 138.56 6 6 0 0 1 8.49.17"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconGlobeStandLight))
export { Memo as IconGlobeStandLight }
