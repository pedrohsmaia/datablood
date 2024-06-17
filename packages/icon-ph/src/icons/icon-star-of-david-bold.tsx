/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconStarOfDavidBold = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="m205.82 128 28.6-50A12 12 0 0 0 224 60h-57l-28.55-50A12 12 0 0 0 128 4a12 12 0 0 0-10.42 6.05L89 60H32a12 12 0 0 0-10.42 18l28.58 50-28.58 50A12 12 0 0 0 32 196h57l28.57 50a12 12 0 0 0 20.84 0L167 196h57a12 12 0 0 0 10.42-17.95Zm-2.5-44L192 103.81 180.68 84Zm-25.14 44L153 172h-50.1l-25.09-44 25.13-44H153ZM128 40.18 139.33 60h-22.67ZM52.68 84h22.61L64 103.82Zm0 87.92L64 152.18 75.29 172Zm75.32 43.9L116.66 196h22.67ZM180.68 172 192 152.19 203.32 172Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconStarOfDavidBold))
export { Memo as IconStarOfDavidBold }
