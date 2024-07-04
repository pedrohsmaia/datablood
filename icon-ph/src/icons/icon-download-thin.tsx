/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconDownloadThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M236 136v64a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12v-64a12 12 0 0 1 12-12h40a4 4 0 0 1 0 8H32a4 4 0 0 0-4 4v64a4 4 0 0 0 4 4h192a4 4 0 0 0 4-4v-64a4 4 0 0 0-4-4h-40a4 4 0 0 1 0-8h40a12 12 0 0 1 12 12m-110.83-5.17a4 4 0 0 0 5.66 0l48-48a4 4 0 1 0-5.66-5.66L132 118.34V24a4 4 0 0 0-8 0v94.34L82.83 77.17a4 4 0 0 0-5.66 5.66ZM196 168a8 8 0 1 0-8 8 8 8 0 0 0 8-8"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconDownloadThin))
export { Memo as IconDownloadThin }
