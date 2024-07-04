/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconChartPolarThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m91.91 96h-32.06A60.07 60.07 0 0 0 132 68.15V36.09A92.13 92.13 0 0 1 219.91 124M124 124H76.17A52.05 52.05 0 0 1 124 76.17Zm0 8v47.83A52.05 52.05 0 0 1 76.17 132Zm8 0h47.83A52.05 52.05 0 0 1 132 179.83Zm0-8V76.17A52.05 52.05 0 0 1 179.83 124Zm-8-87.91v32.06A60.07 60.07 0 0 0 68.15 124H36.09A92.13 92.13 0 0 1 124 36.09M36.09 132h32.06A60.07 60.07 0 0 0 124 187.85v32.06A92.13 92.13 0 0 1 36.09 132M132 219.91v-32.06A60.07 60.07 0 0 0 187.85 132h32.06A92.13 92.13 0 0 1 132 219.91"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconChartPolarThin))
export { Memo as IconChartPolarThin }
