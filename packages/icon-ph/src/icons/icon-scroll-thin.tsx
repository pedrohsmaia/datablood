/* eslint-disable @typescript-eslint/no-explicit-any */
import { themed } from '@tamagui/helpers-icon'
import type { IconProps } from '@tamagui/helpers-icon'
import * as React from 'react'
import { Svg, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
import { memo } from 'react'
const IconScrollThin = (_props: any) => {
  const { size = 24, ...props } = _props
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256" {...props}>
      <Path
        fill="currentColor"
        d="M100 104a4 4 0 0 1 4-4h64a4 4 0 0 1 0 8h-64a4 4 0 0 1-4-4m4 36h64a4 4 0 0 0 0-8h-64a4 4 0 0 0 0 8m124 52a28 28 0 0 1-28 28H88a28 28 0 0 1-28-28V64a20 20 0 0 0-40 0c0 7.78 6.34 12.75 6.4 12.8a4 4 0 1 1-4.8 6.4c-.39-.29-9.6-7.34-9.6-19.2a28 28 0 0 1 28-28h136a28 28 0 0 1 28 28v108h12a4 4 0 0 1 2.4.8c.39.29 9.6 7.34 9.6 19.2m-120 0c0-7.78-6.34-12.75-6.4-12.8a4 4 0 0 1 2.4-7.2h92V64a20 20 0 0 0-20-20H59.57A27.9 27.9 0 0 1 68 64v128a20 20 0 0 0 40 0m112 0c0-6-3.74-10.3-5.5-12H112.61a23.31 23.31 0 0 1 3.39 12 27.94 27.94 0 0 1-8.42 20H200a20 20 0 0 0 20-20"
      />
    </Svg>
  )
}
const Memo = memo(themed(IconScrollThin))
export { Memo as IconScrollThin }
