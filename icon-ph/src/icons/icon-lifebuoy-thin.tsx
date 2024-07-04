/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconLifebuoyThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m67.79 162.13-34-34a43.92 43.92 0 0 0 0-56.28l34-34a91.83 91.83 0 0 1 0 124.26ZM92 128a36 36 0 1 1 36 36 36 36 0 0 1-36-36m98.13-67.79-34 34a43.92 43.92 0 0 0-56.28 0l-34-34a91.83 91.83 0 0 1 124.26 0ZM60.21 65.87l34 34a43.92 43.92 0 0 0 0 56.28l-34 34a91.83 91.83 0 0 1 0-124.26Zm5.66 129.92 34-34a43.92 43.92 0 0 0 56.28 0l34 34a91.83 91.83 0 0 1-124.26 0Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconLifebuoyThin))
export { Memo as IconLifebuoyThin }
