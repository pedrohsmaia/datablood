/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconCpuThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M152 100h-48a4 4 0 0 0-4 4v48a4 4 0 0 0 4 4h48a4 4 0 0 0 4-4v-48a4 4 0 0 0-4-4m-4 48h-40v-40h40Zm84 0h-20v-40h20a4 4 0 0 0 0-8h-20V56a12 12 0 0 0-12-12h-44V24a4 4 0 0 0-8 0v20h-40V24a4 4 0 0 0-8 0v20H56a12 12 0 0 0-12 12v44H24a4 4 0 0 0 0 8h20v40H24a4 4 0 0 0 0 8h20v44a12 12 0 0 0 12 12h44v20a4 4 0 0 0 8 0v-20h40v20a4 4 0 0 0 8 0v-20h44a12 12 0 0 0 12-12v-44h20a4 4 0 0 0 0-8m-28 52a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconCpuThin))
export { Memo as IconCpuThin }
