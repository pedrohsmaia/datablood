/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconExportThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M212 112v96a12 12 0 0 1-12 12H56a12 12 0 0 1-12-12v-96a12 12 0 0 1 12-12h24a4 4 0 0 1 0 8H56a4 4 0 0 0-4 4v96a4 4 0 0 0 4 4h144a4 4 0 0 0 4-4v-96a4 4 0 0 0-4-4h-24a4 4 0 0 1 0-8h24a12 12 0 0 1 12 12M90.83 66.83 124 33.66V136a4 4 0 0 0 8 0V33.66l33.17 33.17a4 4 0 1 0 5.66-5.66l-40-40a4 4 0 0 0-5.66 0l-40 40a4 4 0 0 0 5.66 5.66"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconExportThin))
export { Memo as IconExportThin }
