/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconNumberCircleTwoThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92m22.36-99.15L112 172h40a4 4 0 0 1 0 8h-48a4 4 0 0 1-3.2-6.4L144 116a20 20 0 0 0-4-28 20 20 0 0 0-28 4 20.08 20.08 0 0 0-2.89 5.37 4 4 0 0 1-7.55-2.66 28.19 28.19 0 0 1 4-7.52 28 28 0 1 1 44.72 33.7Z"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconNumberCircleTwoThin))
export { Memo as IconNumberCircleTwoThin }
