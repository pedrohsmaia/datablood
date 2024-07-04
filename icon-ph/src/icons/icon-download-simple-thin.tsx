/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDownloadSimpleThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M220 152v56a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12v-56a4 4 0 0 1 8 0v56a4 4 0 0 0 4 4h160a4 4 0 0 0 4-4v-56a4 4 0 0 1 8 0m-94.83 2.83a4 4 0 0 0 5.66 0l40-40a4 4 0 1 0-5.66-5.66L132 142.34V40a4 4 0 0 0-8 0v102.34l-33.17-33.17a4 4 0 0 0-5.66 5.66Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDownloadSimpleThin))
export { Memo as IconDownloadSimpleThin }
